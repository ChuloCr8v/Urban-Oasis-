
import React from 'react';
import { Mail, Phone, Instagram, MessageCircleQuestion } from 'lucide-react';
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
      className="text-center py-12 px-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-brand-text dark:text-brand-text-dark flex items-center justify-center gap-3">
        <MessageCircleQuestion className="w-8 h-8 text-brand-primary" />
        Still Have Questions?
      </h2>
      <p className="mt-3 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
        Not ready to book yet? Reach out to us directly for any inquiries or special requests.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href={PROPERTY_DETAILS.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transform hover:-translate-y-0.5 transition-all duration-300"
        >
          <Phone className="w-5 h-5" />
          WhatsApp Us
        </a>
        <a
          href={PROPERTY_DETAILS.emailLink}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-brand-text dark:text-brand-text-dark font-bold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transform hover:-translate-y-0.5 transition-all duration-300"
        >
          <Mail className="w-5 h-5" />
          Email Us
        </a>
         <a
          href={PROPERTY_DETAILS.instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-pink-500 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transform hover:-translate-y-0.5 transition-all duration-300"
        >
          <Instagram className="w-5 h-5" />
          Instagram
        </a>
      </div>
    </motion.section>
  );
};

export default BookingCTA;
