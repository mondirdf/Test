import Card from '../components/ui/Card';
import Container from '../components/layout/Container';

const projects = [
  {
    title: 'Solea Rebrand',
    description: 'Complete identity refresh with logo family, palette, and packaging templates.'
  },
  {
    title: 'Modo Campaign',
    description: 'Cross-platform visuals for product launch ads, stories, and outdoor assets.'
  },
  {
    title: 'Aster Editorial',
    description: 'Magazine-style layout system and typography direction for a digital publication.'
  }
];

export default function Features() {
  return (
    <section id="work" className="features">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Built with strategy, crafted with detail.</h2>
        </div>
        <div className="bento-grid features-grid">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              title={project.title}
              eyebrow={`Case ${String(index + 1).padStart(2, '0')}`}
              className="project-tile"
            >
              <p>{project.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
