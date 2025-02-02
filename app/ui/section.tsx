import { cn } from '../lib/utils';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] });

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

interface LatinSpanProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn('container mx-auto py-8 px-4 md:px-8', className)}
      aria-label={id + ' section'}
    >
      {children}
    </section>
  );
};

export const Title = ({ children, className }: TitleProps) => {
  return (
    <h2
      className={cn(
        `${pacifico.className} text-lg md:text-xl text-center bg-secondary-background-light dark:bg-secondary-background-dark w-fit mx-auto p-2 rounded-lg`,
        className
      )}
    >
      {children}
    </h2>
  );
};

export const Description = ({ children, className }: DescriptionProps) => {
  return <p className={cn(`text-center mt-4`, className)}>{children}</p>;
};

export const LatinSpan = ({ children, className }: LatinSpanProps) => {
  return <em className={cn(`${pacifico.className}`, className)}>{children}</em>;
};
