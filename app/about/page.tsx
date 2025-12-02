import type { Metadata } from 'next';
import Container from '@/components/layout/container';
import { Description, Section, Title } from '@/components/ui/section';
import { certifications, education, courses } from '@/data/data';
import Certificate from '@/components/about/certificate';
import Button from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import TimeLine from '@/components/about/time-line';
import HobbyCard from '@/components/about/hobby-card';
import Image from 'next/image';
import TechCard from '@/components/about/tech-card';
import ToolCard from '@/components/about/tool-card';

import { techStack, toolsStack } from '@/data/tech-tool';
import BgImage from '@/components/ui/bg-image';

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
    sameAs: [
      'https://www.linkedin.com/in/3bdulrahmn69',
      'https://github.com/3bdulrahmn69',
      'https://medium.com/@3bdulrahmn69',
      'https://twitter.com/3bdulrahmn69',
    ],
  };

  return (
    <>
      <main>
        <Container>
          <Section id="bio">
            <Title>
              About <span className="text-primary">Me</span>
            </Title>
            <Description>Let&apos;s get to know each other! 👋</Description>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              {/* Profile Column */}
              <div className="space-y-6 lg:col-span-1 animate-FadeIn">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary rounded-2xl transform rotate-3 transition-transform duration-300 group-hover:rotate-1"></div>
                  <Image
                    width={300}
                    height={300}
                    priority
                    src="/my.webp"
                    alt="Abdulrahman Moussa"
                    className="relative rounded-2xl border-4 border-border w-full h-auto z-2"
                  />
                  <BgImage />
                </div>

                <div className="space-y-2 p-4 bg-secondary rounded-xl">
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
                        href="https://drive.google.com/file/d/1EmonRfmPGvfNVJn0EWkLmyKEdmkLDCWn/view?usp=sharing"
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
                    <span className="text-primary">✦</span>
                    Crafting Digital Experiences
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m Abdulrahman Moussa, a frontend developer who loves
                    creating responsive and user-friendly web interfaces. I
                    started my journey through self-learning, building small
                    projects and diving into HTML, CSS, and JavaScript on my
                    own. That foundation led me to join the ALX Software
                    Engineering program, where I improved my problem-solving
                    skills and learned how to build real-world applications
                    through consistent, independent learning. After that, I
                    joined the Intensive Training Program (ITP) at the
                    Information Technology Institute (ITI), specializing in
                    frontend and cross-platform development. There, I worked on
                    practical projects using modern tools like React and APIs.
                    Learning has always been at the heart of what I do — before
                    ALX and ITI, during them, and still every day. I&apos;m
                    always exploring better ways to build fast, accessible, and
                    modern web experiences.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-xl animate-slideUp">
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

                  <div className="p-4 bg-secondary rounded-xl animate-slideDown">
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
                    <span className="text-primary">✦</span>
                    Engineering Philosophy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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

                <div className="p-4 bg-secondary rounded-xl animate-FadeInRev">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    🚀 Career Goals
                  </h4>
                  <div className="text-muted-foreground">
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
              Technical <span className="text-primary">Skills</span>
            </Title>
            <Description>
              Technologies I wield with confidence and tools that power my
              workflow
            </Description>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="skill-group">
                <h3 className="section-subtitle">
                  Core <span className="text-primary">Stack</span>
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
                  Development <span className="text-primary">Tools</span>
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
              Education & <span className="text-primary">Certifications</span>
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
              My <span className="text-primary">Hobbies</span>
            </Title>
            <Description>
              When I&apos;m not coding, I enjoy spending time on these
              activities
            </Description>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <HobbyCard
                emoji="🎮"
                title="Gaming & Entertainment"
                emojiColor="bg-primary"
                className="hover:border-primary"
              >
                Competitive gaming, exploring story-driven adventures, and
                binge-watching movies/TV series
              </HobbyCard>

              <HobbyCard
                emoji="👥"
                title="Social Connections"
                emojiColor="bg-destructive"
                className="hover:border-destructive"
              >
                Hanging out with friends, family bonding, and staying updated
                through social media
              </HobbyCard>

              <HobbyCard
                emoji="📚"
                title="Continuous Learning"
                emojiColor="bg-accent"
                className="hover:border-accent"
              >
                Reading books, educational YouTube content, and exploring new
                technologies
              </HobbyCard>

              <HobbyCard
                emoji="🎵"
                title="Music & Podcasts"
                emojiColor="bg-warning"
                className="hover:border-warning"
              >
                Curating playlists, discovering new artists, and podcast
                listening
              </HobbyCard>

              <HobbyCard
                emoji="🌳"
                title="Outdoor Activities"
                emojiColor="bg-success"
                className="hover:border-success"
              >
                Casual walks, coffee shop visits, and exploring local hangout
                spots
              </HobbyCard>

              <HobbyCard
                emoji="🌐"
                title="Digital Exploration"
                emojiColor="bg-info"
                className="hover:border-info"
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
    </>
  );
}
