
import React, { useState } from 'react';
import { AMENITIES } from '../constants';
import type { Amenity } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

const AmenityItem: React.FC<{ item: Amenity }> = ({ item }) => {
    const Icon = item.icon;
    return (
        <div className="flex items-start gap-4 py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
            <div className="mt-1 p-2 rounded-lg bg-brand-bg dark:bg-gray-800 text-brand-dark dark:text-brand-gold shrink-0">
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

  return (
    <section id="amenities" className="scroll-mt-32 relative">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AMENITIES.map((category, idx) => (
            <motion.div 
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCategory(idx)}
                className="group cursor-pointer relative overflow-hidden rounded-3xl h-80 shadow-md hover:shadow-2xl transition-all duration-300"
            >
                {/* Background Image */}
                <img 
                    src={category.image} 
                    alt={category.category} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300"></div>
                
                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="font-serif text-2xl font-bold mb-2 flex items-center justify-between">
                        {category.category}
                        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                             <ChevronRight className="w-5 h-5 text-white" />
                        </div>
                    </h3>
                    <p className="text-sm text-gray-200 line-clamp-2 opacity-90 group-hover:opacity-100">
                        {category.description}
                    </p>
                </div>
            </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCategory !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
                {/* Image Section */}
                <div className="md:w-1/2 relative h-64 md:h-auto">
                    <img 
                        src={AMENITIES[selectedCategory].image} 
                        alt={AMENITIES[selectedCategory].category}
                        className="w-full h-full object-cover" 
                    />
                     <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Details Section */}
                <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                             <h3 className="font-serif text-3xl font-bold text-brand-dark dark:text-white mb-2">
                                {AMENITIES[selectedCategory].category}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 italic border-l-2 border-brand-gold pl-3">
                                {AMENITIES[selectedCategory].description}
                            </p>
                        </div>
                        <button 
                            onClick={() => setSelectedCategory(null)}
                            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
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
