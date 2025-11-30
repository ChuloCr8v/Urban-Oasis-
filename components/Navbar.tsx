
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Highlights', href: '#highlights' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-brand-darker/90 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className={`font-serif text-2xl font-bold tracking-tighter ${
                isScrolled ? 'text-brand-dark dark:text-white' : 'text-white'
              }`}>
                The Urban Oasis
                <span className="text-brand-gold">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide hover:text-brand-gold transition-colors ${
                    isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              <div className={`h-6 w-[1px] ${isScrolled ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white/20'}`}></div>
              
              <ThemeToggle className={isScrolled ? '' : 'text-white hover:bg-white/10'} />

              <a
                href="#booking-form"
                className={`ml-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 ${
                  isScrolled 
                    ? 'bg-brand-dark text-white hover:bg-gray-800 dark:bg-brand-gold dark:text-brand-dark' 
                    : 'bg-white text-brand-dark hover:bg-brand-gold hover:text-white'
                }`}
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
               <ThemeToggle className={isScrolled ? '' : 'text-white hover:bg-white/10'} />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg ${
                  isScrolled ? 'text-brand-dark dark:text-white' : 'text-white'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-0 z-40 bg-white dark:bg-brand-darker pt-24 px-6 md:hidden overflow-hidden flex flex-col items-center gap-8"
          >
             {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif font-medium text-brand-dark dark:text-white hover:text-brand-gold"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking-form"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center gap-2 bg-brand-gold text-brand-darker px-8 py-3 rounded-full text-lg font-bold"
              >
                <Phone className="w-5 h-5" />
                Book Your Stay
              </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
