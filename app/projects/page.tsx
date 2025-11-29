import type { Metadata } from 'next';
import Container from '@/components/layout/container';
import ProjectCard from '@/components/home/project-card';
import { Description, Section, Title } from '@/components/ui/section';
import { projects, works } from '@/data/data';
import Button from '@/components/ui/button';
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
            <div className="bg-secondary rounded-3xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Welcome to my digital workshop! Here you&apos;ll find a
                  curated collection of
                  <span className="text-primary font-medium">
                    {' '}
                    professional projects{' '}
                  </span>
                  and
                  <span className="text-primary font-medium">
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
            <div className="bg-secondary rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-info rounded-lg">
                  <FiBriefcase className="w-6 h-6 text-info-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Total Projects
                </h3>
              </div>
              <p className="text-3xl font-bold text-info mb-1">{totalItems}</p>
              <p className="text-sm text-muted-foreground">
                {totalWorks} works + {totalProjects} projects
              </p>
            </div>

            {/* Unique Technologies */}
            <div className="bg-secondary rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-success rounded-lg">
                  <FiCode className="w-6 h-6 text-success-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Technologies
                </h3>
              </div>
              <p className="text-3xl font-bold text-success mb-1">
                {totalUniqueTechnologies}
              </p>
              <p className="text-sm text-muted-foreground">
                Unique technologies used
              </p>
            </div>

            {/* Years Active */}
            <div className="bg-secondary rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent rounded-lg">
                  <FiCalendar className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Years Active
                </h3>
              </div>
              <p className="text-3xl font-bold text-accent mb-1">
                {maxYear - minYear + 1}
              </p>
              <p className="text-sm text-muted-foreground">
                {minYear} - {maxYear}
              </p>
            </div>

            {/* Most Used Category */}
            <div className="bg-secondary rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-warning rounded-lg">
                  <FiTrendingUp className="w-6 h-6 text-warning-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Completion Rate
                </h3>
              </div>
              <p className="text-3xl font-bold text-warning mb-1">
                {completionRate}%
              </p>
              <p className="text-sm text-muted-foreground">
                {completedProjects} of {totalItems} completed
              </p>
            </div>
          </div>
        </Section>
      </Container>
    </main>
  );
}
