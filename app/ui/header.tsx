'use client';

import ToggleDark from './home/toggle-dark';
import NavLinks from './nav-links';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center p-4 max-w-7xl mx-auto bg-primary-light dark:bg-primary-dark rounded-lg">
      {pathname !== '/' ? (
        <div className="flex items-center space-x-2">
          <NavLinks />
        </div>
      ) : (
        <p>Logo</p>
      )}
      <div className="p-1 bg-background-light  rounded-full">
        <ToggleDark />
      </div>
    </header>
  );
};

export default Header;
