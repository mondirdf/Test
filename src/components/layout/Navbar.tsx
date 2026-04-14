import Container from './Container';

const navItems = ['Work', 'About', 'Services', 'Contact'];

export default function Navbar() {
  return (
    <header className="nav-shell">
      <Container className="nav">
        <a href="#" className="brand" aria-label="Brand home">
          Noor Studio
        </a>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
