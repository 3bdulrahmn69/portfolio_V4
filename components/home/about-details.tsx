import { FiArrowRight } from 'react-icons/fi';
import Button from '../ui/button';

const AboutDetails = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full md:max-w-xs lg:max-w-2xl animate-FadeIn">
      <h2 className="text-2xl font-bold text-foreground">
        Frontend Developer Crafting Digital Experiences
      </h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          I&apos;m Abdulrahman Moussa, a frontend developer who loves creating
          responsive and user-friendly web interfaces. I started my journey
          through self-learning, building small projects and diving into HTML,
          CSS, and JavaScript on my own. That foundation led me to join the ALX
          Software Engineering program, where I improved my problem-solving
          skills and learned how to build real-world applications through
          consistent, independent learning. After that, I joined the Intensive
          Training Program (ITP) at the Information Technology Institute (ITI),
          specializing in frontend and cross-platform development. There, I
          worked on practical projects using modern tools like React and APIs.
          Learning has always been at the heart of what I do — before ALX and
          ITI, during them, and still every day. I&apos;m always exploring
          better ways to build fast, accessible, and modern web experiences.
        </p>

        <div className="space-y-2">
          <p className="font-medium">Key Highlights:</p>
          <ul className="list-disc list-inside space-y-1 marker:text-primary ">
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
          ariaLabel="Learn more about my journey"
          className="text-primary group inline-flex items-center justify-center gap-2 text-lg font-medium pt-4"
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
