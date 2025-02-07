import { Project, Certification } from '@/app/lib/definitions';

import Small from '../../public/projects/Small.webp';
import Bondi from '../../public/projects/Bondi.webp';
import EStore from '../../public/projects/EStore.webp';
import LoveLoom from '../../public/projects/LoveLoom.webp';
import Youtube from '../../public/projects/Youtube.webp';
import MercyBridge from '../../public/projects/MercyBridge.webp';
import WowYouConvertIt from '../../public/projects/WowYouConvertIt.webp';
import MyWatchedMovies from '../../public/projects/MyWatchedMovies.webp';
import ReactQuizApp from '../../public/projects/ReactQuizApp.webp';
import WorldWise from '../../public/projects/WorldWise.webp';
import EchoTune from '../../public/projects/EchoTune.webp';
import Planify from '../../public/projects/Planify.webp';

import softWare from '@/public/certifications/short-specializations.png';
import aice from '@/public/certifications/aice.png';
import founder from '@/public/certifications/founder-academy.png';

export const projects: Project[] = [
  {
    title: 'Planify',
    slug: 'planify',
    description: 'Your personal planner to organize your day',
    image: Planify,
    techStack: [
      'React js',
      'Tailwind CSS',
      'React DnD',
      'Konva.js',
      'local storage',
    ],
    githubUrl: 'https://github.com/3bdulrahmn69/planify',
    liveUrl: 'https://3bdulrahmn69-planify.netlify.app',
    underDevelopment: true,
  },
  {
    title: 'EchoTune',
    slug: 'echo-tune',
    description: 'Web Application to discover new music from Spotify API',
    image: EchoTune,
    techStack: ['React js', 'Tailwind CSS', 'Rapid API (Spotify API)', 'Axios'],
    githubUrl: 'https://github.com/3bdulrahmn69/echo_tune',
    liveUrl: 'https://3bdulrahmn69-echotune.netlify.app',
  },
  {
    title: 'WorldWise',
    slug: 'world-wise',
    description: 'Web Application to track your travel around the world',
    image: WorldWise,
    techStack: ['React js', 'CSS', 'Leaflet', 'Geolocation'],
    githubUrl: 'https://github.com/3bdulrahmn69/worldWise',
    liveUrl: 'https://3bdulrahmn69-worldwise.netlify.app',
  },
  {
    title: 'React Quiz App',
    slug: 'react-quiz-app',
    description: 'Web Application designed to test users knowledge of React',
    image: ReactQuizApp,
    techStack: ['React js', 'CSS', 'JSON-SERVER'],
    githubUrl: 'https://github.com/3bdulrahmn69/react_quiz',
    liveUrl: 'https://3bdulrahmn69-reactquiz.netlify.app',
  },
  {
    title: 'My Watched Movies',
    slug: 'my-watched-movies',
    description: 'Website to keep track of the movies you watched',
    image: MyWatchedMovies,
    techStack: ['React js', 'Tailwind CSS', 'daisyui', 'OMDb API', 'Axios'],
    githubUrl: 'https://github.com/3bdulrahmn69/my_watched_movies',
    liveUrl: 'https://mywatchedmovies.netlify.app',
  },
  {
    title: 'Wow You Convert It',
    slug: 'wow-you-convert-it',
    description: 'See what your salary is worth in other wow currencies',
    image: WowYouConvertIt,
    techStack: ['React js', 'Tailwind CSS', 'Framer motion'],
    githubUrl: 'https://github.com/3bdulrahmn69/wow_you_convert_it',
    liveUrl: 'https://wowyouconvertit.netlify.app',
  },
  {
    title: 'MercyBridge',
    slug: 'mercy-bridge',
    description:
      'Website to make donation more easier by showcasing the charities',
    image: MercyBridge,
    techStack: ['React js', 'Tailwind CSS', 'I18next ', 'JSON-SERVER', 'Axios'],
    githubUrl: 'https://github.com/3bdulrahmn69/mercyBridge',
  },
  {
    title: 'Youtube Clone',
    slug: 'youtube-clone',
    description: 'Youtube Clone with youtube api from Rapid API',
    image: Youtube,
    techStack: ['React js', 'Axios', 'Material UI', 'Rapid API'],
    githubUrl: 'https://github.com/3bdulrahmn69/youtube_clone_v2',
    liveUrl: 'https://abdelrahman69-youtube.netlify.app/',
  },
  {
    title: 'LoveLoom',
    slug: 'love-loom',
    description: 'A Website to enhance love stories - Memories and more',
    image: LoveLoom,
    techStack: ['HTML', 'Tailwind CSS', 'JavaScript', 'GSAP'],
    githubUrl: 'https://github.com/3bdulrahmn69/LoveLoom',
    liveUrl: 'https://loveloom.netlify.app/',
  },
  {
    title: 'Estore',
    slug: 'e-store',
    description: 'Website for selling hardware products',
    image: EStore,
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/3bdulrahmn69/Estore',
  },
  {
    title: 'Bondi',
    slug: 'bondi',
    description: 'Bootstrap template to practice with',
    image: Bondi,
    techStack: ['HTML', 'CSS', 'Bootstrap'],
    githubUrl: 'https://github.com/3bdulrahmn69/Bondi',
    liveUrl: 'https://3bdulrahmn69.github.io/Bondi',
  },
  {
    title: 'Javascript projects',
    slug: 'javascript-projects',
    description: 'Collection of javascript beginner projects',
    image: Small,
    techStack: ['HTML', 'JavaScript'],
    githubUrl: 'https://github.com/3bdulrahmn69/JavaScript_Small_Pojects',
    liveUrl: 'https://3bdulrahmn69.github.io/JavaScript_Small_Pojects',
  },
];

