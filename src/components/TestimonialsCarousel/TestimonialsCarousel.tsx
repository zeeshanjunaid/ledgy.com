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
      >
        <div className="container">
          <div className="fullHeightTestimonial-wrapper">
            <div className="fullheighttestimonial-title">
              {' '}
              <h2 style={{ color: secondaryColor }}>{title}</h2>
            </div>
            <div className="fullheighttestimonial-slider">
              <div className="fullheighttestimonial-slider-wrapper">
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
