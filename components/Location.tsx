import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { NEARBY_ATTRACTIONS } from '../constants';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const LocationCard: React.FC<{ attraction: any }> = ({ attraction }) => {
  const Icon = attraction.icon;
  return (
    <div className="flex items-center gap-4 p-4 mx-4 bg-white dark:bg-gray-800/80 backdrop-blur-md rounded-xl border border-gray-100 dark:border-white/10 shadow-sm min-w-[260px] group hover:border-brand-gold/50 transition-all cursor-default select-none">
      <div className="p-3 rounded-full bg-brand-bg dark:bg-white/5 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-darker transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-bold text-brand-dark dark:text-gray-100 text-sm">{attraction.name}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">{attraction.distance}</p>
      </div>
    </div>
  );
};

const Location: React.FC = () => {
  return (
    <section id="location" className="scroll-mt-24 py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold w-fit mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">The Neighborhood</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark dark:text-white mb-6 leading-tight">
              In the Heart of the City
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Situated in the city's most vibrant district, you're steps away from world-class culture, cuisine, and commerce.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
             <button className="bg-brand-dark dark:bg-white text-white dark:text-brand-dark py-3 px-6 rounded-full font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg">
                  <Navigation className="w-4 h-4" />
                  Get Directions
              </button>
              <button className="bg-brand-secondary dark:bg-white/10 text-brand-dark dark:text-white py-3 px-6 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors border border-transparent dark:border-white/10">
                  <ExternalLink className="w-4 h-4" />
                  Open Map
              </button>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 relative group"
          >
             <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }} 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=SoHo%2C%20New%20York&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Location Map"
                className="w-full h-full"
            ></iframe>
            <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
        </motion.div>

        {/* Marquee */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="pt-4"
        >
             <Marquee gradient={false} speed={40} pauseOnHover className="py-4">
                {NEARBY_ATTRACTIONS.map((attraction, index) => (
                    <LocationCard key={index} attraction={attraction} />
                ))}
            </Marquee>
        </motion.div>

      </div>
    </section>
  );
};

export default Location;
