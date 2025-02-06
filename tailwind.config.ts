import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background-light': '#ededed',
        'secondary-background-light': '#f9f9f9',
        'text-light': '#171717',
        'background-dark': '#0a0a0a',
        'secondary-background-dark': '#212121',
        'text-dark': '#ededed',
        'primary-light': '#C97C5D',
        'primary-dark': '#C89F9C',
      },
      animation: {
        'fade-in': 'fade-in 0.5s linear',
        'slide-up': 'slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        scroll: 'scroll 2s infinite',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateX(-10px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
