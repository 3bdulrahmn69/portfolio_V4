import TechStack from './tech-stack';
import ToolsStack from './tools-stack';

const AboutTech = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="mt-4 flex flex-col space-y-2 p-6 bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl">
        <TechStack>
          <h3>
            <span className="text-primary-light dark:text-primary-dark">
              Tech
            </span>{' '}
            Stack
          </h3>
        </TechStack>
      </div>
      <div className="mt-4 flex flex-col space-y-2 p-6 bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl">
        <ToolsStack>
          <h3>
            <span className="text-primary-light dark:text-primary-dark">
              Tools
            </span>{' '}
            Stack
          </h3>
        </ToolsStack>
      </div>
    </div>
  );
};

export default AboutTech;
