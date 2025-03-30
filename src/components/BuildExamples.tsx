
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { exampleBuilds } from '@/data/components';

interface BuildExamplesProps {
  onScrollTo: (sectionId: string) => void;
}

const BuildExamples: React.FC<BuildExamplesProps> = ({ onScrollTo }) => {
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'gaming': return 'Игровой';
      case 'office': return 'Офисный';
      case 'workstation': return 'Рабочая станция';
      default: return 'Другой';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'gaming': return 'bg-neon-blue';
      case 'office': return 'bg-neon-green';
      case 'workstation': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="builds" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-center">
          Примеры <span className="text-neon-blue">сборок</span>
        </h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Готовые конфигурации для различных задач, которые вы можете заказать или использовать как отправную точку
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exampleBuilds.map(build => (
            <Card key={build.id} className="bg-dark-lighter border-gray-800 overflow-hidden">
              <div className="h-48 bg-dark-light relative">
                {/* If we had actual images for builds, they'd go here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-blue to-neon-green/50 blur-md opacity-50"></div>
                  <span className="absolute font-orbitron text-xl text-white">
                    {build.category === 'gaming' ? 'RTX 4090' : 
                     build.category === 'office' ? 'Intel Core i5' :
                     'Ryzen 9'}
                  </span>
                </div>
                <Badge className={`absolute top-4 left-4 ${getCategoryColor(build.category)}`}>
                  {getCategoryLabel(build.category)}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="font-orbitron">{build.name}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-400 text-sm mb-4">
                  {build.description}
                </p>
                
                <h4 className="font-orbitron text-sm mb-2">Ключевые компоненты:</h4>
                <ul className="space-y-2 text-sm">
                  {Object.entries(build.components)
                    .filter(([_, component]) => component !== null)
                    .slice(0, 3)
                    .map(([type, component]) => component && (
                      <li key={type} className="flex justify-between">
                        <span className="text-gray-500">{type === 'cpu' ? 'Процессор' : 
                                               type === 'gpu' ? 'Видеокарта' : 
                                               'Материнская плата'}</span>
                        <span className="text-gray-300">{component.name}</span>
                      </li>
                    ))
                  }
                </ul>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center border-t border-gray-800 pt-4">
                <div className="font-orbitron text-neon-green">
                  {formatPrice(build.totalPrice)}
                </div>
                <div className="space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-neon-blue text-neon-blue hover:bg-neon-blue/10"
                    onClick={() => onScrollTo('configurator')}
                  >
                    Изменить
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-neon-blue hover:bg-neon-blue/80"
                  >
                    Заказать
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildExamples;
