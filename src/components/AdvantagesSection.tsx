
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, ShieldCheck, Zap, Headphones } from 'lucide-react';
import { advantages } from '@/data/components';

const iconMap: Record<string, React.ReactNode> = {
  'award': <Award className="w-12 h-12 text-neon-blue" />,
  'shield-check': <ShieldCheck className="w-12 h-12 text-neon-blue" />,
  'zap': <Zap className="w-12 h-12 text-neon-blue" />,
  'headphones': <Headphones className="w-12 h-12 text-neon-blue" />,
};

const AdvantagesSection: React.FC = () => {
  return (
    <section id="advantages" className="section-padding bg-dark tech-pattern">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-center">
          Наши <span className="text-neon-blue">преимущества</span>
        </h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Почему тысячи клиентов доверяют нам сборку своих компьютеров
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map(advantage => (
            <Card 
              key={advantage.id} 
              className="bg-dark-lighter border-gray-800 hover:border-neon-blue transition-colors group"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {iconMap[advantage.icon]}
                </div>
                <h3 className="font-orbitron text-xl mb-2 group-hover:text-neon-blue transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
