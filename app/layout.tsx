import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/layout/header';
import Footer from '../components/layout/footer';
import GoTop from '../components/shared/go-top';
import './globals.css';

const Analytics = dynamic(() =>
  import('@vercel/analytics/next').then((mod) => ({ default: mod.Analytics }))
);

const SpeedInsights = dynamic(() =>
  import('@vercel/speed-insights/next').then((mod) => ({
    default: mod.SpeedInsights,
  }))
);

const slabo_13px = Merriweather({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: {
    template: 'Abdulrahman Moussa - %s',
    default: 'Abdulrahman Moussa portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ededed" />
      </head>
      <body
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
