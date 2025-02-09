import {
  FaGithub,
  FaLinkedinIn,
  FaMedium,
  FaSquareXTwitter,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa6';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mt-4">
      {myLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-primary-light dark:hover:text-primary-dark"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

const myLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/3bdulrahmn69',
    icon: <FaGithub />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/3bdulrahmn69',
    icon: <FaLinkedinIn />,
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@3bdulrahmn69',
    icon: <FaMedium />,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/3bdulrahmn69',
    icon: <FaSquareXTwitter />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/3bdulrahmn69',
    icon: <FaFacebook />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/3bdulrahmn69',
    icon: <FaInstagram />,
  },
];

export default SocialLinks;
