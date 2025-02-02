import type { Metadata } from 'next';
import Hero from './ui/sections/hero-section';
import About from './ui/sections/about-section';
import Projects from './ui/sections/projects-section';
import Contact from './ui/sections/contact-section';

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
