import type { Metadata } from 'next';
import Container from '@/app/ui/container';
import Header from '@/app/ui/header';
import ProjectCard from '@/app/ui/home/project-card';
import { Description, Section, Title } from '@/app/ui/section';
import { projects, works } from '@/app/data/data';
import Button from '@/app/ui/button';
import { FiArrowRight, FiBriefcase } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore Abdulrahman Moussa’s projects, works, and development experience.',
  keywords: [
    'Abdulrahman Moussa projects',
    'frontend developer',
    'React developer',
    'Next.js developer',
    'JavaScript expert',
    'web development',
    'portfolio',
    'Cairo developer',
    'software engineering',
  ],
  openGraph: {
    title: 'Abdulrahman Moussa - Projects',
    description:
      'Explore Abdulrahman Moussa’s projects, works, and development experience.',
    url: 'https://3bdulrahmn.tech/projects',
    siteName: 'Abdulrahman Moussa Portfolio',
    images: [
      {
        url: '/images/og-projects.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Abdulrahman Moussa - Projects',
    card: 'summary_large_image',
    description:
      'Explore Abdulrahman Moussa’s projects, works, and development experience.',
    images: ['/images/og-projects.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <div>
      <div className="mt-8">
        <Header />
      </div>
      <main className="pt-8">
        <Container>
          <Section id="projects-intro" className="mb-16">
            <div className="text-center md:text-left">
              <div className="bg-gradient-to-r from-primary-light/10 to-secondary-light/10 dark:from-primary-dark/20 dark:to-secondary-dark/20 rounded-3xl p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Welcome to my digital workshop! Here you&apos;ll find a
                    curated collection of
                    <span className="text-primary-light dark:text-primary-dark font-medium">
                      {' '}
                      professional projects{' '}
                    </span>
                    and
                    <span className="text-primary-light dark:text-primary-dark font-medium">
                      {' '}
                      personal experiments{' '}
                    </span>
                    that showcase my journey in frontend development.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <Button
                      href="/about"
                      variant="primary"
                      ariaLabel="Learn more about me"
                      className="group inline-flex items-center gap-2 px-6 py-3 text-lg w-fit"
                    >
                      My Story
                      <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                      href="#works"
                      variant="tertiary"
                      ariaLabel="View works"
                      className="group inline-flex items-center gap-2 px-2 py-3 text-lg w-fit"
                    >
                      <FiBriefcase className="w-5 h-5" />
                      <span>Jump to Works</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Section id="works" className="mb-8">
            <Title>Works</Title>
            <Description>
              Here are some of the works I have done. Click on the cards to view
              more details.
            </Description>
            <div className="flex flex-col justify-center items-center md:items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((work) => (
                <ProjectCard key={work.slug} {...work} />
              ))}
            </div>
          </Section>
          <Section id="projects" className="mb-8">
            <Title>Projects</Title>
            <Description>
              Here are some of the projects I have done. Click on the cards to
              view more details.
            </Description>
            <div className="flex flex-col justify-center items-center md:items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </Section>
        </Container>
      </main>
    </div>
  );
}
