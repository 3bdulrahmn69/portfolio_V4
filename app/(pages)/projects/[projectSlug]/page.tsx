import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { works, projects } from '@/app/data/data';
import { Project } from '@/app/lib/definitions';
import Container from '@/app/ui/container';
import VideoDemo from '@/app/ui/video-demo';

import {
  FiGithub,
  FiExternalLink,
  FiDollarSign,
  FiCheckCircle,
  FiCalendar,
  FiCode,
  FiLayers,
} from 'react-icons/fi';
import { BiSolidCategory } from 'react-icons/bi';
import { AiFillAlert } from 'react-icons/ai';
import { HiOutlineSparkles } from 'react-icons/hi2';

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
    <main className="min-h-screen bg-background-light dark:bg-background-dark">
      <Container className="px-4 mx:px-8 py-12">
        {/* Content */}
        <div className="relative">
          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {project.title}
                  </h1>
                  {project.status === 'in-progress' && (
                    <span className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full text-sm font-medium ring-1 ring-inset ring-yellow-400/30 flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                      Under Development
                    </span>
                  )}
                  {project.status === 'stalled' && (
                    <span className="bg-gradient-to-r from-red-400/20 to-red-500/20 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium ring-1 ring-inset ring-red-400/30 flex items-center gap-2">
                      <AiFillAlert className="w-4 h-4" />
                      Stalled
                    </span>
                  )}
                  {project.paid && (
                    <span className="bg-gradient-to-r from-green-400/20 to-green-500/20 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium ring-1 ring-inset ring-green-400/30 flex items-center gap-2">
                      <FiDollarSign className="w-4 h-4" />
                      Commercial
                    </span>
                  )}
                </div>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm text-primary-600 dark:text-primary-400 font-medium bg-primary-light/10 dark:bg-primary-dark/10 px-3 py-1 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-end gap-4">
                {project.year && (
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <FiCalendar className="w-4 h-4" />
                    <span className="font-medium">{project.year}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <BiSolidCategory className="w-4 h-4" />
                  <span className="font-medium">{project.category}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 font-medium gap-3 group text-white dark:text-gray-900"
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
                className="inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-primary-light to-primary-light/80 dark:from-primary-dark dark:to-primary-dark/80 hover:from-primary-light/90 hover:to-primary-light/70 dark:hover:from-primary-dark/90 dark:hover:to-primary-dark/70 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 font-medium gap-3 group text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Live Preview</span>
              </Link>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Project Image */}
            <section className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                <Image
                  src={project.image || '/placeholder.jpg'}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </section>

            {/* Demo Video */}
            {project.demoUrl && (
              <section>
                <VideoDemo
                  demoUrl={project.demoUrl}
                  title={project.title}
                  className="w-full"
                />
              </section>
            )}

            {/* Key Features */}
            {project.highlights && (
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <HiOutlineSparkles className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    Key Features
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="group p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-lg hover:border-primary-light/30 dark:hover:border-primary-dark/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 p-2 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg group-hover:bg-primary-light/20 dark:group-hover:bg-primary-dark/20 transition-colors">
                          <FiCheckCircle className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* What I Learned */}
            {project.whatILearned && (
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <FiLayers className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    What I Learned
                  </h2>
                </div>
                <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700/50">
                  <ul className="space-y-4">
                    {project.whatILearned.map((lesson, index) => (
                      <li
                        key={lesson}
                        className="flex items-start gap-4 text-gray-700 dark:text-gray-300"
                      >
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center text-sm font-semibold text-primary-light dark:text-primary-dark mt-0.5">
                          {index + 1}
                        </span>
                        <span className="leading-relaxed">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Technical Stack */}
            <section className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <FiCode className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Technical Stack
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 hover:border-primary-light/30 dark:hover:border-primary-dark/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Project Details */}
            <section className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Project Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Category
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white capitalize">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Status
                  </span>
                  <span
                    className={`font-medium capitalize ${
                      project.status === 'completed'
                        ? 'text-green-600 dark:text-green-400'
                        : project.status === 'in-progress'
                        ? 'text-yellow-600 dark:text-yellow-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {project.status.replace('-', ' ')}
                  </span>
                </div>
                {project.year && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Year
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {project.year}
                    </span>
                  </div>
                )}
              </div>
            </section>

            {/* Status Cards */}
            {project.paid && (
              <section className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-xl shadow-sm border border-blue-200/50 dark:border-blue-700/30">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <FiDollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      Commercial Project
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      Developed for client use in production environment with
                      real-world impact and commercial value.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {project.status === 'stalled' && (
              <section className="p-6 bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-900/20 dark:to-red-800/10 rounded-xl shadow-sm border border-red-200/50 dark:border-red-700/30">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
                    <AiFillAlert className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      Project Stalled
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      Development has been paused or stopped for this project
                      due to various factors.
                    </p>
                  </div>
                </div>
              </section>
            )}
          </aside>
        </div>

        {/* Explore More Projects Card */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-primary-light/10 to-primary-light/5 dark:from-primary-dark/10 dark:to-primary-dark/5 rounded-2xl p-6 border border-primary-light/20 dark:border-primary-dark/20 shadow-lg">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-light/20 dark:bg-primary-dark/20 rounded-full mb-3">
                <FiCode className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Explore More Projects
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-300 max-w-lg mx-auto leading-relaxed">
                  Check out my other projects and see what else I&apos;ve built.
                </p>
              </div>
              <div className="pt-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-light to-primary-light/80 dark:from-primary-dark dark:to-primary-dark/80 hover:from-primary-light/90 hover:to-primary-light/70 dark:hover:from-primary-dark/90 dark:hover:to-primary-dark/70 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium gap-2 group text-white"
                >
                  <span>View All Projects</span>
                  <FiExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
