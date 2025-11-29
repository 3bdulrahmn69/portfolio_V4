import Container from '../layout/container';
import CustomCard from '../home/custom-card';
import HeroText from '../home/hero-text';
import ScrollMouse from '../home/scroll-mouse';

export default function Hero() {
  return (
    <div className="relative">
      <Container className="mt-12 flex flex-col md:flex-row-reverse justify-center md:justify-between items-center">
        <CustomCard />
        <HeroText />
      </Container>
      <ScrollMouse />
    </div>
  );
}
