
import React, { useState, useEffect } from 'react';
import { Star, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
import { PROPERTY_DETAILS, HERO_IMAGES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden bg-brand-darker">
      
      {/* Carousel Background */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMAGES[currentImage]}
            alt="Apartment Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-darker/90"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-0 z-20 hidden md:flex justify-between items-center px-4 pointer-events-none">
          <button onClick={prevImage} className="pointer-events-auto p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all">
              <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={nextImage} className="pointer-events-auto p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all">
              <ChevronRight className="w-8 h-8" />
          </button>
      </div>

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-6 mb-8 text-white/90"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            <Star className="w-4 h-4 text-brand-gold" fill="currentColor" />
            <span className="font-semibold tracking-wide text-sm">{PROPERTY_DETAILS.rating} Exceptional</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            <MapPin className="w-4 h-4 text-brand-gold" />
            <span className="font-semibold tracking-wide text-sm">{PROPERTY_DETAILS.city}</span>
          </div>
        </motion.div>
        
        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6"
        >
          {PROPERTY_DETAILS.name}
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-2 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 font-light leading-relaxed"
        >
          {PROPERTY_DETAILS.description}
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
        >
            <a
            href={PROPERTY_DETAILS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold hover:bg-white hover:text-brand-dark text-brand-darker font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
            Check Availability
            </a>
            <a
            href="#gallery"
            className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
            View Gallery
            </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-32 hidden lg:flex left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/50 z-30"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Hero;