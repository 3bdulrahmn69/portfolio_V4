import Button from '../button';
import { LatinSpan } from '../section';
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
        href="https://flowcv.com/resume/emcfrihgf1"
        className="mt-4 px-8 bg-transparent dark:bg-transparent text-text-light dark:text-text-dark border-2 border-text-light dark:border-text-dark"
      >
        Resume
      </Button>
      <SocialLinks />
    </div>
  );
};

export default HeroText;
