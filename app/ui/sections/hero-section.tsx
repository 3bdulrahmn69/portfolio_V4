'use client';

import { useState, useEffect } from 'react';
import CustomCard from '../home/custom-card';
import Header from '../header';
import HeroText from '../home/hero-text';
import { IoIosArrowDown } from 'react-icons/io';

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="w-11/12 mx-auto mt-4 rounded-xl px-8 py-4 bg-secondary-background-light dark:bg-secondary-background-dark transition-colors duration-300">
        <div className="mb-8">
          <Header />
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-center md:justify-between items-center">
          <CustomCard />
          <HeroText />
        </div>
      </div>

      {showScrollIndicator && (
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-14 animate-scroll">
          <span className="border-2 border-text-light dark:border-text-dark rounded-full w-6 h-10 flex items-center justify-center">
            <IoIosArrowDown className="animate-scroll mt-2" />
          </span>
        </div>
      )}
    </div>
  );
}
