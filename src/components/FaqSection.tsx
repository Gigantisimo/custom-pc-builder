
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from '@/data/components';

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-center">
          Часто задаваемые <span className="text-neon-blue">вопросы</span>
        </h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Ответы на самые популярные вопросы о нашем сервисе сборки ПК
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-800 rounded-lg overflow-hidden bg-dark-lighter"
              >
                <AccordionTrigger className="px-6 py-4 font-orbitron hover:text-neon-blue transition-colors hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
