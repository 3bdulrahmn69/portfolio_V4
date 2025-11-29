import { cn } from '../../lib/utils';
import { Delius } from 'next/font/google';
import { Comic_Neue } from 'next/font/google';

const delius = Delius({ subsets: ['latin'], weight: ['400'] });
const comic_neue = Comic_Neue({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

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
      className={cn('py-8', className)}
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
        `${delius.className} text-lg md:text-xl text-center bg-secondary w-fit mx-auto p-2 rounded-lg`,
        className
      )}
    >
      {children}
    </h2>
  );
};

export const Description = ({ children, className }: DescriptionProps) => {
  return (
    <p className={cn('text-center my-4 max-w-[45ch] mx-auto', className)}>
      {children}
    </p>
  );
};

export const LatinSpan = ({ children, className }: LatinSpanProps) => {
  return (
    <span
      className={cn(
        `${comic_neue.className} italic font-bold text-primary`,
        className
      )}
    >
      {children}
    </span>
  );
};
