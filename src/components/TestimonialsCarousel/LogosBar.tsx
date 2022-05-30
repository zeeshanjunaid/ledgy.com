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
    <div className="fullheighttestimonial__logos">
      <div className="fullheighttestimonial__logos-wrapper">
        {testimonials.map(({ logo }, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`fullheighttestimonial__logos-item `}
            animate={{
              opacity: index === activeIndex ? '1' : '.4',
            }}
            initial={{ opacity: 0.4 }}
            transition={{ duration: 0.35, easeing: 'anticipate' }}
          >
            {/* <span>{testimonial.logo}</span> */}
            <Image image={logo} alt={logo.title} className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
