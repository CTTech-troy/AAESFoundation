import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ImpactStats } from './components/ImpactStats';
import { ScholarshipProgram } from './components/ScholarshipProgram';
import { WinnersMarquee } from './components/WinnersMarquee';
import { Beneficiaries } from './components/Beneficiaries';
import { Gallery } from './components/Gallery';
import { NewsEvents } from './components/NewsEvents';
import { Testimonials } from './components/Testimonials';
import { FounderSpotlight } from './components/FounderSpotlight';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-porcelain text-ink font-sans">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ImpactStats />
        <ScholarshipProgram />
        <WinnersMarquee />
        <Beneficiaries />
        <Gallery />
        <NewsEvents />
        <Testimonials />
        <FounderSpotlight />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>);

}
