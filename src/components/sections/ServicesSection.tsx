
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  delay: number;
}

const ServiceCard = ({ title, price, description, imageUrl, delay }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg animate-fade-in opacity-0 bg-white" style={{ animationDelay: `${delay}ms` }}>
      <div className="h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{title}</CardTitle>
          <span className="text-barber-gold font-semibold text-lg">{price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-barber-gold text-barber-dark hover:bg-barber-gold hover:text-white">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Haircut",
      price: "$25",
      description: "Professional haircut including consultation, shampoo, and styling.",
      imageUrl: "https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?q=80&w=1740&auto=format&fit=crop"
    },
    {
      title: "Beard Trim",
      price: "$15",
      description: "Precision beard trimming and shaping with hot towel treatment.",
      imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1740&auto=format&fit=crop"
    },
    {
      title: "Hot Shave",
      price: "$30",
      description: "Traditional straight razor shave with hot towels and premium products.",
      imageUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1740&auto=format&fit=crop"
    },
    {
      title: "Hair Coloring",
      price: "$45+",
      description: "Professional hair coloring services including highlights, lowlights, and full color.",
      imageUrl: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=1752&auto=format&fit=crop"
    },
    {
      title: "Hair Treatment",
      price: "$35+",
      description: "Rejuvenating hair treatments to restore shine, strength and health.",
      imageUrl: "https://images.unsplash.com/photo-1580618864194-0fa0a8a3d4ef?q=80&w=1740&auto=format&fit=crop"
    },
    {
      title: "Kids Haircut",
      price: "$18",
      description: "Special haircuts for children in a friendly and fun atmosphere.",
      imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1740&auto=format&fit=crop"
    },
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 pb-4 gold-underline">Our Premium Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Experience the finest grooming services at Fama Barber Shop. Our skilled professionals deliver precision cuts and exceptional service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              price={service.price} 
              description={service.description} 
              imageUrl={service.imageUrl}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-barber-gold text-black hover:bg-barber-gold/90">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
