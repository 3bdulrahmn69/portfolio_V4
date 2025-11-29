'use client';

import { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const ScrollMouse = () => {
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
    <>
      {showScrollIndicator ? (
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-14">
          <span className="border-2 border-foreground rounded-full w-6 h-10 flex items-center justify-center">
            <IoIosArrowDown className="animate-scroll mt-2" />
          </span>
        </div>
      ) : null}
    </>
  );
};

export default ScrollMouse;
