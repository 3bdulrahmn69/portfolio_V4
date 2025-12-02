import Button from '../ui/button';
import { LatinSpan } from '../ui/section';
import SocialLinks from './social-links';

const HeroText = () => {
  return (
    <div className="max-w-lg py-4 animate-FadeIn">
      <h1 className="text-4xl font-bold max-w-[18ch]">
        Hello, I&apos;m Abdulrahman Moussa
      </h1>
      <p className="text-lg">
        A <LatinSpan>software engineer</LatinSpan> and a{' '}
        <LatinSpan>front-end developer</LatinSpan>. I&apos;m passionate about
        learning new technologies and building new things.
      </p>
      <Button ariaLabel="let's talk" href="#contact" className="mt-4 px-8 mr-2">
        Let&apos;s talk
      </Button>
      <Button
        ariaLabel="resume"
        href="https://drive.google.com/file/d/1EmonRfmPGvfNVJn0EWkLmyKEdmkLDCWn/view?usp=sharing"
        className="mt-4 px-8 bg-transparent text-foreground border-2 border-foreground"
      >
        Resume
      </Button>
      <SocialLinks />
    </div>
  );
};

export default HeroText;
