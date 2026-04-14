import Navbar from '../components/layout/Navbar';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}
