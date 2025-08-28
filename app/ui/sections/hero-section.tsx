import CustomCard from '../home/custom-card';
import Header from '../header';
import HeroText from '../home/hero-text';
import ScrollMouse from '../home/scroll-mouse';

export default function Hero() {
  return (
    <div className="relative">
      <div className="w-11/12 mx-auto mt-12 rounded-xl px-8 py-4 bg-secondary-background-light dark:bg-secondary-background-dark transition-colors duration-300">
        <div className="mb-8">
          <Header className="py-0 md:py-4 px-0 md:px-8" />
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-center md:justify-between items-center">
          <CustomCard />
          <HeroText />
        </div>
      </div>
      <ScrollMouse />
    </div>
  );
}