export const works: Project[] = [
  {
    title: 'Seven Design Studio',
    slug: 'seven-design-studio',
    description:
      'A portfolio website for Seven Design Studio to showcase their work and services',
    image:
      'https://raw.githubusercontent.com/drme990/7DStudio---Updated-Jan---2025/refs/heads/main/public/thumbnail.png',
    techStack: ['React js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://www.7-design.net',
    paid: true,
  },
];

export const certifications: Certification[] = [
  {
    title: 'Software Engineering',
    issuer: 'ALX Africa',
    image: softWare,
    credentialUrl: 'https://intranet.alxswe.com/certificates/SzYXcy2N6M',
    issueDate: '2024-04-12',
  },
  {
    title: 'AI Career Essentials (AiCE)',
    issuer: 'ALX Africa',
    image: aice,
    credentialUrl: 'https://intranet.alxswe.com/certificates/J8RhZXpYBs',
    issueDate: '2024-09-24',
  },
  {
    title: 'Founder Academy',
    issuer: 'ALX Ventures',
    image: founder,
    credentialUrl: 'https://intranet.alxswe.com/certificates/sy62TnCxN9',
    issueDate: '2024-08-16',
  },
];

export const education = [
  {
    title: 'Bachelor of Management Information Systems',
    provider: 'El Obour Institute',
    period: '2020 - 2024',
    description:
      'A 4-year of education focusing on information systems, database design and management, and software development.',
  },
  {
    title: 'ALX Africa Software Engineering Program',
    provider: 'ALX Africa',
    period: '2023 - 2024',
    description:
      'Intensive 12-month course focusing on practical, real-world software development skills and methodologies.',
  },
];

export const courses = [
  {
    title: 'The Ultimate React Course 2024: React, Next.js',
    provider: 'Jonas Schmedtmann (Udemy)',
    period: 'In Progress',
    description:
      'Deep dive into React.js, Next.js, and advanced React concepts.',
    status: 'In Progress',
  },
  {
    title: 'Summer Front-End Web Development Using React',
    provider: 'ITI (Information Technology Institute)',
    period: 'Summer 2024',
    description:
      'A 1-month course focusing on front-end web development using React.js and related technologies.',
    status: 'Completed',
  },
  {
    title: 'AI Career Essentials (AiCE)',
    provider: 'ALX Africa',
    period: '2024-09',
    description:
      'A 6-week course focusing on AI and machine learning concepts and AI tools, how to use them, how did they work, and how to works with them.',
    status: 'Completed',
  },
  {
    title: 'Founder Academy',
    provider: 'ALX Ventures',
    period: '2024-08',
    description:
      'A 3-month course focusing on entrepreneurship, how to start a business, how to grow it, and how to scale it.',
    status: 'Completed',
  },
  {
    title: 'The Complete JavaScript Course 2024: From Zero to Expert',
    provider: 'Jonas Schmedtmann (Udemy)',
    period: 'Completed 2024',
    description:
      'Comprehensive course covering JavaScript fundamentals, ES6+, and advanced concepts.',
    status: 'Completed',
  },
];
