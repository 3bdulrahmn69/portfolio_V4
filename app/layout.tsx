import type { Metadata } from 'next';
import './ui/globals.css';

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
      <body className={`antialiased dark`}>{children}</body>
    </html>
  );
}
