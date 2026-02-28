import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { works, projects } from '@/data/data';
import { Project } from '@/lib/definitions';
import Container from '@/components/layout/container';
import VideoDemo from '@/components/ui/video-demo';
import ProjectGallery from '@/components/projects/project-gallery';

import {
  FiGithub,
  FiExternalLink,
  FiDollarSign,
  FiCheckCircle,
  FiCalendar,
  FiCode,
  FiLayers,
  FiGrid,
} from 'react-icons/fi';
import { BiSolidCategory } from 'react-icons/bi';
import { AiFillAlert } from 'react-icons/ai';
import { HiOutlineSparkles } from 'react-icons/hi2';

export async function generateStaticParams() {
  return [...works, ...projects].map((project) => ({
    projectSlug: project.slug,
  }));
}

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

  const imageUrl =
    typeof project.image === 'string' ? project.image : project.image.src;

  return {
    title: `${project.title} | Project Details`,
    description: project.description,
    keywords: project.tags?.join(', '),
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Project Details`,
      description: project.description,
      type: 'article',
      url: `/projects/${project.slug}`,
      images: [{ url: imageUrl, alt: project.title }],
    },
    twitter: {
      title: `${project.title} | Project Details`,
      card: 'summary_large_image',
      description: project.description,
      images: [{ url: imageUrl, alt: project.title }],
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

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.description,
    image:
      typeof project.image === 'string' ? project.image : project.image.src,
    dateCreated: project.year ? `${project.year}-01-01` : undefined,
    programmingLanguage: project.techStack.join(', '),
    ...(project.githubUrl && { codeRepository: project.githubUrl }),
    ...(project.liveUrl && { url: project.liveUrl }),
    ...(project.parts &&
      project.parts.length > 0 && {
        hasPart: project.parts.map((part) => ({
          '@type': 'SoftwareApplication',
          name: part.label,
          ...(part.description && { description: part.description }),
          ...(part.liveUrl && { url: part.liveUrl }),
          ...(part.githubUrl && { codeRepository: part.githubUrl }),
        })),
      }),
    author: {
      '@type': 'Person',
      name: 'Abdulrahman Moussa',
      url: 'https://3bdulrahmn.vercel.app',
    },
    keywords: project.tags?.join(', '),
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container className="py-16 lg:py-20">
        {/* Header */}
        <header className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex-1 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight leading-tight">
                  {project.title}
                </h1>
                {project.status === 'in-progress' && (
                  <span className="bg-warning/20 text-warning-foreground px-5 py-2.5 rounded-full text-sm font-semibold ring-1 ring-inset ring-warning/30 flex items-center gap-2 shadow-sm">
                    <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                    Under Development
                  </span>
                )}
                {project.status === 'stalled' && (
                  <span className="bg-destructive/20 text-destructive-foreground px-5 py-2.5 rounded-full text-sm font-semibold ring-1 ring-inset ring-destructive/30 flex items-center gap-2 shadow-sm">
                    <AiFillAlert className="w-4 h-4" />
                    Stalled
                  </span>
                )}
                {project.paid && (
                  <span className="bg-success text-success-foreground px-5 py-2.5 rounded-full text-sm font-semibold ring-1 ring-inset ring-success/30 flex items-center gap-2 shadow-sm">
                    <FiDollarSign className="w-4 h-4" />
                    Commercial
                  </span>
                )}
              </div>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-primary font-medium bg-primary/10 px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors duration-200 cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:items-end gap-3">
              {project.year && (
                <div className="flex items-center gap-2.5 text-muted-foreground bg-secondary px-4 py-2 rounded-lg">
                  <FiCalendar className="w-4 h-4" />
                  <span className="font-medium text-sm">{project.year}</span>
                </div>
              )}
              <div className="flex items-center gap-2.5 text-muted-foreground bg-secondary px-4 py-2 rounded-lg">
                <BiSolidCategory className="w-4 h-4" />
                <span className="font-medium text-sm capitalize">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Project Image Banner */}
        <section className="relative mb-12 lg:mb-16">
          <div className="relative h-75 md:h-100 lg:h-125 xl:h-137.5 overflow-hidden shadow-xl bg-secondary rounded-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/60 via-background/20 to-transparent"></div>
          </div>
        </section>

        {/* Action Buttons / Project Parts */}
        {project.parts && project.parts.length > 0 ? (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FiGrid className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-foreground">
                Project Parts
              </h2>
              <span className="ml-auto text-sm text-muted-foreground font-medium bg-secondary px-3 py-1 rounded-full">
                {project.parts.length}{' '}
                {project.parts.length === 1 ? 'part' : 'parts'}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.parts.map((part) => (
                <div
                  key={part.label}
                  className="group bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-base font-bold text-card-foreground mb-1.5 group-hover:text-primary transition-colors duration-200">
                    {part.label}
                  </h3>
                  {part.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {part.description}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2.5 mt-auto">
                    {part.githubUrl && (
                      <Link
                        href={part.githubUrl}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-foreground hover:bg-accent text-background rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub className="w-4 h-4 transition-transform group-hover/link:scale-110" />
                        <span>Repository</span>
                      </Link>
                    )}
                    {part.liveUrl && (
                      <Link
                        href={part.liveUrl}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-accent text-primary-foreground rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="w-4 h-4 transition-transform group-hover/link:scale-110" />
                        <span>Live Preview</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className="flex flex-wrap gap-4 mb-12">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-foreground hover:bg-accent rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 font-medium gap-3 group text-background"
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
                className="inline-flex items-center justify-center px-6 py-3.5 bg-primary hover:bg-accent rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 font-medium gap-3 group text-primary-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Live Preview</span>
              </Link>
            )}
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-10 lg:space-y-12">
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

            {/* Project Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <ProjectGallery images={project.gallery} title={project.title} />
            )}

            {/* Key Features */}
            {project.highlights && (
              <section className="space-y-6">
                <div className="flex items-center gap-3 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <HiOutlineSparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    Key Features
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="group p-6 bg-card rounded-xl shadow-sm border border-border hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                          <FiCheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-card-foreground leading-relaxed text-[15px]">
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
                <div className="flex items-center gap-3 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FiLayers className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    What I Learned
                  </h2>
                </div>
                <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
                  <ul className="space-y-5">
                    {project.whatILearned.map((lesson, index) => (
                      <li
                        key={lesson}
                        className="flex items-start gap-4 text-card-foreground group"
                      >
                        <span className="shrink-0 w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary mt-0.5 group-hover:bg-primary/20 transition-colors">
                          {index + 1}
                        </span>
                        <span className="leading-relaxed text-[15px]">
                          {lesson}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-8 lg:self-start">
            {/* Technical Stack */}
            <section className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FiCode className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Technical Stack
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-2 bg-background rounded-lg text-sm font-medium border border-border text-foreground hover:bg-primary/10 hover:border-primary/40 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Project Details */}
            <section className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-bold text-card-foreground mb-6 pb-3 border-b border-border">
                Project Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-muted-foreground font-medium">
                    Category
                  </span>
                  <span className="font-semibold text-foreground capitalize text-sm">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-t border-border">
                  <span className="text-sm text-muted-foreground font-medium">
                    Status
                  </span>
                  <span
                    className={`font-semibold capitalize text-sm ${
                      project.status === 'completed'
                        ? 'text-success'
                        : project.status === 'in-progress'
                          ? 'text-warning'
                          : 'text-destructive'
                    }`}
                  >
                    {project.status.replace('-', ' ')}
                  </span>
                </div>
                {project.year && (
                  <div className="flex items-center justify-between py-2 border-t border-border">
                    <span className="text-sm text-muted-foreground font-medium">
                      Year
                    </span>
                    <span className="font-semibold text-foreground text-sm">
                      {project.year}
                    </span>
                  </div>
                )}
              </div>
            </section>

            {/* Status Cards */}
            {project.paid && (
              <section className="p-6 bg-info/10 rounded-xl shadow-sm border border-info/30 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-info/20 rounded-xl">
                    <FiDollarSign className="w-6 h-6 text-info" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Commercial Project
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Developed for client use in production environment with
                      real-world impact and commercial value.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {project.status === 'stalled' && (
              <section className="p-6 bg-destructive/10 rounded-xl shadow-sm border border-destructive/30 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-destructive/20 rounded-xl">
                    <AiFillAlert className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Project Stalled
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
        <section className="mt-16 lg:mt-20">
          <div className="bg-primary/10 rounded-2xl p-8 lg:p-10 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center space-y-5">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-full mb-2">
                <FiCode className="w-7 h-7 text-primary" />
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Explore More Projects
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  Check out my other projects and see what else I&apos;ve built.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-accent rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium gap-2 group text-primary-foreground"
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
