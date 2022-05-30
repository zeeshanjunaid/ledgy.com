import { motion } from 'framer-motion';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { onSwipe } from './lib';
import { Image } from '../utils';

export const TestimonialsCarouselSection = ({
  testimonials,
  activeIndex,
  setActiveIndex,
}: {
  testimonials: TestimonialCarouselSectionProps[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const activeTestimonial = testimonials[activeIndex];
  const testimonialsLength = testimonials.length;

  const {
    primaryColor,
    secondaryColor,
    logo,
    quote,
    customerName,
    customerRole,
    outcomeNumber,
    outcomeText,
    link: { url, text: linkText },
  } = activeTestimonial;

  const onDragEnd = (offsetX: number, velocityX: number) =>
    onSwipe({ offsetX, velocityX, activeIndex, testimonialsLength, setActiveIndex });

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, easeing: 'anticipate' }}
      className="fullheighttestimonial__item"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, { offset, velocity }) => onDragEnd(offset.x, velocity.x)}
    >
      <div
        className="fullheighttestimonial__item-left"
        style={{
          backgroundColor: `${primaryColor}`,
        }}
      >
        <div className="fullheighttestimonial__item-testimonial">
          <div className="fullheighttestimonial__item-testimonial--logo">
            {' '}
            <Image image={logo} alt={logo.title} className="flex-1" />
          </div>
          <div className="fullheighttestimonial__item-testimonial--text">
            <p>{`"${quote}"`}</p>
          </div>
        </div>
        <div className="fullheighttestimonial__item-client">
          <div className="fullheighttestimonial__item-client--name">{customerName}</div>
          <div className="fullheighttestimonial__item-client--designation">{customerRole}</div>
        </div>
      </div>
      <div className="fullheighttestimonial__item-right">
        <div className="fullheighttestimonial__item-value">
          <div
            className="fullheighttestimonial__item-value--number"
            style={{
              color: `${secondaryColor}`,
            }}
          >
            {outcomeNumber}
          </div>
          <div
            className="fullheighttestimonial__item-value--text"
            style={{
              color: `${primaryColor}`,
            }}
          >
            {outcomeText}
          </div>
        </div>
        <div className="fullheighttestimonial__item-link">
          <div className="item-link--wrapper">
            <Link to={url}>
              {linkText}{' '}
              <span>
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
