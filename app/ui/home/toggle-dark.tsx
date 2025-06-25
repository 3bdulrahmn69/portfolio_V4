'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleDark = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle Dark Mode"
        className="opacity-0 pointer-events-none"
      >
        <div className="w-6 h-6" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <FaMoon className="text-gray-500" size={24} />
      ) : (
        <FaSun className="text-yellow-500" size={24} />
      )}
    </button>
  );
};

export default ToggleDark;
