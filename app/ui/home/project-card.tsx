import { Project } from '@/app/lib/definitions';
import Image from 'next/image';
import Button from '../button';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

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
  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg bg-secondary-background-light dark:bg-secondary-background-dark shadow-lg transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100%"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />

        {/* Status Badges */}
        <div className="absolute left-2 top-2 flex gap-2">
          {status === 'in-progress' && (
            <span className="rounded-full bg-yellow-400/90 px-3 py-1 text-xs font-medium text-gray-900">
              🚧 In Progress
            </span>
          )}
          {paid && (
            <span className="rounded-full bg-green-400/90 px-3 py-1 text-xs font-medium text-gray-900">
              💰 Paid Project
            </span>
          )}
        </div>

        {/* Project Title Overlay */}
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
          {title}
        </h3>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-6">
        {/* Description */}
        <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-auto flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 bg-background-light dark:bg-background-dark border border-primary-light/30 dark:border-primary-dark/30 transition-colors rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links Container */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 hover:bg-background-light dark:hover:bg-background-dark transition-colors duration-300"
                aria-label="GitHub repository"
              >
                <FiGithub className="h-5 w-5 text-primary-light dark:text-primary-dark" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 hover:bg-background-light dark:hover:bg-background-dark transition-colors duration-300"
                aria-label="Live demo"
              >
                <FiExternalLink className="h-5 w-5 text-primary-light dark:text-primary-dark" />
              </a>
            )}
          </div>

          <Button
            ariaLabel={`View more details about ${title} project`}
            href={`/projects/${slug}`}
            variant="tertiary"
            className="w-fit px-4 py-2"
          >
            Details
          </Button>
        </div>
      </div>

      {/* Hover Border */}
      <div className="absolute inset-0 pointer-events-none border-2 border-transparent transition-colors duration-300 group-hover:border-primary-light/30 dark:group-hover:border-primary-dark/30" />
    </div>
  );
};

export default ProjectCard;
