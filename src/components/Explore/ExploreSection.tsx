<<<<<<< HEAD
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "../utils";
import { Link } from "gatsby";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { scroller } from "react-scroll";

export const ExploreSection = ({ explore }: { explore: ExploreProps }) => {
  const { textRight, title, sections } = explore;
  const [activeData, setActiveData] = useState(sections[0]);

  useEffect(() => {
    scroller.scrollTo("activeTab", {
=======
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from '../utils';
import { Link } from 'gatsby';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { scroller } from 'react-scroll';

export const ExploreSection = ({ explore }: { explore: ExploreProps }) => {
  const { textRight, title, sections } = explore;
  const [activeindex, setActiveIndex] = useState(0);
  const activeData = sections[activeindex];

  const { id, title: sectionTitle, text, link, image } = activeData;

  useEffect(() => {
    scroller.scrollTo('activeTab', {
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
      duration: 500,
      delay: 0,
      smooth: true,
      horizontal: true,
<<<<<<< HEAD
      containerId: "scrollableContainer",
=======
      containerId: 'scrollableContainer',
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
      offset: 0,
      isDynamic: true,
    });
  }, [activeData]);

<<<<<<< HEAD
  const handleActiveData = (column: ExploreSectionProps) => {
    setActiveData(column);
  };
=======
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
  return (
    <div className="twocolumnsrow__wrapper">
      <AnimatePresence exitBeforeEnter>
        <motion.div
<<<<<<< HEAD
          key={activeData ? activeData.id : "empty"}
=======
          key={id}
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
          className="twocolumnsrow__data twocolumnsrow__data--hide-on-bd"
          animate={{ opacity: 1, y: 20 }}
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0.25, easeing: "anticipate" }}
        >
          <div
            className={`textcolumn ${textRight ? "textcolumn__right" : null}`}
          >
            <p className="textcolumn__subtitle">{title}</p>

            <h2 className="textcolumn__title">{activeData.title}</h2>
            <p className="textcolumn__text">{activeData.text}</p>
            <div className="textcolumn__link">
              <Link to={activeData.link.url}>
                {activeData.link.text}
=======
          transition={{ duration: 0.25, easeing: 'anticipate' }}
        >
          <div className={`textcolumn ${textRight ? 'textcolumn__right' : null}`}>
            <p className="textcolumn__subtitle">{title}</p>

            <h2 className="textcolumn__title">{sectionTitle}</h2>
            <p className="textcolumn__text">{text}</p>
            <div className="textcolumn__link">
              <Link to={link.url}>
                {link.text}
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
                <span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
<<<<<<< HEAD
      <div
        className={`twocolumnstabs ${
          textRight ? "twocolumnstabs__left" : null
        }`}
      >
        <div className="twocolumnstabs__wrapper" id="scrollableContainer">
          {sections.map((section, index) => (
            <div
              className={`twocolumnstabs__item ${
                section === activeData ? "activeTab" : ""
              }`}
              key={index}
              onClick={() => handleActiveData(section)}
            >
              {section.columnName}
              {section === activeData ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
=======
      <div className={`twocolumnstabs ${textRight ? 'twocolumnstabs__left' : null}`}>
        <div className="twocolumnstabs__wrapper" id="scrollableContainer">
          {sections.map(({ columnName }, index) => (
            <div
              className={`twocolumnstabs__item ${index === activeindex ? 'activeTab' : ''}`}
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              {columnName}
              {index === activeindex && <motion.div className="underline" layoutId="underline" />}
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
<<<<<<< HEAD
          key={activeData ? activeData.id : "empty"}
=======
          key={id}
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
          className="twocolumnsrow__data"
          animate={{ opacity: 1, y: 20 }}
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0.25, easeing: "anticipate" }}
        >
          <div
            className={`textcolumn textcolumn--hide-on-sd ${
              textRight ? "textcolumn__right" : null
=======
          transition={{ duration: 0.25, easeing: 'anticipate' }}
        >
          <div
            className={`textcolumn textcolumn--hide-on-sd ${
              textRight ? 'textcolumn__right' : null
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
            }`}
          >
            <p className="textcolumn__subtitle">{title}</p>

<<<<<<< HEAD
            <h2 className="textcolumn__title">{activeData.title}</h2>
            <p className="textcolumn__text">{activeData.text}</p>
            <div className="textcolumn__link">
              <Link to={activeData.link.url}>
                {activeData.link.text}
=======
            <h2 className="textcolumn__title">{sectionTitle}</h2>
            <p className="textcolumn__text">{text}</p>
            <div className="textcolumn__link">
              <Link to={link.url}>
                {link.text}
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
                <span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </Link>
            </div>
          </div>
<<<<<<< HEAD
          <div
            className={`imagecolumn ${
              textRight ? "image-left" : "image-right"
            }`}
          >
            <Image
              image={activeData.image}
              alt={activeData.title}
              className="flex-1"
            />
=======
          <div className={`imagecolumn ${textRight ? 'image-left' : 'image-right'}`}>
            <Image image={image} alt={sectionTitle} className="flex-1" />
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
