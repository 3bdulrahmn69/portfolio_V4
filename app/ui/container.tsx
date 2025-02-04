import { cn } from '../lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('min-w-0 max-w-6xl mx-auto', className)}>{children}</div>
  );
};

export default Container;
