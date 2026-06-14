import Header from './ui/header';
import { Hero } from './ui/hero';
import { Features } from './ui/features';
import { Experience } from './ui/experience';
import { Journey } from './ui/journey';
import { CallToAction } from './ui/cta';
import { Footer } from './ui/footer';

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Experience />
        <Journey />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
