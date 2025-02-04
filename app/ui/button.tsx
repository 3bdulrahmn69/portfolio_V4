import { cn } from '../lib/utils';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  type?: 'link' | 'anchor';
  className?: string;
}

const Button = ({
  children,
  href,
  variant = 'primary',
  type = 'link',
  className,
}: ButtonProps) => {
  const variantStyles = {
    primary:
      'bg-primary-light dark:bg-primary-dark relative z-[1] px-3 py-2 overflow-hidden after:absolute after:-top-1/2 after:-bottom-1/2 after:left-0 after:w-5 after:content-[""] after:z-[-1] after:bg-[#ffffff33] shine',
    secondary: '',
    tertiary:
      "relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:bg-primary-light dark:before:bg-primary-dark before:origin-bottom-right before:scale-x-0 before:transition-transform before:duration-500 hover:before:origin-bottom-left hover:before:scale-x-100",
  };

  if (type === 'anchor') {
    return (
      <a
        href={href}
        className={cn('inline-block', variantStyles[variant], className)}
      >
        {children}
      </a>
    );
  }

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
