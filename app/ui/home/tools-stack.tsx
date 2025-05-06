import TechCircle from './tech-circle';
import { toolsStack } from '@/app/data/tech-tool';

interface ToolsStackProps {
  children: React.ReactNode;
  padding?: string;
  size?: string;
}

const ToolsStack = ({ children, padding, size }: ToolsStackProps) => {
  return (
    <div className="flex flex-col gap-y-4 w-full max-w-md">
      {children}
      <div className="grid grid-cols-5 lg:grid-cols-6 gap-4">
        {toolsStack.map((item, index) => (
          <TechCircle
            key={index}
            name={item.name}
            icon={<item.icon />}
            padding={padding}
            size={size}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsStack;
