
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { guarantees } from '@/data/components';

const GuaranteesSection: React.FC = () => {
  return (
    <section id="guarantees" className="section-padding bg-dark-light">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-center">
          Гарантии и <span className="text-neon-blue">условия</span>
        </h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Мы заботимся о каждом клиенте и предоставляем надежные гарантии на все наши услуги
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {guarantees.map(guarantee => (
            <Card 
              key={guarantee.id} 
              className="bg-dark border-gray-800 flex items-center"
            >
              <CardContent className="flex items-center p-6">
                <div className="mr-4 bg-neon-blue/20 rounded-full p-1">
                  <Check className="h-6 w-6 text-neon-blue" />
                </div>
                <p className="font-medium">{guarantee.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-br from-dark-lighter to-dark border border-gray-800 rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-neon-blue/20 flex items-center justify-center">
                <span className="text-neon-blue font-orbitron text-4xl">2+</span>
              </div>
            </div>
            <div>
              <h3 className="font-orbitron text-2xl mb-2">Опыт работы более 2 лет</h3>
              <p className="text-gray-400">
                За время работы мы собрали более 500 компьютеров для клиентов по всей России.
                Наши специалисты регулярно повышают квалификацию и следят за новинками рынка,
                чтобы предлагать вам только лучшие и современные решения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
