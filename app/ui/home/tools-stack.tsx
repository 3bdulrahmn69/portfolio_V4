import { FaFigma, FaTerminal } from 'react-icons/fa6';
import {
  SiVim,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiAxios,
  SiMaterialdesign,
  SiVitest,
  SiDaisyui,
  SiI18Next,
} from 'react-icons/si';
import { DiGit, DiResponsive } from 'react-icons/di';
import { TbBrandGithubCopilot } from 'react-icons/tb';
import { PiFramerLogoFill } from 'react-icons/pi';
import { VscVscode } from 'react-icons/vsc';
import TechCircle from './tech-circle';

const Tools = [
  {
    name: 'Visual Studio Code',
    icon: <VscVscode />,
  },
  {
    name: 'Terminal',
    icon: <FaTerminal />,
  },
  {
    name: 'Vim',
    icon: <SiVim />,
  },
  {
    name: 'Github Copilot',
    icon: <TbBrandGithubCopilot />,
  },
  {
    name: 'Git',
    icon: <DiGit />,
  },
  {
    name: 'Postman',
    icon: <SiPostman />,
  },
  {
    name: 'Axios',
    icon: <SiAxios />,
  },
  {
    name: 'i18next',
    icon: <SiI18Next />,
  },
  {
    name: 'Figma',
    icon: <FaFigma />,
  },
  {
    name: 'Netlify',
    icon: <SiNetlify />,
  },
  {
    name: 'Vercel',
    icon: <SiVercel />,
  },
  {
    name: 'Material UI',
    icon: <SiMaterialdesign />,
  },
  {
    name: 'Daisy UI',
    icon: <SiDaisyui />,
  },
  {
    name: 'Framer Motion',
    icon: <PiFramerLogoFill />,
  },
  {
    name: 'Responsive Design',
    icon: <DiResponsive />,
  },
  {
    name: 'Vite',
    icon: <SiVitest />,
  },
];

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
        {Tools.map((tool, index) => (
          <TechCircle key={index} skill={tool} padding={padding} size={size} />
        ))}
      </div>
    </div>
  );
};

export default ToolsStack;
