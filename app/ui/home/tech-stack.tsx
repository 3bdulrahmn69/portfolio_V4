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
];

const TechStack = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full max-w-md">
      <h3>
        <span className="text-primary-light dark:text-primary-dark">Tech</span>{' '}
        Stack
      </h3>
      <div className="grid grid-cols-5 lg:grid-cols-6 gap-4">
        {Skills.map((skill, index) => (
          <TechCircle key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
