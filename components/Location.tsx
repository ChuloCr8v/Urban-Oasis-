
import React from 'react';
import { MapPin } from 'lucide-react';
import { NEARBY_ATTRACTIONS } from '../constants';
import { motion } from 'framer-motion';

const Location: React.FC = () => {
  return (
    <section id="location" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text dark:text-brand-text-dark mb-8 text-center">
            Prime Location
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
            {/* Map Integration */}
            <div className="h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-inner bg-gray-200 dark:bg-gray-700">
            <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Central%20Park,%20New%20York&t=&z=14&ie=UTF8&iwloc=&output=embed"
                title="Location Map"
            ></iframe>
            </div>
            
            {/* Nearby Attractions */}
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 text-brand-text dark:text-brand-text-dark flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-brand-gold" />
                    What's Nearby?
                </h3>
                <div className="space-y-4">
                    {NEARBY_ATTRACTIONS.map((attraction, index) => {
                        const Icon = attraction.icon;
                        return (
                            <div key={index} className="flex items-center gap-4 py-2">
                            <div className="bg-brand-secondary dark:bg-brand-primary/20 p-3 rounded-lg text-brand-primary dark:text-brand-primary-dark-mode">
                                <Icon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-brand-dark dark:text-white">{attraction.name}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{attraction.distance}</p>
                            </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        * Exact location details will be provided immediately after booking confirmation.
                    </p>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Location;
