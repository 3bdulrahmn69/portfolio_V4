import Button from '../button';
import Container from '../container';
import { Section, Title, Description } from '../section';
import { FiArrowRight } from 'react-icons/fi';

export default function About() {
  return (
    <Section id="about">
      <Title>Who am I?</Title>
      <Description>Little bit about me</Description>
      <Container className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-lg text-gray-600">
              I am a full-stack developer with 5 years of experience in building
              web applications. I have worked with various technologies and
              frameworks. I have a passion for building scalable and
              maintainable applications.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <p className="text-lg text-gray-600">
              I have experience in building web applications using JavaScript,
              React, Node.js, and other technologies. I am proficient in
              front-end and back-end development. I have worked on various
              projects and have experience in building scalable and maintainable
              applications.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button
            variant="tertiary"
            href="/projects"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-medium"
          >
            Learn More
            <FiArrowRight
              size={24}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
