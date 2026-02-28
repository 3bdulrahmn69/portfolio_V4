import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/layout/header';
import Footer from '../components/layout/footer';
import GoTop from '../components/shared/go-top';
import './globals.css';

const Analytics = dynamic(() =>
  import('@vercel/analytics/next').then((mod) => ({ default: mod.Analytics })),
);

const SpeedInsights = dynamic(() =>
  import('@vercel/speed-insights/next').then((mod) => ({
    default: mod.SpeedInsights,
  })),
);

const slabo_13px = Merriweather({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  metadataBase: new URL('https://3bdulrahmn.vercel.app'),
  title: {
    template: 'Abdulrahman Moussa - %s',
    default: 'Abdulrahman Moussa - Frontend Developer | Portfolio',
  },
  description:
    'Abdulrahman Moussa is a frontend developer specializing in React.js, Next.js, and JavaScript. Explore projects, skills, and professional experience.',
  authors: [
    { name: 'Abdulrahman Moussa', url: 'https://3bdulrahmn.vercel.app' },
  ],
  creator: 'Abdulrahman Moussa',
  publisher: 'Abdulrahman Moussa',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    siteName: 'Abdulrahman Moussa Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@3bdulrahmn69',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <meta
          name="theme-color"
          content="#ededed"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0a0a0a"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${slabo_13px.className} relative bg-background text-foreground transition-colors duration-300 antialiased`}
      >
        <ThemeProvider
          attribute="class"
          themes={['light', 'dark', 'system']}
          enableSystem={true}
          defaultTheme="system"
          storageKey="abdulrahman-moussa-portfolio-theme"
        >
          <Header />
          {children}
          <GoTop />
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
