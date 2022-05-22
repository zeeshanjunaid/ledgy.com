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
      duration: 500,
      delay: 0,
      smooth: true,
      horizontal: true,
      containerId: 'scrollableContainer',
      offset: 0,
      isDynamic: true,
    });
  }, [activeData]);

  return (
    <div className="twocolumnsrow__wrapper">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={id}
          className="twocolumnsrow__data twocolumnsrow__data--hide-on-bd"
          animate={{ opacity: 1, y: 20 }}
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, easeing: 'anticipate' }}
        >
          <div className={`textcolumn ${textRight ? 'textcolumn__right' : null}`}>
            <p className="textcolumn__subtitle">{title}</p>

            <h2 className="textcolumn__title">{sectionTitle}</h2>
            <p className="textcolumn__text">{text}</p>
            <div className="textcolumn__link">
              <Link to={link.url}>
                {link.text}
                <span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
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
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={id}
          className="twocolumnsrow__data"
          animate={{ opacity: 1, y: 20 }}
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, easeing: 'anticipate' }}
        >
          <div
            className={`textcolumn textcolumn--hide-on-sd ${
              textRight ? 'textcolumn__right' : null
            }`}
          >
            <p className="textcolumn__subtitle">{title}</p>

            <h2 className="textcolumn__title">{sectionTitle}</h2>
            <p className="textcolumn__text">{text}</p>
            <div className="textcolumn__link">
              <Link to={link.url}>
                {link.text}
                <span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className={`imagecolumn ${textRight ? 'image-left' : 'image-right'}`}>
            <Image image={image} alt={sectionTitle} className="flex-1" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
