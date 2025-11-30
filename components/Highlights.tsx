
import React from 'react';
import { HIGHLIGHTS } from '../constants';
import type { Highlight } from '../types';
import { motion } from 'framer-motion';

const HighlightItem: React.FC<{ item: Highlight; index: number }> = ({ item, index }) => {
  const Icon = item.icon;
  return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="flex flex-col items-center text-center gap-3"
    >
      <div className="p-3 rounded-full bg-brand-secondary dark:bg-gray-800 text-brand-dark dark:text-brand-gold transition-transform duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <span className="font-semibold text-sm text-brand-dark dark:text-gray-200">{item.title}</span>
    </motion.div>
  );
};

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="relative z-40 -mt-24 px-4 scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 md:p-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {HIGHLIGHTS.map((item, index) => (
            <HighlightItem key={index} item={item} index={index} />
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Highlights;
