import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/layout/container';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center">
      <Container>
        <div className="text-center space-y-6 py-20">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Go Home
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              View Projects
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
