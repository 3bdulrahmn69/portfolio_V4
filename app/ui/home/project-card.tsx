import { Project } from '@/app/lib/definitions';
import Image from 'next/image';
import Button from '../button';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';

const ProjectCard = ({
  title,
  slug,
  description,
  image,
  techStack,
  githubUrl,
  liveUrl,
  status,
  paid,
}: Project) => {
  const maxTechStackLength = 4;

  return (
    <article
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-secondary-background-light dark:bg-secondary-background-dark shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.03] transform-gpu"
      role="article"
      aria-labelledby={`project-title-${slug}`}
    >
      {/* Enhanced glow effect with animation - Behind everything */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-primary-light/8 via-primary-dark/6 to-primary-light/8 rounded-xl blur-md scale-125 animate-pulse z-0" />

      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden rounded-t-xl z-10">
        <Image
          src={image || '/placeholder.jpg'}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-700 will-change-transform group-hover:scale-115 group-hover:brightness-115 group-hover:saturate-125 group-hover:contrast-110"
        />

        {/* Status Badges with enhanced animation */}
        <div className="absolute left-3 top-3 flex gap-2 z-30">
          {status === 'in-progress' && (
            <span className="rounded-full bg-yellow-400/95 px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-lg backdrop-blur-md border border-yellow-300/60">
              🚧 In Progress
            </span>
          )}
          {status === 'stalled' && (
            <span className="rounded-full bg-red-400/95 px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-lg backdrop-blur-md border border-red-300/60">
              🛑 Stalled
            </span>
          )}
        </div>

        {paid && (
          <div className="absolute right-3 top-3 flex gap-2 z-30">
            <span className="rounded-full bg-gradient-to-r from-yellow-400 to-emerald-400 px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-lg backdrop-blur-md border border-green-300/60 shine overflow-hidden">
              💰 Commercial
            </span>
          </div>
        )}

        {/* Project Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-20">
          <h3
            id={`project-title-${slug}`}
            className="text-xl font-bold text-white drop-shadow-2xl transition-all duration-300 group-hover:transform group-hover:translate-y-[-3px] group-hover:scale-105 group-hover:text-shadow-lg"
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-6 relative z-20">
        {/* Description with enhanced hover effects */}
        <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 group-hover:transform group-hover:translate-x-1 leading-relaxed">
          {description}
        </p>

        {/* Premium Tech Stack with staggered animations */}
        <div className="mt-auto mb-5 relative z-10">
          <div className="flex flex-wrap gap-2.5">
            {techStack.slice(0, maxTechStackLength).map((tech, index) => (
              <span
                key={index}
                className="text-xs px-4 py-2 bg-background-light dark:bg-background-dark border border-primary-light/40 dark:border-primary-dark/40 transition-all duration-400 rounded-full hover:border-primary-light dark:hover:border-primary-dark hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 group-hover:shadow-lg group-hover:shadow-primary-light/25 dark:group-hover:shadow-primary-dark/25 font-medium hover:scale-105 cursor-default"
              >
                {tech}
              </span>
            ))}
            {techStack.length > maxTechStackLength && (
              <Link
                href={`/projects/${slug}`}
                className="text-xs px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-400 rounded-full border border-gray-300 dark:border-gray-600 transition-all duration-400 group-hover:scale-105 font-medium hover:shadow-lg"
              >
                <span>+{techStack.length - maxTechStackLength}</span>
              </Link>
            )}
          </div>
        </div>

        {/* Links Container */}
        <div
          className="mt-6 flex items-center justify-between"
          role="group"
          aria-label="Project actions"
        >
          <div className="flex gap-3" role="group" aria-label="External links">
            {/* GitHub Link */}
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-3 hover:bg-background-light dark:hover:bg-background-dark transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-light/25 dark:hover:shadow-primary-dark/25 will-change-transform group/link hover:-rotate-3 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
                aria-label={`View ${title} source code on GitHub`}
              >
                <FiGithub className="h-5 w-5 text-primary-light dark:text-primary-dark transition-all duration-300 group-hover/link:text-primary-600 dark:group-hover/link:text-primary-400 group-hover/link:scale-110 group-hover/link:rotate-6" />
              </a>
            ) : (
              <div
                className="rounded-xl p-3 bg-gray-100 dark:bg-gray-800 opacity-50 cursor-not-allowed"
                aria-label={`Source code for ${title} is not available`}
                title="Source code not available"
                role="button"
                aria-disabled="true"
                tabIndex={-1}
              >
                <FiGithub className="h-5 w-5 text-gray-400 dark:text-gray-600" />
              </div>
            )}

            {/* Live Demo Link */}
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-3 hover:bg-background-light dark:hover:bg-background-dark transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-light/25 dark:hover:shadow-primary-dark/25 will-change-transform group/link hover:rotate-3 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
                aria-label={`View live demo of ${title}`}
              >
                <FiExternalLink className="h-5 w-5 text-primary-light dark:text-primary-dark transition-all duration-300 group-hover/link:text-primary-600 dark:group-hover/link:text-primary-400 group-hover/link:scale-110 group-hover/link:-rotate-6" />
              </a>
            ) : (
              <div
                className="rounded-xl p-3 bg-gray-100 dark:bg-gray-800 opacity-50 cursor-not-allowed"
                aria-label={`Live demo for ${title} is not available`}
                title="Live demo not available"
                role="button"
                aria-disabled="true"
                tabIndex={-1}
              >
                <FiExternalLink className="h-5 w-5 text-gray-400 dark:text-gray-600" />
              </div>
            )}
          </div>

          <Button
            ariaLabel={`View more details about ${title} project`}
            href={`/projects/${slug}`}
            variant="tertiary"
            className="w-fit px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
          >
            Details
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
