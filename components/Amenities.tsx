
import React, { useState, useEffect } from 'react';
import { AMENITIES } from '../constants';
import type { Amenity } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

const AmenityItem: React.FC<{ item: Amenity }> = ({ item }) => {
    const Icon = item.icon;
    // Safety check to ensure Icon is a valid component before rendering
    if (!Icon) return null;
    
    return (
        <div className="flex items-start gap-4 py-3 border-b border-gray-100 dark:border-white/10 last:border-0">
            <div className="mt-1 p-2 rounded-lg bg-brand-secondary dark:bg-brand-dark text-brand-dark dark:text-brand-gold shrink-0">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h4 className="text-brand-dark dark:text-white font-semibold text-base leading-tight mb-1">{item.name}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
        </div>
    );
};

const Amenities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when opening a new category
  useEffect(() => {
    if (selectedCategory !== null) {
      setCurrentImageIndex(0);
    }
  }, [selectedCategory]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCategory === null) return;
    const images = AMENITIES[selectedCategory].images;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCategory === null) return;
    const images = AMENITIES[selectedCategory].images;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="amenities" className="scroll-mt-32 relative py-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark dark:text-white mb-4">
            Curated Comforts
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Every detail has been thoughtfully selected. Click on a category to explore the features.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AMENITIES.map((category, idx) => (
            <motion.div 
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCategory(idx)}
                className="group cursor-pointer relative overflow-hidden rounded-[2rem] h-96 shadow-lg dark:shadow-black/50 hover:shadow-glow-gold-light dark:hover:shadow-glow-gold-dark transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-brand-gold/30"
            >
                {/* Background Image */}
                <img 
                    src={category.images[0]} 
                    alt={category.category} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-300"></div>
                
                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-serif text-3xl font-bold mb-3 flex items-center gap-3">
                            {category.category}
                        </h3>
                        <p className="text-sm text-gray-200 line-clamp-2 opacity-90 mb-4">
                            {category.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            Explore <ChevronRight className="w-4 h-4" />
                        </span>
                    </div>
                </div>
            </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCategory !== null && (
          <motion.div 
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div 
                key="modal-content"
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-brand-bg dark:bg-brand-darker w-full max-w-5xl rounded-3xl shadow-2xl shadow-brand-gold/10 dark:shadow-black/50 overflow-hidden flex flex-col md:flex-row max-h-[90vh] border border-white/10"
            >
                {/* Image Carousel Section */}
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-brand-secondary dark:bg-brand-dark">
                    <AnimatePresence mode='wait'>
                        <motion.img 
                            key={currentImageIndex}
                            src={AMENITIES[selectedCategory].images[currentImageIndex]} 
                            alt={`${AMENITIES[selectedCategory].category} view ${currentImageIndex + 1}`}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 w-full h-full object-cover" 
                        />
                    </AnimatePresence>
                    
                    {/* Carousel Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                    {/* Navigation Controls */}
                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button 
                            onClick={prevImage}
                            className="p-2 rounded-full bg-black/30 text-white backdrop-blur-md hover:bg-black/50 transition-colors border border-white/10"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={nextImage}
                            className="p-2 rounded-full bg-black/30 text-white backdrop-blur-md hover:bg-black/50 transition-colors border border-white/10"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {AMENITIES[selectedCategory].images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(idx);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    currentImageIndex === idx ? 'bg-brand-gold w-4' : 'bg-white/50 hover:bg-white'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Details Section */}
                <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto bg-brand-bg dark:bg-brand-darker relative">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                             <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mb-3">
                                {AMENITIES[selectedCategory].category}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 italic border-l-2 border-brand-gold pl-4 text-lg">
                                {AMENITIES[selectedCategory].description}
                            </p>
                        </div>
                        <button 
                            onClick={() => setSelectedCategory(null)}
                            className="p-2 bg-brand-secondary dark:bg-brand-dark rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            <X className="w-6 h-6 text-brand-dark dark:text-white" />
                        </button>
                    </div>

                    <div className="space-y-2">
                        {AMENITIES[selectedCategory].items.map((item) => (
                            <AmenityItem key={item.name} item={item} />
                        ))}
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Amenities;
