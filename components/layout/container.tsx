import { cn } from '../../lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('min-w-0 max-w-7xl mx-auto px-4 md:px-6', className)}>
      {children}
    </div>
  );
};

export default Container;
