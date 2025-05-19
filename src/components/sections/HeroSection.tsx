
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen bg-hero-pattern bg-cover bg-center bg-fixed flex items-center"
    >
      <div className="container mx-auto px-4 py-28 md:py-0 md:px-12">
        <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Premium Experience at <span className="text-barber-gold">Fama Barber Shop</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Where style meets tradition. Experience the art of grooming with our master barbers.
          </p>
          
          <div className="flex items-center mb-8">
            <div className="flex mr-2">
              {[1, 2, 3, 4].map((_, index) => (
                <Star key={index} fill="#d4af37" className="h-5 w-5 text-barber-gold" />
              ))}
              <Star fill="#d4af37" stroke="#d4af37" className="h-5 w-5 text-barber-gold" strokeDasharray="4" strokeDashoffset="2" />
            </div>
            <span className="text-white">4.6 stars (116+ reviews)</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-barber-gold text-black hover:bg-barber-gold/90">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Our Services
            </Button>
          </div>
          
          <div className="mt-8 text-white flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <p className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              Open ⋅ Closes 7 pm
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-barber-gold transition-colors">
              Get Directions
            </a>
            <a href="tel:+19406129127" className="hover:text-barber-gold transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
