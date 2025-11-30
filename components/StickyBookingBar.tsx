import React from 'react';
import { Phone } from 'lucide-react';

interface StickyBookingBarProps {
  price: number;
  whatsapp: string;
}

const StickyBookingBar: React.FC<StickyBookingBarProps> = ({ price, whatsapp }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4 z-50 animate-fade-in-up">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-lg text-brand-text dark:text-brand-text-dark">${price} <span className="font-normal text-sm text-gray-600 dark:text-gray-400">/ night</span></p>
          <p className="text-xs text-brand-primary dark:text-brand-primary-dark-mode font-semibold">Check availability now</p>
        </div>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-brand-primary text-white font-bold px-5 py-2.5 rounded-lg shadow-md hover:bg-brand-primary-dark transition-colors duration-300"
        >
          <Phone className="w-4 h-4" />
          Book
        </a>
      </div>
    </div>
  );
};

export default StickyBookingBar;