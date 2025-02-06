import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './ui/globals.css';
import Footer from './ui/footer';
import GoTop from './ui/go-top';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: 'Abdulrahman Moussa - %s',
    default: 'Abdulrahman Moussa',
  },
  description: 'Welcome to my portfolio',
  metadataBase: new URL('https://www.3bdulrahmn.tech'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} relative bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 antialiased`}
      >
        {children}
        <GoTop />
        <Footer />
      </body>
    </html>
  );
}
