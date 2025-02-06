import Container from '../container';
import AboutDetails from '../home/about-details';
import AboutTech from '../home/about-tech';
import { Section, Title, Description } from '../section';

export default function About() {
  return (
    <Section id="about">
      <Title>Who am I?</Title>
      <Description>
        want to know more about me? Here is a brief overview of my background
      </Description>
      <Container className="flex flex-col gap-y-16 md:gap-y-0 md:gap-x-4 md:flex-row md:justify-between mt-8">
        <AboutDetails />
        <AboutTech />
      </Container>
    </Section>
  );
}
