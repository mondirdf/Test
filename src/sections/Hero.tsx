import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Container from '../components/layout/Container';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Container className="bento-grid hero-grid">
        <Card title="Brand identities that feel alive" eyebrow="Graphic Designer" className="tile-main">
          <p>
            I design visual systems, packaging, and digital assets that turn brand stories into clear,
            memorable experiences.
          </p>
          <div className="hero-actions">
            <Button label="View Projects" href="#work" />
            <Button label="Book a Call" href="#contact" variant="secondary" />
          </div>
        </Card>

        <Card title="8+ years" eyebrow="Experience" className="tile-stat">
          <p>Collaborating with startups, fashion labels, and product teams worldwide.</p>
        </Card>

        <Card title="Design focus" eyebrow="Specialties" className="tile-list">
          <ul>
            <li>Visual identity systems</li>
            <li>Editorial and social campaigns</li>
            <li>Packaging and art direction</li>
          </ul>
        </Card>
      </Container>
    </section>
  );
}
