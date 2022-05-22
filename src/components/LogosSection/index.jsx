/* eslint-disable prettier/prettier */

import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { testimonialsData } from "./data";

export const LogosSection = () => {
  const { title, testimonials } = testimonialsData;
  const x = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(
    testimonials[activeIndex]
  );

  const [colors, setColors] = useState({
    primary: null,
    secondary: null,
  });

  const handleActiveTestimonial = (t) => {
    setActiveTestimonial(t);
    setActiveIndex(t.id);
    setColors({
      primary: t.colors.primary,
      secondary: t.colors.secondary,
    });
  };
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={activeTestimonial ? activeTestimonial.id : "empty"}
        className="fullHeightTestimonial"
        transition={{ duration: 0.35, easeing: "anticipate" }}
        animate={{ backgroundColor: colors.primary, opacity: 1 }}
        initial={{ backgroundColor: colors.primary, opacity: 1 }}
        exit={{ backgroundColor: colors.primary }}
      >
        <div className="container">
          <div className="fullHeightTestimonial__wrapper">
            <div className="fullheighttestimonial__title">{title}</div>
            <div className="fullheighttestimonial__slider">
              <div className="fullheighttestimonial__slider-wrapper">
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, easeing: "anticipate" }}
                  className="fullheighttestimonial__item"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      setActiveTestimonial(testimonials[activeIndex + 1]);
                      setColors({
                        primary: testimonials[activeIndex + 1].colors.primary,
                        secondary:
                          testimonials[activeIndex + 1].colors.secondary,
                      });
                      setActiveIndex(activeIndex + 1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      if (activeIndex !== 0) {
                        setActiveIndex(activeIndex - 1);
                        setActiveTestimonial(testimonials[activeIndex - 1]);
                        setColors({
                          primary: testimonials[activeIndex - 1].colors.primary,
                          secondary:
                            testimonials[activeIndex - 1].colors.secondary,
                        });
                      } else {
                        setActiveIndex(testimonials.length - 1);
                        setActiveTestimonial(
                          testimonials[testimonials.length - 1]
                        );
                        setColors({
                          primary:
                            testimonials[testimonials.length - 1].colors
                              .primary,
                          secondary:
                            testimonials[testimonials.length - 1].colors
                              .secondary,
                        });
                      }
                    }
                  }}
                >
                  <div
                    className="fullheighttestimonial__item-left"
                    style={{
                      backgroundColor: `${activeTestimonial.colors.secondary}`,
                    }}
                  >
                    <div className="fullheighttestimonial__item-testimonial">
                      <div className="fullheighttestimonial__item-testimonial--logo">
                        {activeTestimonial.logo}
                      </div>
                      <div className="fullheighttestimonial__item-testimonial--text">
                        {`"${activeTestimonial.text}"`}
                      </div>
                    </div>
                    <div className="fullheighttestimonial__item-client">
                      <div className="fullheighttestimonial__item-client--name">
                        {activeTestimonial.client.name}
                      </div>
                      <div className="fullheighttestimonial__item-client--designation">
                        {activeTestimonial.client.designation}
                      </div>
                    </div>
                  </div>
                  <div className="fullheighttestimonial__item-right">
                    <div className="fullheighttestimonial__item-value">
                      <div
                        className="fullheighttestimonial__item-value--number"
                        style={{
                          color: `${activeTestimonial.colors.primary}`,
                        }}
                      >
                        {activeTestimonial.value.number}
                      </div>
                      <div
                        className="fullheighttestimonial__item-value--text"
                        style={{
                          color: `${activeTestimonial.colors.secondary}`,
                        }}
                      >
                        {activeTestimonial.value.text}
                      </div>
                    </div>
                    <div className="fullheighttestimonial__item-link">
                      <div className="item-link--wrapper">
                        <Link href={activeTestimonial.link.src}>
                          {activeTestimonial.link.text}{" "}
                          <span>
                            <FontAwesomeIcon icon={faChevronRight} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="fullheighttestimonial__logos">
                <div className="fullheighttestimonial__logos-wrapper">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      onClick={() => handleActiveTestimonial(testimonial)}
                      className={`fullheighttestimonial__logos-item `}
                      animate={{
                        opacity: testimonial === activeTestimonial ? "1" : ".4",
                      }}
                      initial={{ opacity: 0.4 }}
                      transition={{ duration: 0.35, easeing: "anticipate" }}
                    >
                      <span>{testimonial.logo}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
