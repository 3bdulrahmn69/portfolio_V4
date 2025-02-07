import { StaticImageData } from 'next/image';

export type Project = {
  title: string;
  slug: string;
  description: string;
  image: StaticImageData | string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  underDevelopment?: boolean;
  paid?: boolean;
};

export type Certification = {
  title: string;
  issuer: string;
  image: StaticImageData | string;
  credentialUrl: string;
  issueDate: string;
};
