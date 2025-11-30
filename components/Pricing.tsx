
import React from 'react';
import { PROPERTY_DETAILS } from '../constants';
import { motion } from 'framer-motion';

const PricingCard: React.FC<{
  title: string;
  price?: number;
  description: string;
  isFeatured?: boolean;
}> = ({ title, price, description, isFeatured = false }) => (
  <div
    className={`p-6 rounded-2xl border ${
      isFeatured
        ? 'bg-brand-primary text-white border-brand-primary-dark shadow-2xl'
        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
    }`}
  >
    <h3
      className={`text-lg font-semibold ${
        isFeatured ? 'text-white' : 'text-brand-primary dark:text-brand-primary-dark-mode'
      }`}
    >
      {title}
    </h3>
    {price && (
        <p className={`text-4xl font-extrabold mt-2 ${isFeatured ? 'text-white' : 'text-brand-text dark:text-brand-text-dark'}`}>
        ${price}<span className={`text-base font-medium ${isFeatured ? 'text-gray-200' : 'text-gray-500 dark:text-gray-400'}`}>/night</span>
        </p>
    )}
    <p
      className={`mt-2 text-sm ${
        isFeatured ? 'text-gray-200' : 'text-gray-600 dark:text-gray-400'
      }`}
    >
      {description}
    </p>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text dark:text-brand-text-dark mb-8 text-center">
            Rates & Availability
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard
            title="Nightly Rate"
            price={PROPERTY_DETAILS.nightlyPrice}
            description="Perfect for short trips and weekend getaways."
            isFeatured
            />
            <PricingCard
            title="Weekly Discount"
            description={`Stay 7+ nights and save ${PROPERTY_DETAILS.weeklyDiscount}%.`}
            />
            <PricingCard
            title="Monthly Discount"
            description={`Enjoy a ${PROPERTY_DETAILS.monthlyDiscount}% discount for stays over 28 nights.`}
            />
        </div>
        <p className="mt-8 text-center text-gray-700 dark:text-gray-400">
            Please <a href={PROPERTY_DETAILS.whatsappLink} className="text-brand-primary dark:text-brand-primary-dark-mode font-semibold hover:underline">contact us</a> to confirm availability for your desired dates.
        </p>
      </motion.div>
    </section>
  );
};

export default Pricing;
