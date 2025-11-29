'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumb = () => {
  const pathname = usePathname();

  // Split the pathname into segments
  const segments = pathname
    .split('/')
    .filter((segment) => segment !== '')
    .map((segment) => decodeURIComponent(segment));

  // Create breadcrumb paths
  const breadcrumbs = segments.map((_, index) => {
    return {
      name: segments[index],
      href: '/' + segments.slice(0, index + 1).join('/'),
    };
  });

  // Add home as first element
  if (pathname !== '/') {
    breadcrumbs.unshift({
      name: 'home',
      href: '/',
    });
  }

  const formatName = (name: string) => {
    return name
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center text-sm bg-secondary px-4 py-2 rounded-lg"
    >
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <div key={index} className="flex items-center">
            {!isLast ? (
              <Link href={breadcrumb.href} className="text-primary">
                {formatName(breadcrumb.name)}
              </Link>
            ) : (
              <span className="">{formatName(breadcrumb.name)}</span>
            )}
            {!isLast && <IoIosArrowForward className="mx-1" />}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
