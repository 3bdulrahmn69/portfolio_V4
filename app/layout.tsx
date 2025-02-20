import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import './ui/globals.css';
import Footer from './ui/footer';
import GoTop from './ui/go-top';
import GoogleAnalytics from './ui/google-analytics';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const slabo_13px = Merriweather({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: {
    template: 'Abdulrahman Moussa - %s',
    default: 'Abdulrahman Moussa portfolio',
  },
  metadataBase: new URL('https://www.3bdulrahmn.tech'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <meta name="theme-color" content="#ededed" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const metaThemeColor = document.querySelector('meta[name="theme-color"]');
                const updateThemeColor = () => {
                  if(document.documentElement.classList.contains('dark')) {
                    metaThemeColor.setAttribute('content', '#0a0a0a');
                  } else {
                    metaThemeColor.setAttribute('content', '#ededed');
                  }
                };
                
                // Run on initial load
                updateThemeColor();
                
                // Observe class changes on <html>
                const observer = new MutationObserver(updateThemeColor);
                observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${slabo_13px.className} relative bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 antialiased`}
      >
        {children}
        <GoTop />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
