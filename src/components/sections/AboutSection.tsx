
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="text-barber-gold font-medium mb-2 block">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 pb-4 gold-underline-left">
              Experience the Art of Grooming
            </h2>
            <p className="text-gray-600 mb-6">
              Established with a passion for excellence, Fama Barber Shop and Beauty Salon has been serving the Denton community with premium grooming services. Our team of skilled professionals combines traditional techniques with modern styles to deliver exceptional results.
            </p>
            <p className="text-gray-600 mb-6">
              At Fama, we believe that every client deserves personalized attention and care. Whether you're looking for a classic haircut, a trendy style, or a relaxing grooming experience, our barbers are dedicated to exceeding your expectations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-barber-gold/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold"><path d="M3 6v18h18V6"></path><path d="M3 6V3h18v3"></path><path d="M3 10h18"></path><path d="M10 6v14"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Expert Barbers</h3>
                  <p className="text-gray-600 text-sm">Highly trained professionals with years of experience</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-barber-gold/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Premium Products</h3>
                  <p className="text-gray-600 text-sm">Only the finest grooming products for our clients</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-barber-gold/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Clean Environment</h3>
                  <p className="text-gray-600 text-sm">Hygienic and sanitized tools for each client</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-barber-gold/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-barber-gold"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Customer Satisfaction</h3>
                  <p className="text-gray-600 text-sm">Your satisfaction is our top priority</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-barber-gold text-black hover:bg-barber-gold/90 mt-2">
              Learn More About Us
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1774&auto=format&fit=crop"
                alt="Barber shop interior"
                className="w-full h-60 object-cover rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1752&auto=format&fit=crop"
                alt="Haircut in progress"
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1740&auto=format&fit=crop"
                alt="Barber tools"
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?q=80&w=1740&auto=format&fit=crop"
                alt="Styling hair"
                className="w-full h-60 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
