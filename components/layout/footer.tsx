import SocialLinks from '../home/social-links';
import Button from '../ui/button';
import Container from './container';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          <Button ariaLabel="contact" href="/#contact" className="mt-4 px-8">
            Contact
          </Button>
          <SocialLinks />
        </div>
        <p className="text-center text-sm text-muted-foreground mb-4">
          &copy; {year} Abdulrahman Moussa
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
