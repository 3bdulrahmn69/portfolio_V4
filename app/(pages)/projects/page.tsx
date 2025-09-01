import type { Metadata } from 'next';
import Container from '@/app/ui/container';
import ProjectCard from '@/app/ui/home/project-card';
import { Description, Section, Title } from '@/app/ui/section';
import { projects, works } from '@/app/data/data';
import Button from '@/app/ui/button';
import {
  FiArrowRight,
  FiBriefcase,
  FiCode,
  FiTrendingUp,
  FiCalendar,
} from 'react-icons/fi';

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
    siteName: 'Abdulrahman Moussa Portfolio',
    images: [
      {
        url: 'https://raw.githubusercontent.com/3bdulrahmn69/portfolio_V4/refs/heads/main/public/og-projects.jpg',
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
    images: [
      'https://raw.githubusercontent.com/3bdulrahmn69/portfolio_V4/refs/heads/main/public/og-projects.jpg',
    ],
  },
};

export default function ProjectsPage() {
  // Calculate statistics
  const totalProjects = projects.length;
  const totalWorks = works.length;
  const totalItems = totalProjects + totalWorks;

  // Get unique technologies
  const allTechStacks = [...projects, ...works]
    .map((item) => item.techStack)
    .flat();
  const uniqueTechnologies = new Set(allTechStacks);
  const totalUniqueTechnologies = uniqueTechnologies.size;

  // Get year range
  const years = [...projects, ...works].map((item) => item.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  // Get completion statistics
  const completedProjects = [...projects, ...works].filter(
    (item) => item.status === 'completed'
  ).length;
  const completionRate = Math.round((completedProjects / totalItems) * 100);

  return (
    <main className="pt-8">
      <Container>
        <Section id="projects-intro" className="mb-16 animate-FadeInRev">
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
        <Section id="works" className="mb-8 animate-slideUp">
          <Title>Works</Title>
          <Description>
            A collection of my professional projects, showcasing my skills and
            experience in frontend development.
          </Description>
          <div className="flex flex-col justify-center items-center md:items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work) => (
              <ProjectCard key={work.slug} {...work} />
            ))}
          </div>
        </Section>
        <Section id="projects" className="mb-8 animate-slideUp">
          <Title>Projects</Title>
          <Description>
            Explore my personal projects, where I apply my skills and creativity
            to build innovative solutions and experiment with new technologies.
          </Description>
          <div className="flex flex-col justify-center items-center md:items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </Section>

        {/* Statistics Section */}
        <Section id="statistics" className="mb-16 animate-slideUp">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Total Projects & Works */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <FiBriefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Total Projects
                </h3>
              </div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {totalItems}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {totalWorks} works + {totalProjects} projects
              </p>
            </div>

            {/* Unique Technologies */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-500 rounded-lg">
                  <FiCode className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Technologies
                </h3>
              </div>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                {totalUniqueTechnologies}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Unique technologies used
              </p>
            </div>

            {/* Years Active */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <FiCalendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Years Active
                </h3>
              </div>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                {maxYear - minYear + 1}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {minYear} - {maxYear}
              </p>
            </div>

            {/* Most Used Category */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-500 rounded-lg">
                  <FiTrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Completion Rate
                </h3>
              </div>
              <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                {completionRate}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {completedProjects} of {totalItems} completed
              </p>
            </div>
          </div>
        </Section>
      </Container>
    </main>
  );
}
