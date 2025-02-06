'use client';

import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrolled / windowHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [isVisible]);

  return (
    <button
      aria-label="Scroll to top"
      tabIndex={0}
      className={`group z-10 fixed bottom-8 right-6 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isVisible
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible translate-y-4'
      } ${scrollProgress > 95 ? 'md:bottom-28' : ''}`}
      onClick={goTop}
    >
      <div className="relative flex items-center justify-center">
        <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            className="stroke-current text-gray-200 dark:text-gray-700"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            className="stroke-current text-primary-light dark:text-primary-dark"
            strokeWidth="8"
            fill="none"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * scrollProgress) / 100}
          />
        </svg>

        <div className="absolute flex flex-col items-center">
          <IoIosArrowUp
            size={24}
            className="text-primary-light dark:text-primary-dark transition-transform duration-300 group-hover:-translate-y-1"
          />
          <span className="sr-only">Back to top</span>
        </div>
      </div>
    </button>
  );
};

export default GoTop;
