'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !resolvedTheme) {
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
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle Dark Mode"
      className="w-6 h-6"
      title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {resolvedTheme === 'dark' ? (
        <FaMoon className="text-muted-foreground" size={24} />
      ) : (
        <FaSun className="text-warning" size={24} />
      )}
    </button>
  );
};

export default ToggleTheme;
