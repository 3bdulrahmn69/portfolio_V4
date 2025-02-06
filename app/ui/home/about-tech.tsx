import TechStack from './tech-stack';
import ToolsStack from './tools-stack';

const AboutTech = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="mt-4 flex flex-col space-y-2 p-6 bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl">
        <TechStack />
      </div>
      <div className="mt-4 flex flex-col space-y-2 p-6 bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl">
        <ToolsStack />
      </div>
    </div>
  );
};

export default AboutTech;
