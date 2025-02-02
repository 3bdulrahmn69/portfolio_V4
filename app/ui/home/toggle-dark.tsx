'use client';

import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleDark = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');

    if (localTheme === 'dark' || !localTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (isDarkMode === null) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <FaMoon className="text-gray-700" size={24} />
      ) : (
        <FaSun className="text-yellow-500" size={24} />
      )}
    </button>
  );
};

export default ToggleDark;
