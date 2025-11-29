import Container from '../layout/container';
import ContactDetails from '../home/contact-details';
import ContactForm from '../home/contact-form';
import { Section, Title, Description } from '../ui/section';

export default function Contact() {
  return (
    <Section id="contact">
      <Title>Get in touch</Title>
      <Description>
        I&apos;m always open to new opportunities and collaborations. Feel free
        to reach out to me for any inquiries.
      </Description>
      <Container className="flex flex-col gap-y-16 lg:gap-y-0 lg:gap-x-4 lg:flex-row items-center lg:justify-between mt-8">
        <ContactDetails />
        <ContactForm />
      </Container>
    </Section>
  );
}
