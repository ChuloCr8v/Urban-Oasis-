import React from 'react';
import { Mail, Phone, Instagram, MessageCircleQuestion, ArrowRight } from 'lucide-react';
import { PROPERTY_DETAILS } from '../constants';
import { motion } from 'framer-motion';

const BookingCTA: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="booking-cta" 
      className="relative overflow-hidden rounded-[2.5rem] bg-brand-darker border border-white/10"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 p-10 md:p-16">
        
        <div className="text-center lg:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/20 mb-6">
            <MessageCircleQuestion className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Help & Support</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our concierge team is available to assist with any special requests or inquiries you may have before booking your stay.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
           <a
            href={PROPERTY_DETAILS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-brand-gold hover:bg-white text-brand-darker font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(196,164,84,0.3)] hover:shadow-white/20"
          >
            <Phone className="w-5 h-5" />
            WhatsApp Us
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
          </a>
          
          <div className="flex gap-4">
            <a
              href={PROPERTY_DETAILS.emailLink}
              className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 backdrop-blur-md"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={PROPERTY_DETAILS.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 backdrop-blur-md"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default BookingCTA;