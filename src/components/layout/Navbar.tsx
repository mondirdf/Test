import Container from './Container';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  return (
    <header className="nav-shell">
      <Container className="nav">
        <a href="#top" className="brand" aria-label="Brand home">
          Noor Studio
        </a>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
