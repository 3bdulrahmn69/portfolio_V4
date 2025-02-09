import React from 'react';

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-1 group">
      <p className="text-xl text-text-dark dark:text-text-light font-normal group-hover:font-bold bg-primary-light dark:bg-primary-dark p-2 rounded-full duration-300">
        AM
      </p>
      <p className="text-xs font-bold">Abdulrahman Moussa</p>
    </div>
  );
};

export default Logo;
