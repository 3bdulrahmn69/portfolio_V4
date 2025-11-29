import TechCircle from './tech-circle';
import { techStack } from '@/data/tech-tool';

interface TechStackProps {
  children: React.ReactNode;
  padding?: string;
  size?: string;
}

const TechStack = ({ children, padding, size }: TechStackProps) => {
  return (
    <div className="flex flex-col gap-y-4 w-full max-w-md">
      {children}
      <div className="grid grid-cols-5 lg:grid-cols-6 gap-4">
        {techStack.map((item, index) => (
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

export default TechStack;
