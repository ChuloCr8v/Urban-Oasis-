
import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const FaqItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-brand-gold' : 'text-brand-dark dark:text-gray-200 group-hover:text-brand-gold'}`}>
            {question}
        </span>
        <span className={`ml-4 p-2 rounded-full transition-colors ${isOpen ? 'bg-brand-gold text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'}`}>
            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-brand-secondary/30 dark:bg-gray-900/30 scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark dark:text-white mb-4">
                    Common Questions
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Everything you need to know about your stay.
                </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 md:p-12">
                {FAQS.map((faq, index) => (
                    <FaqItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </div>
        </div>
    </section>
  );
};

export default FAQ;
