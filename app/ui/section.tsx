import { cn } from '../lib/utils';

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
    <h2 className={cn(`text-site md:text-site-md text-center`, className)}>
      {children}
    </h2>
  );
};

export const Description = ({ children, className }: DescriptionProps) => {
  return (
    <p
      className={cn(
        `text-center text-[17px] md:text-[20px] text-light-text dark:text-primary-text lg:max-w-2xl px-6 text md:px-20 lg:px-0 max-w-2xl mx-auto`,
        className
      )}
    >
      {children}
    </p>
  );
};
