import Button from '../button';
import { LatinSpan } from '../section';
import SocialLinks from './social-links';

const HeroText = () => {
  return (
    <div className="max-w-lg py-4">
      <h1 className="text-4xl font-bold max-w-[18ch]">
        Hello, I&apos;m Abdulrahman Moussa
      </h1>
      <p className="text-lg">
        A <LatinSpan>software engineer</LatinSpan> and a{' '}
        <LatinSpan>front-end developer</LatinSpan>. I&apos;m passionate about
        learning new technologies and building new things.
      </p>
      <Button href="#contact" className="mt-4 px-8">
        Hire Me
      </Button>
      <SocialLinks />
    </div>
  );
};

export default HeroText;
