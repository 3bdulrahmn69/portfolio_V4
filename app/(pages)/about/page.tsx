import type { Metadata } from 'next';
import Container from '@/app/ui/container';
import { Description, Section, Title } from '@/app/ui/section';
import { certifications, education, courses } from '@/app/data/data';
import Certificate from '@/app/ui/about/certificate';
import Button from '@/app/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import TimeLine from '@/app/ui/about/time-line';
import HobbyCard from '@/app/ui/about/hobby-card';
import Image from 'next/image';
import TechCard from '@/app/ui/about/tech-card';
import ToolCard from '@/app/ui/about/tool-card';

import { techStack, toolsStack } from '@/app/data/tech-tool';
import BgImage from '@/app/ui/bg-image';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Abdulrahman Moussa, a frontend developer specializing in React.js and JavaScript. Explore skills, education, certifications, and professional experience.',
  keywords: [
    'About Abdulrahman Moussa',
    'Abdulrahman Moussa bio',
    'who is Abdulrahman Moussa',
    'Abdulrahman Moussa about',
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
        url: 'https://raw.githubusercontent.com/3bdulrahmn69/portfolio_V4/refs/heads/main/public/og-about.jpg',
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
    images: [
      'https://raw.githubusercontent.com/3bdulrahmn69/portfolio_V4/refs/heads/main/public/og-about.jpg',
    ],
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
      <main>
        <Container>
          <Section id="bio">
            <Title>
              About{' '}
              <span className="text-primary-light dark:text-primary-dark">
                Me
              </span>
            </Title>
            <Description>Let&apos;s get to know each other! 👋</Description>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              {/* Profile Column */}
              <div className="space-y-6 lg:col-span-1 animate-FadeIn">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary-light dark:bg-primary-dark rounded-2xl transform rotate-3 transition-transform duration-300 group-hover:rotate-1"></div>
                  <Image
                    width={300}
                    height={300}
                    quality={100}
                    priority
                    src="/my.png"
                    alt="Abdulrahman Moussa"
                    className="relative rounded-2xl border-4 border-secondary-background-light dark:border-secondary-background-dark w-full h-auto z-[2]"
                  />
                  <BgImage></BgImage>
                </div>

                <div className="space-y-2 p-4 bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl">
                  <div className="flex items-center gap-2">
                    📍
                    <span className="font-medium">Cairo, Egypt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    🎓
                    <span className="font-medium">
                      Bachelor of Management Information Systems
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    💼
                    <span className="font-medium">Open for Opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    📄
                    <span className="font-medium">
                      <a
                        href="https://flowcv.com/resume/emcfrihgf1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        View Resume
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-4 animate-FadeInRev">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span className="text-primary-light dark:text-primary-dark">
                      ✦
                    </span>
                    Crafting Digital Experiences
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I&apos;m Abdulrahman Moussa, a frontend developer focused on
                    building immersive, user-first web interfaces. My skills
                    were shaped through ALX, self-learning, and formal training
                    at ITI in Front-End Cross Platform Development, where I
                    worked on real-world projects using modern frameworks and
                    best practices. I specialize in creating responsive,
                    intuitive digital experiences that balance performance with
                    visual appeal. Passionate about continuous growth, I&apos;m
                    always exploring new tools to craft seamless and impactful
                    user experiences.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-xl animate-slideUp">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      🛠️ Core Skills
                    </h4>
                    <ul className="space-y-1">
                      <li>• React & Next.js Architecture</li>
                      <li>• Performance Optimization</li>
                      <li>• Responsive UI Design</li>
                      <li>• Cross-Browser Development</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-900 rounded-xl animate-slideDown">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      🎯 Current Focus
                    </h4>
                    <ul className="space-y-1">
                      <li>• Advanced React Patterns</li>
                      <li>• TypeScript Mastery</li>
                      <li>• UI/UX Principles</li>
                      <li>• Accessibility Standards</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 animate-FadeInRev">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span className="text-primary-light dark:text-primary-dark">
                      ✦
                    </span>
                    Engineering Philosophy
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I approach development with three core principles:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-xl">
                      <div className="text-2xl mb-2">💡</div>
                      <h4 className="font-semibold">Clarity First</h4>
                      <p className="text-sm mt-1">
                        Readable, maintainable code structure
                      </p>
                    </div>
                    <div className="text-center p-4 rounded-xl">
                      <div className="text-2xl mb-2">🎨</div>
                      <h4 className="font-semibold">Pixel Precision</h4>
                      <p className="text-sm mt-1">
                        UI consistency across devices
                      </p>
                    </div>
                    <div className="text-center p-4 rounded-xl">
                      <div className="text-2xl mb-2">⚡</div>
                      <h4 className="font-semibold">Performance</h4>
                      <p className="text-sm mt-1">
                        Optimized loading & interactions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-900 rounded-xl animate-FadeInRev">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    🚀 Career Goals
                  </h4>
                  <div className="text-gray-600 dark:text-gray-300">
                    <p>Seeking frontend roles where I can contribute to:</p>
                    <ul>
                      <li>• Scalable web applications</li>
                      <li>• Innovative SaaS products</li>
                      <li>• Open source projects</li>
                    </ul>
                  </div>
                  <Button
                    href="/#contact"
                    ariaLabel="Contact Me"
                    className="mt-4"
                  >
                    Let&apos;s Collaborate
                  </Button>
                </div>
              </div>
            </div>
          </Section>

          <Section id="skills" className="animate-slideUp">
            <Title>
              Technical{' '}
              <span className="text-primary-light dark:text-primary-dark">
                Skills
              </span>
            </Title>
            <Description>
              Technologies I wield with confidence and tools that power my
              workflow
            </Description>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="skill-group">
                <h3 className="section-subtitle">
                  Core{' '}
                  <span className="text-primary-light dark:text-primary-dark">
                    Stack
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {techStack.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                      <TechCard key={index} name={tech.name} icon={<Icon />} />
                    );
                  })}
                </div>
              </div>

              <div className="skill-group">
                <h3 className="section-subtitle">
                  Development{' '}
                  <span className="text-primary-light dark:text-primary-dark">
                    Tools
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {toolsStack.map((tool, index) => {
                    const Icon = tool.icon;

                    return (
                      <ToolCard key={index} name={tool.name} icon={<Icon />} />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                variant="tertiary"
                href="/projects"
                ariaLabel="Explore My Work"
                className="group inline-flex items-center gap-3 px-6 py-3 text-lg transition-all hover:gap-4"
              >
                Explore My Projects
                <FiArrowRight className="transition-all group-hover:translate-x-1" />
              </Button>
            </div>
          </Section>

          <Section id="education" className="animate-slideUp">
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

          <Section id="hobbies" className="animate-FadeIn">
            <Title>
              My{' '}
              <span className="text-primary-light dark:text-primary-dark">
                Hobbies
              </span>
            </Title>
            <Description>
              When I&apos;m not coding, I enjoy spending time on these
              activities
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
