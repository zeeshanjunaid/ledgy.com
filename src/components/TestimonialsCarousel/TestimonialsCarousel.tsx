import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import { LogosBar } from './LogosBar';
import { TestimonialsCarouselSection } from './TestimonialsCarouselSection';

export const TestimonialsCarousel = (testimonialsCarousel: TestimonialCarouselProps) => {
  const { title, testimonials } = testimonialsCarousel;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];
  const { id, secondaryColor } = activeTestimonial;

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={id}
        className="fullHeightTestimonial"
        transition={{ duration: 0.35, easeing: 'anticipate' }}
        animate={{ backgroundColor: secondaryColor, opacity: 1 }}
        initial={{ backgroundColor: secondaryColor, opacity: 1 }}
        exit={{ backgroundColor: secondaryColor }}
      >
        <div className="container">
          <div className="fullHeightTestimonial__wrapper">
            <div className="fullheighttestimonial__title">
              {' '}
              <h2>{title}</h2>
            </div>
            <div className="fullheighttestimonial__slider">
              <div className="fullheighttestimonial__slider-wrapper">
                <TestimonialsCarouselSection
                  testimonials={testimonials}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              </div>
              <LogosBar
                testimonials={testimonials}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
