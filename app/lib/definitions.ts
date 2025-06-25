import { StaticImageData } from 'next/image';

export enum ProjectCategory {
  FRONTEND = 'Front-End Website',
  BACKEND = 'Back-End Service',
  FULLSTACK = 'Full-Stack Website',
  PYTHON_APP = 'Python Desktop App',
  SCRAPING = 'Web Scraping',
}

export type Project = {
  title: string;
  slug: string;
  description: string;
  image: StaticImageData | string | null;
  techStack: string[];
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
};

export type Certification = {
  title: string;
  issuer: string;
  image: StaticImageData | string;
  credentialUrl: string;
  issueDate: string;
};
