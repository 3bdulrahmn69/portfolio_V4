import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '../components/sections/hero-section';

const About = dynamic(() => import('../components/sections/about-section'), {
  loading: () => <div>Loading about...</div>,
});

const Projects = dynamic(
  () => import('../components/sections/projects-section'),
  {
    loading: () => <div>Loading projects...</div>,
  },
);

const Contact = dynamic(
  () => import('../components/sections/contact-section'),
  {
    loading: () => <div>Loading contact...</div>,
  },
);

export const metadata: Metadata = {
  title: {
    absolute: 'Abdulrahman Moussa - Frontend Developer | Portfolio',
  },
  description:
    'Abdulrahman Moussa is a frontend developer specializing in React.js and JavaScript. Explore his projects, works, and development experience.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Abdulrahman Moussa',
    'frontend developer',
    'React developer',
    'Next.js developer',
    'JavaScript expert',
    'web development',
    'portfolio',
    'Cairo developer',
    'software engineering',
    'Abdulrahman Moussa projects',
    'Abdulrahman Moussa works',
    'Abdulrahman Moussa experience',
    'Abdulrahman Moussa development',
    'Abdulrahman Moussa portfolio',
    'Abdulrahman Moussa Cairo',
    'Abdulrahman Moussa software engineering',
    'Abdulrahman Moussa frontend developer',
    'Abdulrahman Moussa React developer',
    'Abdulrahman Moussa Next.js developer',
    'Abdulrahman Moussa JavaScript expert',
    'Abdulrahman Moussa web development',
    '3bdulrahmn69',
    '3bdulrahmn69 portfolio',
    '3bdulrahmn',
    '3bdulrahmn portfolio',
    'عبدالرحمن موسى',
    'مطور واجهات المستخدم',
    'مطور React',
    'مطور Next.js',
    'خبير JavaScript',
    'تطوير الويب',
    'مشاريع عبدالرحمن موسى',
    'أعمال عبدالرحمن موسى',
    'خبرة عبدالرحمن موسى',
  ],
  openGraph: {
    title: 'Abdulrahman Moussa - Frontend Developer | Portfolio',
    description:
      'Abdulrahman Moussa is a frontend developer specializing in React.js and JavaScript. Explore his projects, works, and development experience.',
    siteName: 'Abdulrahman Moussa Portfolio',
    images: [
      {
        url: 'https://raw.githubusercontent.com/3bdulrahmn69/portfolio_V4/refs/heads/main/public/og-home.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Abdulrahman Moussa - Frontend Developer | Portfolio',
    card: 'summary_large_image',
    description:
      'Abdulrahman Moussa is a frontend developer specializing in React.js and JavaScript. Explore his projects, works, and development experience.',
    images: [
      'https://raw.githubusercontent.com/3bdulrahmn69/portfolio_V4/refs/heads/main/public/og-home.jpg',
    ],
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'Abdulrahman Moussa Portfolio',
        url: 'https://3bdulrahmn.vercel.app',
        description:
          'Abdulrahman Moussa is a frontend developer specializing in React.js and JavaScript. Explore his projects, works, and development experience.',
        inLanguage: 'en-US',
      },
      {
        '@type': 'Person',
        name: 'Abdulrahman Moussa',
        url: 'https://3bdulrahmn.vercel.app',
        jobTitle: 'Frontend Developer',
        knowsAbout: [
          'JavaScript',
          'React.js',
          'Next.js',
          'TypeScript',
          'Frontend Development',
          'Web Development',
        ],
        sameAs: [
          'https://www.linkedin.com/in/3bdulrahmn69',
          'https://github.com/3bdulrahmn69',
          'https://medium.com/@3bdulrahmn69',
          'https://twitter.com/3bdulrahmn69',
        ],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
