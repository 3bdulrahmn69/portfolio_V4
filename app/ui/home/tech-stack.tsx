import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaReact,
  FaPython,
} from 'react-icons/fa6';
import {
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiGnubash,
} from 'react-icons/si';
import { DiMysql, DiJqueryLogo } from 'react-icons/di';
import { TbBrandTailwind } from 'react-icons/tb';
import { BiLogoFlask } from 'react-icons/bi';
import TechCircle from './tech-circle';

const Skills = [
  {
    name: 'HTML',
    icon: <FaHtml5 />,
  },
  {
    name: 'CSS',
    icon: <FaCss3 />,
  },
  {
    name: 'JavaScript',
    icon: <FaJs />,
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap />,
  },
  {
    name: 'Tailwind CSS',
    icon: <TbBrandTailwind />,
  },
  {
    name: 'jQuery',
    icon: <DiJqueryLogo />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    name: 'React',
    icon: <FaReact />,
  },
  {
    name: 'Node Js',
    icon: <SiNodedotjs />,
  },
  {
    name: 'Express Js',
    icon: <SiExpress />,
  },
  {
    name: 'Next Js',
    icon: <SiNextdotjs />,
  },
  {
    name: 'Python',
    icon: <FaPython />,
  },
  {
    name: 'Flask',
    icon: <BiLogoFlask />,
  },
  {
    name: 'MySQL',
    icon: <DiMysql />,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
  },
  {
    name: 'Bash',
    icon: <SiGnubash />,
  },
];

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
        {Skills.map((skill, index) => (
          <TechCircle key={index} skill={skill} padding={padding} size={size} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
