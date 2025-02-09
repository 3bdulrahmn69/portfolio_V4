import Container from '../container';
import { Section, Title, Description } from '../section';
import ProjectCard from '../home/project-card';
import { projects, works } from '../../data/data';
import Button from '../button';
import { FiArrowRight } from 'react-icons/fi';

export default function Projects() {
  return (
    <Section id="projects" className="pt-20 animate-slideUp">
      <Title>Projects</Title>
      <Description>
        Explore a curated selection of my professional work and personal
        projects
      </Description>
      <Container className="max-w-6xl mx-auto px-4 mt-8">
        <div className="flex flex-col justify-center items-center md:items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <ProjectCard key={work.slug} {...work} />
          ))}
          {projects.slice(0, 5).map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="tertiary"
            href="/projects"
            ariaLabel="View More Projects"
            className="group inline-flex items-center justify-center gap-2 px-2 py-3 text-lg"
          >
            View More Projects
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
