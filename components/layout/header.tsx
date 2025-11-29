'use client';

import { usePathname } from 'next/navigation';
import ToggleDark from '../home/toggle-dark';
import Breadcrumb from '../ui/bread-crumb';
import Logo from '../shared/logo';
import { cn } from '../../lib/utils';

const Header = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        'min-w-0 max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 mt-8 animate-slideDown',
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
