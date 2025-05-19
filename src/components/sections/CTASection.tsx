
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-service-pattern bg-cover bg-center bg-fixed">
      <div className="container mx-auto text-center max-w-3xl animate-fade-in opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Experience Premium Barber Services Today
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Book your appointment now and enjoy exceptional grooming services at Fama Barber Shop and Beauty Salon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-barber-gold text-black hover:bg-barber-gold/90">
            Book Appointment
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Call Us Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
