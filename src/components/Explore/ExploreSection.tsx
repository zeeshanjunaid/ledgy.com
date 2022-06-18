<<<<<<< HEAD
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
=======
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
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
<<<<<<< HEAD
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
=======
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
      duration: 500,
      delay: 0,
      smooth: true,
      horizontal: true,
<<<<<<< HEAD
<<<<<<< HEAD
      containerId: "scrollableContainer",
=======
      containerId: 'scrollableContainer',
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
=======
      containerId: 'scrollableContainer',
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
      offset: 0,
      isDynamic: true,
    });
  }, [activeData]);

<<<<<<< HEAD
<<<<<<< HEAD
  const handleActiveData = (column: ExploreSectionProps) => {
    setActiveData(column);
  };
=======
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
=======
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
  return (
    <div className="twocolumnsrow__wrapper">
      <AnimatePresence exitBeforeEnter>
        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
          key={activeData ? activeData.id : "empty"}
=======
          key={id}
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
=======
          key={id}
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
          className="twocolumnsrow__data twocolumnsrow__data--hide-on-bd"
          animate={{ opacity: 1, y: 20 }}
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
<<<<<<< HEAD
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
=======
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
          transition={{ duration: 0.25, easeing: 'anticipate' }}
        >
          <div className={`textcolumn ${textRight ? 'textcolumn__right' : null}`}>
            <p className="textcolumn__subtitle">{title}</p>

            <h2 className="textcolumn__title">{sectionTitle}</h2>
            <p className="textcolumn__text">{text}</p>
            <div className="textcolumn__link">
              <Link to={link.url}>
                {link.text}
<<<<<<< HEAD
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
=======
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
                <span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
<<<<<<< HEAD
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
=======
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
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
<<<<<<< HEAD
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
=======
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
          key={activeData ? activeData.id : "empty"}
=======
          key={id}
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
=======
          key={id}
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
          className="twocolumnsrow__data"
          animate={{ opacity: 1, y: 20 }}
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
          transition={{ duration: 0.25, easeing: "anticipate" }}
        >
          <div
            className={`textcolumn textcolumn--hide-on-sd ${
              textRight ? "textcolumn__right" : null
=======
=======
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
          transition={{ duration: 0.25, easeing: 'anticipate' }}
        >
          <div
            className={`textcolumn textcolumn--hide-on-sd ${
              textRight ? 'textcolumn__right' : null
<<<<<<< HEAD
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
=======
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
            }`}
          >
            <p className="textcolumn__subtitle">{title}</p>

<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className="textcolumn__title">{activeData.title}</h2>
            <p className="textcolumn__text">{activeData.text}</p>
            <div className="textcolumn__link">
              <Link to={activeData.link.url}>
                {activeData.link.text}
=======
=======
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
            <h2 className="textcolumn__title">{sectionTitle}</h2>
            <p className="textcolumn__text">{text}</p>
            <div className="textcolumn__link">
              <Link to={link.url}>
                {link.text}
<<<<<<< HEAD
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
=======
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
                <span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </Link>
            </div>
          </div>
<<<<<<< HEAD
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
=======
          <div className={`imagecolumn ${textRight ? 'image-left' : 'image-right'}`}>
            <Image image={image} alt={sectionTitle} className="flex-1" />
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
