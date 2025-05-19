
import React, { useState } from 'react';

const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565789589948-2fb92e1f69e9?q=80&w=1746&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1752&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580618864194-0fa0a8a3d4ef?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1774&auto=format&fit=crop",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 pb-4 gold-underline">Our Gallery</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Take a look at our barbershop atmosphere, finished haircuts, and the exceptional work of our skilled barbers.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer animate-fade-in opacity-0 h-56 md:h-64" 
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] animate-zoom-in">
              <button 
                className="absolute top-4 right-4 text-white bg-black/50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-black"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
              </button>
              <img 
                src={selectedImage} 
                alt="Gallery preview"
                className="max-h-[90vh] w-auto max-w-full rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
