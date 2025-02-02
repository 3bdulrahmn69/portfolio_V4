import CustomCard from '../home/custom-card';
import Header from '../home/header';
import HeroText from '../home/hero-text';

export default function Hero() {
  return (
    <div className="w-11/12 min-h-[calc(100vh-2rem)] mx-auto mt-4 rounded-lg px-4 py-2 bg-secondary-background-light dark:bg-secondary-background-dark transition-colors duration-300">
      <Header />
      <div className="flex flex-col md:flex-row-reverse justify-center md:justify-between items-center">
        <CustomCard />
        <HeroText />
      </div>
    </div>
  );
}
