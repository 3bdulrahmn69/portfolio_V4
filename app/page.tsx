import type { Metadata } from 'next';
import Hero from './ui/home/hero-section';
import About from './ui/home/about-section';
import Projects from './ui/home/projects-section';
import Contact from './ui/home/contact-section';

export const metadata: Metadata = {
  title: 'Abdulrahman Moussa - Home',
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
