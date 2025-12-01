
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
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-brand-darker">
      
      {/* Carousel Background */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMAGES[currentImage]}
            alt="Apartment Interior"
            className="w-full h-full object-cover"
          />
          {/* Refined Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-brand-darker/80"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-0 z-20 hidden md:flex justify-between items-center px-4 pointer-events-none">
          <button onClick={prevImage} className="pointer-events-auto p-3 rounded-full bg-white/5 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md transition-all hover:scale-110">
              <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={nextImage} className="pointer-events-auto p-3 rounded-full bg-white/5 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md transition-all hover:scale-110">
              <ChevronRight className="w-8 h-8" />
          </button>
      </div>

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto pt-20 pb-32">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-6 mb-8 text-white/90"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
            <Star className="w-4 h-4 text-brand-gold" fill="currentColor" />
            <span className="font-semibold tracking-wide text-sm">{PROPERTY_DETAILS.rating} Exceptional</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
            <MapPin className="w-4 h-4 text-brand-gold" />
            <span className="font-semibold tracking-wide text-sm">{PROPERTY_DETAILS.city}</span>
          </div>
        </motion.div>
        
        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[1.1] mb-10 tracking-tight drop-shadow-xl"
        >
          {PROPERTY_DETAILS.name}
        </motion.h1>

        {/* Action Button - Centered */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center"
        >
            <a
            href="#booking-form"
            className="whitespace-nowrap bg-brand-gold hover:bg-white hover:text-brand-dark text-brand-darker font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(196,164,84,0.3)]"
            >
            Check Availability
            </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 hidden lg:flex left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/50 z-30 animate-pulse-slow"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-light">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold/80 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
