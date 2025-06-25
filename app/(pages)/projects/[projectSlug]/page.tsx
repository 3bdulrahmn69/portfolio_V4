import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { works, projects } from '@/app/data/data';
import { Project } from '@/app/lib/definitions';
import Container from '@/app/ui/container';

import {
  FiGithub,
  FiExternalLink,
  FiDollarSign,
  FiCheckCircle,
} from 'react-icons/fi';
import { BiSolidCategory } from 'react-icons/bi';
import { AiFillAlert } from 'react-icons/ai';

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
    keywords: project.tags?.join(', '),
    openGraph: {
      title: `${project.title} | Project Details`,
      description: project.description,
      images: [
        {
          url:
            typeof project.image === 'string'
              ? project.image
              : project.image?.src || '/placeholder.jpg',
        },
      ],
    },
    twitter: {
      title: `${project.title} | Project Details`,
      card: 'summary_large_image',
      description: project.description,
      images: [
        {
          url:
            typeof project.image === 'string'
              ? project.image
              : project.image?.src || '/placeholder.jpg',
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
    <main>
      <Container className="px-4 mx:px-8 py-12">
        <header className="bg-gradient-to-r from-primary-light/20 to-primary-light/5 dark:from-primary-dark/20 dark:to-secondary-dark/5 p-8 rounded-2xl shadow-sm border border-secondary-background-light dark:border-secondary-background-dark mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {project.title}
                </h1>
                {project.status === 'in-progress' && (
                  <span className="bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium ring-1 ring-inset ring-yellow-400/20">
                    Under Development
                  </span>
                )}
                {project.status === 'stalled' && (
                  <span className="bg-red-400/10 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-sm font-medium ring-1 ring-inset ring-red-400/20">
                    Stalled
                  </span>
                )}
              </div>
              <div className="flex gap-2 flex-wrap">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-primary-600 dark:text-primary-400 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {project.year && (
                <span className="text-gray-500 dark:text-gray-400 font-medium">
                  {project.year}
                </span>
              )}
            </div>
          </div>
        </header>

        <div className="relative h-96 rounded-xl overflow-hidden my-8 shadow-lg">
          <Image
            src={project.image || '/placeholder.jpg'}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            priority
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-900 dark:bg-gray-200 hover:bg-gray-800 dark:hover:bg-gray-400 rounded-xl shadow-sm hover:shadow-md transition-all font-medium gap-2 group text-text-dark dark:text-text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>View Repository</span>
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-primary-light dark:bg-primary-dark hover:bg-primary-light/80 dark:hover:bg-primary-dark/80 rounded-xl shadow-sm hover:shadow-md transition-all font-medium gap-2 group text-text-dark dark:text-text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Live Preview</span>
            </Link>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Project Overview
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </section>

            {project.highlights && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="p-4 bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl shadow-sm border border-primary-light dark:border-primary-dark"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary-600 dark:text-primary-400">
                          <FiCheckCircle className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                        </div>
                        <p>{highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.whatILearned && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  What I Learned
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  {project.whatILearned.map((lesson) => (
                    <li
                      key={lesson}
                      className="text-lg text-gray-600 dark:text-gray-300"
                    >
                      {lesson}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="lg:col-span-1 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Technical Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-secondary-background-light dark:bg-secondary-background-dark rounded-lg text-sm font-medium border border-secondary-background-light dark:border-secondary-background-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Category
              </h2>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg">
                  <BiSolidCategory className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {project.category}
                  </h3>
                </div>
              </div>
            </section>

            {project.paid && (
              <section className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl shadow-sm border border-blue-200 dark:border-blue-800/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FiDollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Commercial Project
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Developed for client use in production environment
                    </p>
                  </div>
                </div>
              </section>
            )}

            {project.status === 'stalled' && (
              <section className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl shadow-sm border border-red-200 dark:border-red-800/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <AiFillAlert className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Project Stalled
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Development has been paused or stopped for this project
                    </p>
                  </div>
                </div>
              </section>
            )}
          </aside>
        </div>
      </Container>
    </main>
  );
}
