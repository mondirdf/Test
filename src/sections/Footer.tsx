import Container from '../components/layout/Container';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <Container className="footer-inner">
        <h2>Let’s design something meaningful together.</h2>
        <a href="mailto:hello@noorstudio.com" className="mail-link">
          hello@noorstudio.com
        </a>
        <p>© {new Date().getFullYear()} Noor Studio. All rights reserved.</p>
      </Container>
    </footer>
  );
}
