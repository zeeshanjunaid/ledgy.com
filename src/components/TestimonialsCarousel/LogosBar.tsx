import { motion } from 'framer-motion';
import React from 'react';
import { Image } from '../utils';

export const LogosBar = ({
  testimonials,
  setActiveIndex,
  activeIndex,
}: {
  testimonials: TestimonialCarouselSectionProps[];
  setActiveIndex: (index: number) => void;
  activeIndex: number;
}) => {
  return (
    <div className="fullheighttestimonial-logos">
      <div className="fullheighttestimonial-logos-wrapper">
        {testimonials.map(({ logo }, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`fullheighttestimonial-logos-item `}
            animate={{
              opacity: index === activeIndex ? '1' : '.4',
            }}
            initial={{ opacity: 0.4 }}
            transition={{ duration: 0.35, easeing: 'anticipate' }}
          >
            <Image image={logo} alt={logo.title} className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
