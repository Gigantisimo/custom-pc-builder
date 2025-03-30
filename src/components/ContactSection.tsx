
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-dark tech-pattern">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-center">
          <span className="text-neon-blue">Свяжитесь</span> с нами
        </h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Остались вопросы или готовы заказать сборку? Заполните форму или воспользуйтесь любым удобным способом связи
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-dark-lighter border-gray-800 lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-orbitron">Форма обратной связи</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов" 
                      className="bg-dark border-gray-700 focus:border-neon-blue"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Телефон
                    </label>
                    <Input 
                      id="phone" 
                      placeholder="+7 (999) 123-45-67" 
                      className="bg-dark border-gray-700 focus:border-neon-blue"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="example@mail.ru" 
                    className="bg-dark border-gray-700 focus:border-neon-blue"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите, что вас интересует..." 
                    className="bg-dark border-gray-700 focus:border-neon-blue min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-neon-blue hover:bg-neon-blue/80 w-full sm:w-auto"
                >
                  Отправить запрос
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <Card className="bg-dark-lighter border-gray-800">
            <CardHeader>
              <CardTitle className="font-orbitron">Контактная информация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-neon-blue mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Телефон</h4>
                  <a href="tel:+79991234567" className="text-gray-400 hover:text-neon-blue transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-neon-blue mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:info@pcbuilder.ru" className="text-gray-400 hover:text-neon-blue transition-colors">
                    info@pcbuilder.ru
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-neon-blue mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Адрес сборочного центра</h4>
                  <p className="text-gray-400">
                    г. Москва, ул. Технологическая, 42, офис 301
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-800">
                <h4 className="font-medium mb-3">Мы в соцсетях</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-blue/20 transition-colors">
                    <span className="font-orbitron text-neon-blue">VK</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-blue/20 transition-colors">
                    <span className="font-orbitron text-neon-blue">TG</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-blue/20 transition-colors">
                    <span className="font-orbitron text-neon-blue">YT</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
