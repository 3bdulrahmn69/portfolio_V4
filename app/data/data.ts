import { Project, Certification, ProjectCategory } from '@/app/lib/definitions';

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
import next_dashboard from '../../public/projects/next-dashboard.png';
import edmunds_scraping from '../../public/projects/edmunds-scraping.png';
import games_center from '../../public/projects/gamesCenter.png';

import softWare from '@/public/certifications/short-specializations.png';
import aice from '@/public/certifications/aice.png';
import founder from '@/public/certifications/founder-academy.png';

export const projects: Project[] = [
  {
    title: 'Games Center',
    slug: 'games-center',
    description:
      'Collection of games done with vanilla JavaScript to be more familiar with DOM manipulation',
    image: games_center,
    techStack: ['HTML', 'CSS', 'JavaScript'],
    type: 'personal',
    year: 2025,
    githubUrl: 'https://github.com/3bdulrahmn69/iti-games-tasks',
    liveUrl: 'https://3bdulrahmn69.github.io/iti-games-tasks',
    highlights: [
      'Mouse & Keyboard control',
      'Sound Effects',
      'Easter egg with (duck, dog) words',
    ],
    whatILearned: ['more about DOM manipulation', 'getBoundingClientRect()'],
    category: ProjectCategory.FRONTEND,
    tags: ['HTML', 'CSS', 'JavaScript', 'Games'],
    status: 'completed',
  },
  {
    title: 'Edmunds Scraping',
    slug: 'edmunds-scraping',
    description: 'Scraping the Edmunds website to get the car details',
    image: edmunds_scraping,
    techStack: ['Next.js', 'puppeteer'],
    type: 'personal',
    year: 2025,
    githubUrl: 'https://github.com/3bdulrahmn69/edmunds-scraping',
    liveUrl: 'https://edmunds-scraping.vercel.app',
    highlights: ['scraping the website', 'get the car details'],
    whatILearned: ['what is web scraping', 'how to use puppeteer'],
    category: ProjectCategory.SCRAPING,
    tags: ['next.js', 'puppeteer', 'scraping'],
    status: 'completed',
  },
  {
    title: 'Next.js Dashboard',
    slug: 'next-dashboard',
    description: 'next.js dashboard template from official documentation',
    image: next_dashboard,
    techStack: ['Next.js'],
    type: 'personal',
    year: 2025,
    githubUrl: 'https://github.com/3bdulrahmn69/nextjs-dashboard',
    liveUrl: 'https://nextjs-dashboard-virid-five-68.vercel.app',
    highlights: ['authentication', 'loading skeleton', 'responsive design'],
    whatILearned: ['how to use Next.js'],
    category: ProjectCategory.FULLSTACK,
    tags: ['next.js', 'dashboard', 'template'],
    status: 'completed',
  },
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
    type: 'personal',
    year: 2025,
    githubUrl: 'https://github.com/3bdulrahmn69/planify',
    liveUrl: 'https://3bdulrahmn69-planify.netlify.app',
    highlights: [
      'drag and drop tasks from box to another',
      'reorder tasks in the same box',
      'draw shapes on the canvas as you want',
      'save your tasks in the local storage',
      'download your canvas as an image',
    ],
    whatILearned: [
      'how to use React DnD library',
      'how to use Konva.js to draw shapes',
      'how to use local storage to save data',
    ],
    tags: [
      'React',
      'Tailwind CSS',
      'React DnD',
      'Konva.js',
      'drawing',
      'planner',
      'task manager',
    ],
    category: ProjectCategory.FRONTEND,
    status: 'in-progress',
  },
  {
    title: 'EchoTune',
    slug: 'echo-tune',
    description: 'Web Application to discover new music from Spotify API',
    image: EchoTune,
    techStack: ['React js', 'Tailwind CSS', 'Rapid API (Spotify API)', 'Axios'],
    type: 'personal',
    year: 2024,
    githubUrl: 'https://github.com/3bdulrahmn69/echo_tune',
    liveUrl: 'https://3bdulrahmn69-echotune.netlify.app',
    highlights: ['random music recommendations', 'play/pause music'],
    whatILearned: ['how to use Rapid API', 'how to use Spotify API'],
    tags: [
      'React',
      'Tailwind CSS',
      'Rapid API',
      'Spotify API',
      'music',
      'recommendation',
    ],
    category: ProjectCategory.FRONTEND,
    status: 'completed',
  },
  {
    title: 'WorldWise',
    slug: 'world-wise',
    description: 'Web Application to track your travel around the world',
    image: WorldWise,
    techStack: ['React js', 'CSS', 'Leaflet', 'Geolocation'],
    type: 'personal',
    year: 2024,
    githubUrl: 'https://github.com/3bdulrahmn69/worldWise',
    liveUrl: 'https://3bdulrahmn69-worldwise.netlify.app',
    highlights: [
      'mark your visited countries',
      'see the percentage of the visited countries',
    ],
    whatILearned: [
      'how to use Leaflet library',
      'how to use Geolocation API',
      'what is Context API',
    ],
    tags: ['React', 'CSS', 'Leaflet', 'Geolocation', 'travel', 'countries'],
    category: ProjectCategory.FRONTEND,
    status: 'completed',
  },
  {
    title: 'React Quiz App',
    slug: 'react-quiz-app',
    description: 'Web Application designed to test users knowledge of React',
    image: ReactQuizApp,
    techStack: ['React js', 'CSS', 'JSON-SERVER'],
    type: 'personal',
    year: 2024,
    githubUrl: 'https://github.com/3bdulrahmn69/react_quiz',
    liveUrl: 'https://3bdulrahmn69-reactquiz.netlify.app',
    highlights: ['multiple choice questions', 'score at the end of the quiz'],
    whatILearned: ['how to use JSON-SERVER', 'how to use React hooks'],
    tags: ['React', 'CSS', 'JSON-SERVER', 'quiz', 'questions'],
    category: ProjectCategory.FRONTEND,
    status: 'completed',
  },
  {
    title: 'My Watched Movies',
    slug: 'my-watched-movies',
    description: 'Website to keep track of the movies you watched',
    image: MyWatchedMovies,
    techStack: ['React js', 'Tailwind CSS', 'daisyui', 'OMDb API', 'Axios'],
    type: 'personal',
    year: 2024,
    githubUrl: 'https://github.com/3bdulrahmn69/my_watched_movies',
    liveUrl: 'https://mywatchedmovies.netlify.app',
    highlights: ['search for movies', 'add movies to the watched list'],
    whatILearned: [
      'how to use OMDb API',
      'how to use daisyui',
      'how to use Axios',
    ],
    tags: ['React', 'Tailwind CSS', 'daisyui', 'OMDb API', 'movies'],
    category: ProjectCategory.FRONTEND,
    status: 'completed',
  },
  {
    title: 'Wow You Convert It',
    slug: 'wow-you-convert-it',
    description: 'See what your salary is worth in other wow currencies',
    image: WowYouConvertIt,
    techStack: ['React js', 'Tailwind CSS', 'Framer motion'],
    type: 'personal',
    year: 2024,
    githubUrl: 'https://github.com/3bdulrahmn69/wow_you_convert_it',
    liveUrl: 'https://wowyouconvertit.netlify.app',
    highlights: ['convert your salary to other currencies'],
    whatILearned: ['how to use Framer motion'],
    tags: ['React', 'Tailwind CSS', 'Framer motion', 'currency', 'conversion'],
    category: ProjectCategory.FRONTEND,
    status: 'completed',
  },
  {
    title: 'MercyBridge',
    slug: 'mercy-bridge',
    description:
      'Website to make donation more easier by showcasing the charities',
    image: MercyBridge,
    techStack: ['React js', 'Tailwind CSS', 'I18next ', 'JSON-SERVER', 'Axios'],
    type: 'personal',
    year: 2024,
    githubUrl: 'https://github.com/3bdulrahmn69/mercyBridge',
    highlights: [
      'search for charities',
      'donate to charities',
      'filter charities',
      'details of the charity',
      'read news about the charity',
    ],
    whatILearned: [
      'how to use I18next for translation',
      'how to use JSON-SERVER',
      'how to use Axios',
    ],
    tags: ['React', 'Tailwind CSS', 'I18next', 'JSON-SERVER', 'charities'],
    category: ProjectCategory.FRONTEND,
    status: 'completed',
  },
  {
    title: 'Youtube Clone',
    slug: 'youtube-clone',
    description: 'Youtube Clone with youtube api from Rapid API',
    image: Youtube,
    techStack: ['React js', 'Axios', 'Material UI', 'Rapid API'],
    type: 'personal',
    year: 2023,
    githubUrl: 'https://github.com/3bdulrahmn69/youtube_clone_v2',
    liveUrl: 'https://abdelrahman69-youtube.netlify.app/',
    highlights: ['search for videos', 'watch videos'],
    whatILearned: [
      'how react works',
      'how to use Material UI',
      'how to use Rapid API',
    ],
    tags: ['React', 'Axios', 'Material UI', 'Rapid API', 'youtube'],
    category: ProjectCategory.FRONTEND,
    status: 'completed',
  },
  {
    title: 'LoveLoom',
    slug: 'love-loom',
    description: 'A Website to enhance love stories - Memories and more',
    image: LoveLoom,
    techStack: ['HTML', 'Tailwind CSS', 'JavaScript', 'GSAP'],
    type: 'personal',
    year: 2023,
    githubUrl: 'https://github.com/3bdulrahmn69/LoveLoom',
    liveUrl: 'https://loveloom.netlify.app/',
    highlights: ['save your love story'],
    whatILearned: ['how to use GSAP'],
    tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'GSAP', 'love', 'stories'],
    category: ProjectCategory.FRONTEND,
    status: 'completed',
  },
  {
    title: 'E-store',
    slug: 'e-store',
    description: 'Website for selling hardware products',
    image: EStore,
    techStack: ['HTML', 'CSS', 'JavaScript'],
    type: 'personal',
    year: 2023,
    githubUrl: 'https://github.com/3bdulrahmn69/Estore',
    highlights: [
      'admin dashboard with full CRUD functionality',
      'cart functionality',
      'search for products',
      'filter products',
    ],
    whatILearned: ['how to use local storage'],
    tags: ['HTML', 'CSS', 'JavaScript', 'store', 'products'],
    category: ProjectCategory.FRONTEND,
    status: 'completed',
  },
  {
    title: 'Bondi',
    slug: 'bondi',
    description: 'Bootstrap template to practice with',
    image: Bondi,
    techStack: ['HTML', 'CSS', 'Bootstrap'],
    type: 'personal',
    year: 2023,
    githubUrl: 'https://github.com/3bdulrahmn69/Bondi',
    liveUrl: 'https://3bdulrahmn69.github.io/Bondi',
    highlights: ['responsive design'],
    whatILearned: ['how to use Bootstrap'],
    tags: ['HTML', 'CSS', 'Bootstrap', 'template'],
    category: ProjectCategory.FRONTEND,
    status: 'completed',
  },
  {
    title: 'Javascript projects',
    slug: 'javascript-projects',
    description: 'Collection of javascript beginner projects',
    image: Small,
    techStack: ['HTML', 'JavaScript'],
    type: 'personal',
    year: 2023,
    githubUrl: 'https://github.com/3bdulrahmn69/JavaScript_Small_Pojects',
    liveUrl: 'https://3bdulrahmn69.github.io/JavaScript_Small_Pojects',
    highlights: ['small projects to practice javascript'],
    whatILearned: ['how to use JavaScript'],
    tags: ['HTML', 'JavaScript', 'projects'],
    category: ProjectCategory.FRONTEND,
    status: 'completed',
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
    type: 'professional',
    year: 2025,
    liveUrl: 'https://www.7-design.net',
    paid: true,
    whatILearned: [
      'best practices for building a professional website',
      'be more creative with the design',
      'more about Framer Motion',
    ],
    tags: [
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'portfolio',
      'Seven Design Studio',
    ],
    category: ProjectCategory.FRONTEND,
    status: 'completed',
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
