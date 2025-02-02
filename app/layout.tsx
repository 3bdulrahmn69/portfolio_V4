import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './ui/globals.css';

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
        className={`${raleway.className} bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark transition-colors duration-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
