import { FiArrowRight } from 'react-icons/fi';
import Button from '../button';

const AboutDetails = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full md:max-w-xs lg:max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        Frontend Developer Crafting Digital Experiences
      </h2>

      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          I&apos;m Abdulrahman Moussa, a dedicated frontend developer from
          Cairo, Egypt. With 1+ year of experience and a Software Engineering
          certification from ALX Africa, I specialize in building responsive web
          applications using modern technologies.
        </p>

        <div className="space-y-2">
          <p className="font-medium">Key Highlights:</p>
          <ul className="list-disc list-inside space-y-1 marker:text-primary dark:marker:text-primary-dark">
            <li>
              Proficient in JavaScript ecosystem (React, Next.js, Node.js,
              TypeScript)
            </li>
            <li>
              Knowledge in full-stack development (MongoDB, Express, Flask)
            </li>
            <li>
              Passionate about creating accessible and performant web
              applications
            </li>
            <li>
              Fast learner with a growth mindset and strong problem-solving
            </li>
          </ul>
        </div>

        <p>
          Currently seeking frontend development roles where I can leverage my
          skills to create impactful digital solutions. Let&apos;s connect and
          explore how I can contribute to your next project!
        </p>

        <Button
          variant="tertiary"
          href="/about"
          className="text-primary-light dark:text-primary-dark group inline-flex items-center justify-center gap-2 text-lg font-medium pt-4"
        >
          Learn more about my journey
          <FiArrowRight
            size={24}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </Button>
      </div>
    </div>
  );
};

export default AboutDetails;
