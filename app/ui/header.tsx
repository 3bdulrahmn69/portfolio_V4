'use client';

import { usePathname } from 'next/navigation';
import ToggleDark from './home/toggle-dark';
import Breadcrumb from './bread-crumb';
import Logo from './logo';
import { cn } from '../lib/utils';

const Header = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        'flex justify-between items-center py-1 md:py-4 px-4 md:px-8 max-w-7xl mx-auto',
        className
      )}
    >
      {pathname !== '/' ? (
        <div className="flex items-center space-x-2">
          <Breadcrumb />
        </div>
      ) : (
        <Logo />
      )}
      <div>
        <ToggleDark />
      </div>
    </header>
  );
};

export default Header;
