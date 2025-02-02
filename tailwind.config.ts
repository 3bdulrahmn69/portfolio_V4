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
    },
  },
  plugins: [],
} satisfies Config;
