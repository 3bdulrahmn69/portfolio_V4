import type { Metadata } from 'next';
import Header from '@/app/ui/header';
import Container from '@/app/ui/container';
import { Description, Section, Title } from '@/app/ui/section';
import TechStack from '@/app/ui/home/tech-stack';
import { certifications, education, courses } from '@/app/data/data';
import ToolsStack from '@/app/ui/home/tools-stack';
import Certificate from '@/app/ui/about/certificate';
import Button from '@/app/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import TimeLine from '@/app/ui/about/time-line';
import HobbyCard from '@/app/ui/about/hobby-card';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Abdulrahman Moussa, a frontend developer specializing in React.js and JavaScript. Explore skills, education, certifications, and professional experience.',
  keywords: [
    'Abdulrahman Moussa',
    'frontend developer',
    'React developer',
    'Next.js developer',
    'JavaScript expert',
    'web development',
    'portfolio',
    'Cairo developer',
    'software engineering',
  ],
  openGraph: {
    title: 'Abdulrahman Moussa - About',
    description:
      'Learn more about Abdulrahman Moussa, a frontend developer specializing in React.js and JavaScript. Explore skills, education, certifications, and professional experience.',
    url: 'https://3bdulrahmn.tech/about',
    siteName: 'Abdulrahman Moussa Portfolio',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Abdulrahman Moussa - About',
    card: 'summary_large_image',
    description:
      'Learn more about Abdulrahman Moussa, a frontend developer specializing in React.js and JavaScript. Explore skills, education, certifications, and professional experience.',
    images: ['/images/og-about.jpg'],
  },
};

export default function AboutPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abdulrahman Moussa',
    jobTitle: 'Frontend Developer',
    skills: 'JavaScript, React.js, Next.js, Frontend Development',
    url: 'https://3bdulrahmn.tech/about',
    sameAs: [
      'https://www.linkedin.com/in/3bdulrahmn69',
      'https://github.com/3bdulrahmn69',
      'https://medium.com/@3bdulrahmn69',
      'https://twitter.com/3bdulrahmn69',
    ],
  };

  return (
    <div>
      <div className="mt-8">
        <Header />
      </div>
      <main>
        <Container>
          <Section id="bio">
            <Title>
              About{' '}
              <span className="text-primary-light dark:text-primary-dark">
                Me
              </span>
            </Title>
            <Description>let&apos;s get to know each other!</Description>
          </Section>

          <Section id="skills">
            <Title>
              Technical{' '}
              <span className="text-primary-light dark:text-primary-dark">
                Skills
              </span>
            </Title>
            <Description>
              Here are some of the technologies I work with on a daily basis.
            </Description>
            <article>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mt-4">
                    <TechStack padding="p-3" size="text-3xl">
                      <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary-light dark:border-primary-dark inline-block w-fit">
                        Core{' '}
                        <span className="text-primary-light dark:text-primary-dark">
                          Technologies
                        </span>
                      </h3>
                    </TechStack>
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <ToolsStack padding="p-3" size="text-3xl">
                      <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary-light dark:border-primary-dark inline-block w-fit">
                        Development{' '}
                        <span className="text-primary-light dark:text-primary-dark">
                          Tools
                        </span>
                      </h3>
                    </ToolsStack>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <Button
                  variant="tertiary"
                  href="/projects"
                  ariaLabel="Discover Projects"
                  className="group inline-flex items-center justify-center gap-2 px-2 py-3 text-lg"
                >
                  Discover Projects
                  <FiArrowRight
                    size={24}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Button>
              </div>
            </article>
          </Section>

          <Section id="education">
            <Title>
              Education &{' '}
              <span className="text-primary-light dark:text-primary-dark">
                Certifications
              </span>
            </Title>
            <Description>
              My education journey, courses, and professional certifications.
            </Description>
            <div className="space-y-12">
              <article className="space-y-4">
                <TimeLine list={education} title="Education Journey" />
              </article>

              <article className="space-y-4">
                <TimeLine list={courses} title="Courses & Training" />
              </article>

              <article className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Professional Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <Certificate key={index} {...cert} />
                  ))}
                </div>
              </article>
            </div>
          </Section>

          <Section id="hobbies" className="mb-16">
            <Title>
              My{' '}
              <span className="text-primary-light dark:text-primary-dark">
                Hobbies
              </span>
            </Title>
            <Description>
              When I&apos;m not coding, I enjoy spending time on these activities
            </Description>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <HobbyCard
                emoji="🎮"
                title="Gaming & Entertainment"
                emojiColor="bg-indigo-400"
                className="hover:border-indigo-400 dark:hover:border-indigo-600"
              >
                Competitive gaming, exploring story-driven adventures, and
                binge-watching movies/TV series
              </HobbyCard>

              <HobbyCard
                emoji="👥"
                title="Social Connections"
                emojiColor="bg-red-400"
                className="hover:border-red-400 dark:hover:border-red-600"
              >
                Hanging out with friends, family bonding, and staying updated
                through social media
              </HobbyCard>

              <HobbyCard
                emoji="📚"
                title="Continuous Learning"
                emojiColor="bg-purple-400"
                className="hover:border-purple-400 dark:hover:border-purple-600"
              >
                Reading books, educational YouTube content, and exploring new
                technologies
              </HobbyCard>

              <HobbyCard
                emoji="🎵"
                title="Music & Podcasts"
                emojiColor="bg-yellow-400"
                className="hover:border-yellow-400 dark:hover:border-yellow-600"
              >
                Curating playlists, discovering new artists, and podcast
                listening
              </HobbyCard>

              <HobbyCard
                emoji="🌳"
                title="Outdoor Activities"
                emojiColor="bg-green-400"
                className="hover:border-green-400 dark:hover:border-green-600"
              >
                Casual walks, coffee shop visits, and exploring local hangout
                spots
              </HobbyCard>

              <HobbyCard
                emoji="🌐"
                title="Digital Exploration"
                emojiColor="bg-blue-500"
                className="hover:border-blue-400 dark:hover:border-blue-600"
              >
                Tech news browsing, social media trends, and online community
                engagement
              </HobbyCard>
            </div>
          </Section>
        </Container>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
