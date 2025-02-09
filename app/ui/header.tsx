'use client';

import ToggleDark from './home/toggle-dark';
import Breadcrumb from './bread-crumb';
import { usePathname } from 'next/navigation';
import Logo from './logo';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-8 max-w-7xl mx-auto">
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
