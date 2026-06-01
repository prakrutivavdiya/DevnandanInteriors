import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import WalkthroughsSection from '../components/WalkthroughsSection';
import AboutSection from '../components/AboutSection';
import StatsBar from '../components/StatsBar';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <WalkthroughsSection />
      <AboutSection />
      <StatsBar />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
