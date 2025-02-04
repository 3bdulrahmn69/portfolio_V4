import Button from './ui/button';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-4 bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
      <h1 className="flex flex-col items-center justify-center">
        <span className="text-7xl animate-pulse">404</span>
        <span className="text-2xl">Not Found</span>
      </h1>
      <p>
        ehh, I think you&apos;re lost. Let&apos;s get you back to the homepage.
      </p>
      <Button variant="tertiary" href="/" className="border-2 px-4 py-2">
        Homepage
      </Button>
    </main>
  );
}
