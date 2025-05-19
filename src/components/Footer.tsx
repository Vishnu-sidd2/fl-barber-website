
import React from 'react';
import { Calendar, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-barber-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Fama<span className="text-barber-gold">Barber</span></h3>
            <p className="text-gray-400 mb-4">
              Premium barber services in a classic and comfortable atmosphere. Experience the best haircuts and styling from our skilled professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-barber-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-barber-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-barber-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-barber-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-barber-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-barber-gold transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-barber-gold transition-colors">About Us</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-barber-gold transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-barber-gold transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-barber-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-barber-gold transition-colors">Haircut</a></li>
              <li><a href="#" className="text-gray-400 hover:text-barber-gold transition-colors">Beard Trim</a></li>
              <li><a href="#" className="text-gray-400 hover:text-barber-gold transition-colors">Hot Shave</a></li>
              <li><a href="#" className="text-gray-400 hover:text-barber-gold transition-colors">Hair Styling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-barber-gold transition-colors">Hair Coloring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-barber-gold transition-colors">Beauty Treatments</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-barber-gold mt-1" />
                <span className="text-gray-400">500 N Bell Ave #109, Denton, TX 76209, United States</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-barber-gold" />
                <a href="tel:+19406129127" className="text-gray-400 hover:text-barber-gold transition-colors">+1 940-612-9127</a>
              </li>
              <li className="flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-barber-gold" />
                <span className="text-gray-400">Open ⋅ Closes 7 pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {currentYear} Fama Barber Shop and Beauty Salon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
