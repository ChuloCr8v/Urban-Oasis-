
import React, { useState } from 'react';
import { Calendar, Users, ArrowRight, MessageCircle } from 'lucide-react';
import { PROPERTY_DETAILS } from '../constants';
import { motion } from 'framer-motion';

const BookingForm: React.FC = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'd like to inquire about a booking at ${PROPERTY_DETAILS.name}.
    
Name: ${name}
Check-in: ${checkIn}
Check-out: ${checkOut}
Guests: ${guests}`;
    const whatsappUrl = `${PROPERTY_DETAILS.whatsappLink}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking-form" className="max-w-5xl mx-auto scroll-mt-32">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row"
      >
        {/* Visual/Info Side */}
        <div className="md:w-2/5 bg-gradient-to-br from-brand-primary to-brand-primary-dark p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-3">Reserve Your Stay</h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Experience luxury in the heart of {PROPERTY_DETAILS.city}. Best rates guaranteed when booking directly.
            </p>
          </div>
          
          <div className="relative z-10 mt-12">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-extrabold tracking-tight">${PROPERTY_DETAILS.nightlyPrice}</span>
              <span className="text-lg opacity-80">/night</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-blue-100 text-sm">
                <MessageCircle className="w-4 h-4" />
                <span>Instant confirmation via WhatsApp</span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-white/10 blur-2xl"></div>
        </div>

        {/* Form Side */}
        <div className="md:w-3/5 p-8 md:p-12 bg-white dark:bg-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-brand-text dark:text-brand-text-dark focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Ex. Alex Johnson"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="checkin" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Check-in
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="checkin"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-brand-text dark:text-brand-text-dark focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="checkout" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Check-out
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="checkout"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-brand-text dark:text-brand-text-dark focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                   <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="relative">
              <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Guests
              </label>
              <div className="relative">
                <select
                  id="guests"
                  className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-brand-text dark:text-brand-text-dark focus:ring-2 focus:ring-brand-primary outline-none transition-all appearance-none cursor-pointer"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} Guest{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                   <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transform transition-all duration-300 flex items-center justify-center gap-3 mt-4"
            >
              Request Booking
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
               You won't be charged yet. We'll check availability and get back to you immediately.
            </p>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default BookingForm;
