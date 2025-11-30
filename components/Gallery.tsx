
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToNext = useCallback(() => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % GALLERY_IMAGES.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrevious();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isLightboxOpen, goToNext, goToPrevious]);

  return (
    <section id="gallery" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text dark:text-brand-text-dark mb-8 text-center">
            Explore The Space
        </h2>

        {/* Quilt layout for medium screens and up */}
        <div className="hidden md:block">
            <div className="relative grid grid-cols-4 grid-rows-2 gap-2 h-[550px]">
            {/* Main Image */}
            <div className="col-span-2 row-span-2 cursor-pointer group overflow-hidden rounded-l-2xl" onClick={() => openLightbox(0)}>
                <img src={GALLERY_IMAGES[0]} alt="Main property view" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"/>
            </div>

            {/* Other Images */}
            {GALLERY_IMAGES.slice(1, 5).map((src, index) => (
                <div key={index} className={`cursor-pointer group overflow-hidden ${index === 1 ? 'rounded-tr-2xl' : ''} ${index === 3 ? 'rounded-br-2xl' : ''}`} onClick={() => openLightbox(index + 1)}>
                    <img src={src} alt={`Property view ${index + 2}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"/>
                </div>
            ))}

            <button
                onClick={() => openLightbox(0)}
                className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 text-brand-text dark:text-brand-text-dark font-semibold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
                <ImageIcon className="w-5 h-5"/>
                Show all photos
            </button>
            </div>
        </div>

        {/* Simple grid for small screens */}
        <div className="md:hidden">
            <div className="grid grid-cols-2 gap-2">
            {GALLERY_IMAGES.slice(0, 4).map((src, index) => (
                <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md group cursor-pointer aspect-square"
                onClick={() => openLightbox(index)}
                >
                <img
                    src={src}
                    alt={`Property view ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                </div>
            ))}
            </div>
            <button
                onClick={() => openLightbox(0)}
                className="mt-4 w-full bg-white dark:bg-gray-800 text-brand-text dark:text-brand-text-dark font-semibold px-4 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
                <ImageIcon className="w-5 h-5"/>
                Show all photos
            </button>
        </div>
      </motion.div>

      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true">
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <img src={GALLERY_IMAGES[selectedImageIndex]} alt={`Property view ${selectedImageIndex + 1}`} className="w-full h-full object-contain" />
          </div>

          <button onClick={closeLightbox} className="absolute top-4 right-4 p-2 text-white bg-black/50 rounded-full hover:bg-black/75 transition-colors" aria-label="Close">
            <X className="w-8 h-8" />
          </button>

          <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white bg-black/50 rounded-full hover:bg-black/75 transition-colors" aria-label="Previous image">
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white bg-black/50 rounded-full hover:bg-black/75 transition-colors" aria-label="Next image">
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
            {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
