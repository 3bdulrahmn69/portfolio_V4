import React from 'react';
import SocialLinks from './home/social-links';
import Button from './button';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="px-8">
      <div className="flex flex-col md:flex-row items-center justify-between py-6">
        <Button ariaLabel="contact" href="/#contact" className="mt-4 px-8">
          Contact
        </Button>
        <SocialLinks />
      </div>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
        &copy; {year} Abdulrahman Moussa
      </p>
    </footer>
  );
};

export default Footer;
