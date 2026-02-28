import { Project } from '@/lib/definitions';
import Image from 'next/image';
import Button from '../ui/button';
import { FiGithub, FiExternalLink, FiGrid } from 'react-icons/fi';
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
  parts,
}: Project) => {
  const maxTechStackLength = 4;
  const hasParts = parts && parts.length > 0;

  return (
    <article
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-secondary shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.03] transform-gpu"
      role="article"
      aria-labelledby={`project-title-${slug}`}
    >
      {/* Enhanced glow effect with animation - Behind everything */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700 bg-linear-to-r from-primary/8 via-primary/6 to-primary/8 rounded-xl blur-md scale-125 animate-pulse z-0" />

      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden rounded-t-xl z-10">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-700 will-change-transform group-hover:brightness-115 group-hover:saturate-125 group-hover:contrast-110"
        />

        {/* Status Badges with enhanced animation */}
        <div className="absolute left-3 top-3 flex gap-2 z-30">
          {status === 'in-progress' && (
            <span className="rounded-full bg-warning/95 px-3 py-1.5 text-xs font-semibold text-warning-foreground shadow-lg backdrop-blur-md border border-warning/60">
              🚧 In Progress
            </span>
          )}
          {status === 'stalled' && (
            <span className="rounded-full bg-destructive/95 px-3 py-1.5 text-xs font-semibold text-destructive-foreground shadow-lg backdrop-blur-md border border-destructive/60">
              🛑 Stalled
            </span>
          )}
        </div>

        <div className="absolute right-3 top-3 flex gap-2 z-30">
          {paid && (
            <span className="rounded-full bg-linear-to-r from-warning to-success px-3 py-1.5 text-xs font-semibold text-warning-foreground shadow-lg backdrop-blur-md border border-success/60 shine overflow-hidden">
              💰 Commercial
            </span>
          )}
          {hasParts && (
            <span className="rounded-full bg-primary/90 px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg backdrop-blur-md border border-primary/60 flex items-center gap-1.5">
              <FiGrid className="w-3 h-3" />
              {parts.length} parts
            </span>
          )}
        </div>

        {/* Project Title */}
        <div className="absolute -bottom-2 left-0 right-0 p-4 bg-linear-to-t from-overlay/50 via-overlay/10 to-transparent z-20">
          <h3
            id={`project-title-${slug}`}
            className="text-xl font-bold text-overlay-foreground drop-shadow-2xl transition-all duration-300 group-hover:transform group-hover:-translate-y-0.75 group-hover:scale-105 group-hover:text-shadow-lg"
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-6 relative z-20">
        {/* Description with enhanced hover effects */}
        <p className="mb-4 line-clamp-3 text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:transform group-hover:translate-x-1 leading-relaxed">
          {description}
        </p>

        {/* Parts labels (only for multi-part projects) */}
        {hasParts && (
          <div className="flex flex-wrap gap-2 mb-4">
            {parts.map((part) => (
              <span
                key={part.label}
                className="text-xs px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-lg font-medium"
              >
                {part.label}
              </span>
            ))}
          </div>
        )}

        {/* Premium Tech Stack with staggered animations */}
        <div className="mt-auto mb-5 relative z-10">
          <div className="flex flex-wrap gap-2.5">
            {techStack.slice(0, maxTechStackLength).map((tech, index) => (
              <span
                key={index}
                className="text-xs px-4 py-2 bg-background border border-primary/40 transition-all duration-400 rounded-full hover:border-primary hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/25 font-medium hover:scale-105 cursor-default"
              >
                {tech}
              </span>
            ))}
            {techStack.length > maxTechStackLength && (
              <Link
                href={`/projects/${slug}`}
                className="text-xs px-4 py-2 bg-muted text-muted-foreground rounded-full border border-border transition-all duration-400 group-hover:scale-105 font-medium hover:shadow-lg"
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
          {hasParts ? (
            /* Multi-part: show parts count with icon */
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FiGrid className="w-4 h-4 text-primary" />
              <span>
                <span className="font-semibold text-foreground">
                  {parts.length}
                </span>{' '}
                linked parts
              </span>
            </div>
          ) : (
            /* Single project: show GitHub + live links */
            <div
              className="flex gap-3"
              role="group"
              aria-label="External links"
            >
              {/* GitHub Link */}
              {githubUrl ? (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl p-3 hover:bg-background transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25 will-change-transform group/link hover:-rotate-3 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label={`View ${title} source code on GitHub`}
                >
                  <FiGithub className="h-5 w-5 text-primary transition-all duration-300 group-hover/link:text-primary group-hover/link:scale-110 group-hover/link:rotate-6" />
                </a>
              ) : (
                <div
                  className="rounded-xl p-3 bg-muted opacity-50 cursor-not-allowed"
                  aria-label={`Source code for ${title} is not available`}
                  title="Source code not available"
                  role="button"
                  aria-disabled="true"
                  tabIndex={-1}
                >
                  <FiGithub className="h-5 w-5 text-muted-foreground" />
                </div>
              )}

              {/* Live Demo Link */}
              {liveUrl ? (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl p-3 hover:bg-background transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25 will-change-transform group/link hover:rotate-3 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label={`View live demo of ${title}`}
                >
                  <FiExternalLink className="h-5 w-5 text-primary transition-all duration-300 group-hover/link:text-primary group-hover/link:scale-110 group-hover/link:-rotate-6" />
                </a>
              ) : (
                <div
                  className="rounded-xl p-3 bg-muted opacity-50 cursor-not-allowed"
                  aria-label={`Live demo for ${title} is not available`}
                  title="Live demo not available"
                  role="button"
                  aria-disabled="true"
                  tabIndex={-1}
                >
                  <FiExternalLink className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
            </div>
          )}

          <Button
            ariaLabel={`View more details about ${title} project`}
            href={`/projects/${slug}`}
            variant="tertiary"
            className="w-fit px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            Details
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
