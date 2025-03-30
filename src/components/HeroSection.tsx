
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onScrollTo: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollTo }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 tech-pattern">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-black/60 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
            <span className="block">Собери свой идеальный ПК —</span>
            <span className="text-neon-blue animate-glow">под твои задачи и бюджет</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Игровые, рабочие, дизайнерские сборки с гарантией совместимости
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-neon-blue hover:bg-neon-blue/80 text-white px-6 py-6 font-orbitron text-lg"
              onClick={() => onScrollTo('configurator')}
            >
              Начать сборку 
              <ArrowRight className="ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-6 py-6 font-orbitron text-lg"
              onClick={() => onScrollTo('builds')}
            >
              Посмотреть примеры
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
