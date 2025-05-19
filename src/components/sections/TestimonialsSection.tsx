
import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
  delay: number;
}

const TestimonialCard = ({ name, rating, comment, date, delay }: TestimonialCardProps) => {
  return (
    <Card className="animate-fade-in opacity-0 shadow-md h-full border-0" style={{ animationDelay: `${delay}ms` }}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center justify-between">
          <span>{name}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </CardTitle>
        <div className="flex items-center mt-1">
          {Array(5).fill(0).map((_, index) => (
            <Star 
              key={index} 
              className="h-4 w-4 text-barber-gold" 
              fill={index < rating ? "#d4af37" : "transparent"}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 italic">"{comment}"</p>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "John D.",
      rating: 5,
      comment: "Best barber in town! I've been coming here for years and have never been disappointed. The atmosphere is great and the haircuts are always perfect.",
      date: "2 months ago"
    },
    {
      name: "Michael S.",
      rating: 5,
      comment: "Excellent service and attention to detail. The hot towel shave was an amazing experience. Highly recommended!",
      date: "1 month ago"
    },
    {
      name: "Robert J.",
      rating: 4,
      comment: "Great haircut and friendly staff. The place has a nice vibe and they really take their time to give you the perfect cut.",
      date: "3 weeks ago"
    },
    {
      name: "David K.",
      rating: 5,
      comment: "First time here and definitely not my last. The barber understood exactly what I wanted and delivered perfectly.",
      date: "1 week ago"
    },
    {
      name: "Thomas R.",
      rating: 4,
      comment: "Professional service in a comfortable environment. The beard trim was excellent.",
      date: "2 days ago"
    },
    {
      name: "Daniel B.",
      rating: 5,
      comment: "This place is a gem! Great attention to detail and amazing results every time. Worth every penny.",
      date: "5 days ago"
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 pb-4 gold-underline">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4].map((_, index) => (
                <Star key={index} fill="#d4af37" className="h-6 w-6 text-barber-gold" />
              ))}
              <Star fill="#d4af37" stroke="#d4af37" className="h-6 w-6 text-barber-gold" strokeDasharray="4" strokeDashoffset="2" />
            </div>
            <span className="ml-2 text-lg">4.6 stars (116+ reviews)</span>
          </div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience at Fama Barber Shop.
          </p>
        </div>

        <div className="relative">
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 lg:-left-5 hidden md:block"
            onClick={() => scroll('left')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m15 18-6-6 6-6"></path></svg>
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 pb-6 scroll-smooth scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="min-w-[280px] md:min-w-[350px] snap-start"
              >
                <TestimonialCard
                  name={testimonial.name}
                  rating={testimonial.rating}
                  comment={testimonial.comment}
                  date={testimonial.date}
                  delay={index * 100}
                />
              </div>
            ))}
          </div>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 lg:-right-5 hidden md:block"
            onClick={() => scroll('right')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m9 18 6-6-6-6"></path></svg>
          </button>
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-barber-gold hover:text-barber-gold/80 transition-colors"
          >
            <span>View All Reviews on Google</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 w-4 h-4"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
