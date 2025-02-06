import { Project } from '@/app/lib/definitions';
import Image from 'next/image';
import Button from '../button';

const ProjectCard = ({
  title,
  slug,
  description,
  image,
  techStack,
  underDevelopment,
  paid,
}: Project) => {
  return (
    <div className="group flex flex-col justify-between relative w-full max-w-[500px] bg-secondary-background-light dark:bg-secondary-background-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image Container */}
      <div>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {underDevelopment && (
            <div className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
              In Progress
            </div>
          )}
          {paid && (
            <div className="absolute top-2 left-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
              $ Paid
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col items-center justify-start">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-primary-light dark:bg-primary-dark text-text-dark px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pb-4">
        <Button href={`/projects/${slug}`} variant="tertiary" className="w-fit">
          More Details
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
