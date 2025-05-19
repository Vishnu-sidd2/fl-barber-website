
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-barber-dark bg-opacity-95 shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl md:text-3xl font-bold text-white font-playfair">
              Fama
              <span className="text-barber-gold ml-1">Barber</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-barber-gold transition-colors">Home</a>
            <a href="#services" className="text-white hover:text-barber-gold transition-colors">Services</a>
            <a href="#about" className="text-white hover:text-barber-gold transition-colors">About</a>
            <a href="#gallery" className="text-white hover:text-barber-gold transition-colors">Gallery</a>
            <a href="#testimonials" className="text-white hover:text-barber-gold transition-colors">Reviews</a>
            <a href="#contact" className="text-white hover:text-barber-gold transition-colors">Contact</a>
            <Button className="bg-barber-gold text-black hover:bg-barber-gold/90">Book Now</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-6 space-y-4 flex flex-col items-center animate-fade-in">
            <a 
              href="#home" 
              className="text-white hover:text-barber-gold transition-colors w-full text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="text-white hover:text-barber-gold transition-colors w-full text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-barber-gold transition-colors w-full text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#gallery" 
              className="text-white hover:text-barber-gold transition-colors w-full text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#testimonials" 
              className="text-white hover:text-barber-gold transition-colors w-full text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-barber-gold transition-colors w-full text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="bg-barber-gold text-black hover:bg-barber-gold/90 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
