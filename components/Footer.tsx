
import React from 'react';
import { Mail, Phone, Instagram, MapPin, ArrowRight } from 'lucide-react';
import { PROPERTY_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darker text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#" className="block">
              <span className="font-serif text-3xl font-bold tracking-tighter text-white">
                The Urban Oasis
                <span className="text-brand-gold">.</span>
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed text-sm">
              Experience the pinnacle of urban living. A sanctuary designed for the modern traveler seeking comfort, style, and convenience.
            </p>
            <div className="flex space-x-4">
               <a href={PROPERTY_DETAILS.instagramLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-brand-gold hover:text-brand-darker transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href={PROPERTY_DETAILS.emailLink} className="p-2 rounded-full bg-white/5 hover:bg-brand-gold hover:text-brand-darker transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Highlights', 'Gallery', 'Amenities', 'Reviews', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-gold transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-5">
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>123 Luxury Lane,<br/> {PROPERTY_DETAILS.city}, NY 10012</span>
                </div>
              </li>
              <li>
                <a href={PROPERTY_DETAILS.emailLink} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                  booking@urbanoasis.com
                </a>
              </li>
               <li>
                <a href={PROPERTY_DETAILS.whatsappLink} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive special offers and seasonal promotions.
            </p>
            <form className="flex flex-col gap-3 w-full max-w-[240px]">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
              />
              <button className="bg-white text-brand-darker font-bold py-3 rounded-lg text-sm hover:bg-brand-gold transition-colors flex items-center justify-center gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {PROPERTY_DETAILS.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
