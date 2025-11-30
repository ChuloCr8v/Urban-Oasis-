
import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';
import type { Review } from '../types';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 w-80 md:w-96 mx-2 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mr-3 shrink-0">
          {review.initials}
        </div>
        <div>
          <p className="font-bold text-sm text-brand-text dark:text-brand-text-dark">{review.name}</p>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < review.rating ? 'text-brand-accent' : 'text-gray-300 dark:text-gray-600'
                }`}
                fill="currentColor"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 italic text-sm line-clamp-4">"{review.text}"</p>
    </div>
  );
};

const Reviews: React.FC = () => {
  const firstRow = REVIEWS.slice(0, Math.ceil(REVIEWS.length / 2));
  const secondRow = REVIEWS.slice(Math.ceil(REVIEWS.length / 2));

  return (
    <section id="reviews" className="overflow-hidden scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text dark:text-brand-text-dark mb-12 text-center">
          Guest Experiences
        </h2>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-brand-bg dark:from-brand-bg-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-brand-bg dark:from-brand-bg-dark to-transparent z-10 pointer-events-none"></div>
          
          <Marquee gradient={false} speed={40} pauseOnHover={true} className="mb-2 py-2">
            {firstRow.map((review, index) => (
              <ReviewCard key={`row1-${index}`} review={review} />
            ))}
          </Marquee>

          <Marquee gradient={false} speed={40} direction="right" pauseOnHover={true} className="py-2">
            {secondRow.map((review, index) => (
              <ReviewCard key={`row2-${index}`} review={review} />
            ))}
          </Marquee>
        </div>
      </motion.div>
    </section>
  );
};

export default Reviews;
