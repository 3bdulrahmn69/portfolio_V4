import { StaticImageData } from 'next/image';

export enum ProjectCategory {
  FRONTEND = 'Front-End Website',
  BACKEND = 'Back-End Service',
  FULLSTACK = 'Full-Stack Website',
  PYTHON_APP = 'Python Desktop App',
  SCRAPING = 'Web Scraping',
}

export enum Technology {
  HTML = 'HTML',
  CSS = 'CSS',
  JAVASCRIPT = 'JavaScript',
  BOOTSTRAP = 'Bootstrap',
  REACT = 'React.js',
  NEXTJS = 'Next.js',
  TYPESCRIPT = 'TypeScript',
  NEXTAUTH = 'NextAuth',
  TAILWINDCSS = 'Tailwind CSS',
  SOCKETIO = 'Socket.io',
  SASS = 'Sass',
  PUPPETEER = 'Puppeteer',
  REACTDND = 'React DnD',
  KONVAJS = 'Konva.js',
  LOCALSTORAGE = 'Local Storage',
  RAPIDAPI = 'Rapid API',
  AXIOS = 'Axios',
  LEAFLET = 'Leaflet',
  GEOLOCATION = 'Geolocation',
  JSONSERVER = 'JSON-SERVER',
  DAISYUI = 'DaisyUI',
  OMDBAPI = 'OMDb API',
  FRAMERMOTION = 'Framer Motion',
  I18NEXT = 'I18next',
  MATERIALUI = 'Material UI',
  GSAP = 'GSAP',
  REACTQUERY = 'React Query',
  HELLOPANGEADND = 'Hello Pangea DnD',
  EXPRESSJS = 'Express.js',
  NODEJS = 'Node.js',
  MONGODB = 'MongoDB',
  RECHARTS = 'Recharts',
  VERCELCRONS = 'Vercel Cron',
}

export type Project = {
  title: string;
  slug: string;
  description: string;
  image: StaticImageData | string | null;
  techStack: Technology[];
  type: 'personal' | 'professional';
  year: number;
  tags: string[];
  whatILearned?: string[];
  category: ProjectCategory;
  status: 'completed' | 'in-progress' | 'stalled';
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
  paid?: boolean;
  demoUrl?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  image: StaticImageData | string;
  credentialUrl: string;
  issueDate: string;
};
