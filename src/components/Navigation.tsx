
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onScrollTo: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onScrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (sectionId: string) => {
    onScrollTo(sectionId);
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'configurator', label: 'Конфигуратор' },
    { id: 'advantages', label: 'Преимущества' },
    { id: 'builds', label: 'Примеры' },
    { id: 'guarantees', label: 'Гарантии' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Контакты' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 
              onClick={() => handleNavClick('home')} 
              className="text-xl font-orbitron font-bold cursor-pointer neon-text-blue"
            >
              PC BUILDER
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-6">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-gray-300 hover:text-neon-blue transition-colors font-orbitron text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-dark-lighter"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-lighter border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-neon-blue hover:bg-dark-light rounded-md w-full text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
