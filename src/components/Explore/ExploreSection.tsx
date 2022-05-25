import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Image } from '../utils';
export const ExploreSection = ({ explore }: { explore: ExploreProps }) => {
  const { textRight, title, sections } = explore;
  const [activeData, setActiveData] = useState(sections[0]);

  const handleActiveData = (column: ExploreSectionProps) => {
    setActiveData(column);
  };
  return (
    <div className="twocolumnsrow__wrapper">
      <div className={`twocolumnstabs ${textRight ? 'twocolumnstabs__left' : null}`}>
        <div className="twocolumnstabs__wrapper">
          {sections.map((section, index) => (
            <div
              className={`twocolumnstabs__item ${section === activeData ? 'activeTab' : ''}`}
              key={index}
              onClick={() => handleActiveData(section)}
            >
              {section.columnName}
              {section === activeData ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={activeData ? activeData.id : 'empty'}
          className="twocolumnsrow__data"
          animate={{ opacity: 1, y: 20 }}
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, easeing: 'anticipate' }}
        >
          <div className={`textcolumn ${textRight ? 'textcolumn__right' : null}`}>
            <p className="textcolumn__subtitle">{title}</p>

            <h2 className="textcolumn__title">{activeData.title}</h2>
            <p className="textcolumn__text">{activeData.text}</p>
            <div className="textcolumn__link">
              <Link to={activeData.link.url}>
                {activeData.link.text}
                <span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className={`imagecolumn ${textRight ? 'image-left' : 'image-right'}`}>
            <Image image={activeData.image} alt={activeData.title} className="flex-1" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
