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
        'foreground-light': '#171717',
        'background-dark': '#0a0a0a',
        'secondary-background-dark': '#212121',
        'foreground-dark': '#ededed',
        'primary-light': '#77B254',
        'primary-dark': '#8EB486',
        'secondary-light': '#f9f871',
        'secondary-dark': '#f9f871',
      },
      animation: {
        'fade-in': 'fade-in 0.5s linear',
        'slide-up': 'slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
      },
    },
  },
  plugins: [],
} satisfies Config;
