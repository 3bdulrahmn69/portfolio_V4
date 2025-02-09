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
        'primary-light': '#2D336B',
        'primary-dark': '#97A1D3',
      },
      animation: {
        'fade-in': 'fade-in 0.5s linear',
        'slide-up': 'slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        scroll: 'scroll 2s infinite',
        FadeIn: 'cFadeIn 0.5s linear',
        FadeInRev: 'cFadeInRev 0.5s linear',
        slideUp: 'cSlideUp 0.5s linear',
        slideDown: 'cSlideDown 0.5s linear',
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
        cFadeIn: {
          '0%, 25%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        cFadeInRev: {
          '0%, 25%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        cSlideUp: {
          '0%, 25%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        cSlideDown: {
          '0%, 25%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
