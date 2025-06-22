
import React, { useState } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Droplets className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">AquaGuard Community</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('methodology')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Methodology
            </button>
            <button onClick={() => scrollToSection('survey')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Survey
            </button>
            <button onClick={() => scrollToSection('impact')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Impact
            </button>
            <Button onClick={() => scrollToSection('volunteer')} className="bg-blue-600 hover:bg-blue-700">
              Get Involved
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">
              About
            </button>
            <button onClick={() => scrollToSection('methodology')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">
              Methodology
            </button>
            <button onClick={() => scrollToSection('survey')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">
              Survey
            </button>
            <button onClick={() => scrollToSection('impact')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">
              Impact
            </button>
            <Button onClick={() => scrollToSection('volunteer')} className="w-full mt-2 bg-blue-600 hover:bg-blue-700">
              Get Involved
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
