
import React, { useRef } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Configurator from '@/components/Configurator';
import AdvantagesSection from '@/components/AdvantagesSection';
import BuildExamples from '@/components/BuildExamples';
import GuaranteesSection from '@/components/GuaranteesSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Header height offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark">
      <Navigation onScrollTo={scrollToSection} />
      <HeroSection onScrollTo={scrollToSection} />
      <Configurator />
      <AdvantagesSection />
      <BuildExamples onScrollTo={scrollToSection} />
      <GuaranteesSection />
      <FaqSection />
      <ContactSection />
      <Footer onScrollTo={scrollToSection} />
    </div>
  );
};

export default Index;
