import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import './ui/globals.css';
import Footer from './ui/footer';
import GoTop from './ui/go-top';
import GoogleAnalytics from './ui/google-analytics';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Providers } from './providers/theme-provider';

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
        <GoogleAnalytics />
        <meta name="theme-color" content="#ededed" />
      </head>
      <body
        className={`${slabo_13px.className} relative bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 antialiased`}
      >
        <Providers>
          {children}
          <GoTop />
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
