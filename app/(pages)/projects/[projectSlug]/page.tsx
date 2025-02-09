import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { works, projects } from '@/app/data/data';
import { Project } from '@/app/lib/definitions';
import Container from '@/app/ui/container';
import Header from '@/app/ui/header';

import { FiGithub, FiExternalLink } from 'react-icons/fi';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}): Promise<Metadata> {
  const projectSlug = (await params).projectSlug;

  const project = getProject(projectSlug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found',
    };
  }

  return {
    title: `${project.title} | Project Details`,
    description: project.description,
    openGraph: {
      images: [
        {
          url:
            typeof project.image === 'string'
              ? project.image
              : project.image.src,
        },
      ],
    },
  };
}

function getProject(slug: string): Project | undefined {
  return (
    works.find((work) => work.slug === slug) ??
    projects.find((project) => project.slug === slug)
  );
}
export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const projectSlug = (await params).projectSlug;
  const project = getProject(projectSlug);

  if (!project) {
    return notFound();
  }

  return (
    <div>
      <div className="mt-8">
        <Header />
      </div>
      <main>
        <Container className="px-8">
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h1>
                {project.underDevelopment && (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    Under Development
                  </span>
                )}
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  priority
                />
              </div>

              <div className="flex gap-4 mb-4">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="mr-2" />
                    Source Code
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    className="inline-flex items-center px-4 py-2 text-white bg-primary-light dark:bg-primary-dark hover:bg-primary-light/80 dark:hover:bg-primary-dark/80 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="mr-2" />
                    Live Demo
                  </Link>
                )}
              </div>
            </header>

            <section className="prose dark:prose-invert max-w-none mb-8">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-lg">{project.description}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Technical Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {project.paid && (
              <section className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-2">
                  Commercial Project
                </h3>
                <p>
                  This is a paid, production-grade project developed for a
                  client.
                </p>
              </section>
            )}
          </article>
        </Container>
      </main>
    </div>
  );
}
