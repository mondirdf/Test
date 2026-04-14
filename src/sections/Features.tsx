import Card from '../components/ui/Card';
import Container from '../components/layout/Container';

const projects = [
  {
    title: 'Solea Rebrand',
    description: 'Complete identity refresh with logo family, palette, and packaging templates.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Branded packaging laid out on a soft colored background'
  },
  {
    title: 'Modo Campaign',
    description: 'Cross-platform visuals for product launch ads, stories, and outdoor assets.',
    image:
      'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bold campaign poster mockups on a gallery wall'
  },
  {
    title: 'Aster Editorial',
    description: 'Magazine-style layout system and typography direction for a digital publication.',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Editorial spread with typography and photography elements'
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
              <div className="media-wrap project-media">
                <img src={project.image} alt={project.alt} loading="lazy" />
              </div>
              <p>{project.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
