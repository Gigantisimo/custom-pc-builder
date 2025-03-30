
import React from 'react';
import { Separator } from '@/components/ui/separator';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'configurator', label: 'Конфигуратор' },
    { id: 'advantages', label: 'Преимущества' },
    { id: 'builds', label: 'Примеры' },
    { id: 'guarantees', label: 'Гарантии' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Контакты' }
  ];

  const handleNavClick = (sectionId: string) => {
    onScrollTo(sectionId);
  };

  return (
    <footer className="bg-dark-light pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-orbitron text-2xl font-bold mb-4 text-neon-blue">PC BUILDER</div>
            <p className="text-gray-400 mb-4">
              Сборка игровых и рабочих компьютеров под любые задачи.
              Индивидуальный подход к каждому клиенту.
            </p>
          </div>
          
          <div>
            <h3 className="font-orbitron text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.id}>
                  <button 
                    onClick={() => handleNavClick(item.id)} 
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-orbitron text-lg mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>г. Москва, ул. Технологическая, 42</li>
              <li>
                <a href="tel:+79991234567" className="hover:text-neon-blue transition-colors">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@pcbuilder.ru" className="hover:text-neon-blue transition-colors">
                  info@pcbuilder.ru
                </a>
              </li>
            </ul>
            
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                VK
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                Telegram
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-800 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 PC Builder. Все права защищены.
          </p>
          
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-neon-blue transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-neon-blue transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
