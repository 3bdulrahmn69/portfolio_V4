import type { Metadata } from 'next';
import Container from '@/app/ui/container';
import Header from '@/app/ui/header';
import ProjectCard from '@/app/ui/home/project-card';
import { Description, Section, Title } from '@/app/ui/section';
import { projects, works } from '@/app/data/data';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects page',
};

export default function ProjectsPage() {
  return (
    <div>
      <div className="mt-8">
        <Header />
      </div>
      <main className="pt-8">
        <Section id="works" className="mb-8">
          <Title>Works</Title>
          <Description>
            Here are some of the works I have done. Click on the cards to view
            more details.
          </Description>
          <Container>
            <div className="flex flex-col justify-center items-center md:items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((work) => (
                <ProjectCard key={work.slug} {...work} />
              ))}
            </div>
          </Container>
        </Section>
        <Section id="projects" className="mb-8">
          <Title>Projects</Title>
          <Description>
            Here are some of the projects I have done. Click on the cards to
            view more details.
          </Description>
          <Container>
            <div className="flex flex-col justify-center items-center md:items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </Container>
        </Section>
      </main>
    </div>
  );
}
