import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { Image } from '../utils';
import { scroller } from 'react-scroll';

export const LogosBar = ({
  testimonials,
  setActiveIndex,
  activeIndex,
}: {
  testimonials: TestimonialCarouselSectionProps[];
  setActiveIndex: (index: number) => void;
  activeIndex: number;
}) => {
  useEffect(() => {
    scroller.scrollTo('scrollTo', {
      duration: 500,
      delay: 0,
      smooth: true,
      horizontal: true,
      containerId: 'scrollableLogoContainer',
      offset: 0,
      isDynamic: true,
    });
  }, [activeIndex]);

  return (
    <div className="fullheighttestimonial-logos">
      <div className="fullheighttestimonial-logos-wrapper" id="scrollableLogoContainer">
        {testimonials.map(({ logo }, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`fullheighttestimonial-logos-item ${
              index === activeIndex - 1 ? 'scrollTo' : ''
            }`}
            animate={{
              opacity: index === activeIndex ? '1' : '0.4',
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
