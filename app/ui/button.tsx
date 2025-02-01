import { cn } from '../lib/utils';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

const Button = ({
  children,
  href,
  variant = 'primary',
  className,
}: ButtonProps) => {
  const variantStyles = {
    primary:
      "relative text-white px-4 py-2 bg-blue-900 overflow-hidden cursor-pointer before:content-[''] before:absolute before:top-[-50%] before:bottom-[-50%] before:w-5 before:bg-white/20 before:z-[-1] before:translate-x-[-525%] before:rotate-[35deg] hover:before:translate-x-[200%] hover:before:transition-transform hover:before:duration-500",
    secondary: '',
    tertiary:
      "relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:bg-[#3cefff] before:origin-bottom-right before:scale-x-0 before:transition-transform before:duration-500 hover:before:origin-bottom-left hover:before:scale-x-100",
  };

  return (
    <Link
      href={href}
      className={cn('inline-block', variantStyles[variant], className)}
    >
      {children}
    </Link>
  );
};

export default Button;
