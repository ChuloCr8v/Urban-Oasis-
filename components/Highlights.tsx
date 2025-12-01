import React from 'react';
import { HIGHLIGHTS } from '../constants';
import Marquee from 'react-fast-marquee';

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="relative z-10 py-8 bg-brand-bg dark:bg-brand-bg-dark border-b border-brand-gold/10">
      <div className="w-full overflow-hidden">
        <Marquee gradient={false} speed={40} pauseOnHover>
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 px-8 py-3 mx-3 bg-white/50 dark:bg-white/5 rounded-full border border-brand-gold/20 backdrop-blur-sm group hover:border-brand-gold/50 transition-colors"
              >
                <div className="text-brand-gold group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-brand-dark dark:text-gray-200 tracking-wide text-sm whitespace-nowrap">
                  {item.title}
                </span>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default Highlights;