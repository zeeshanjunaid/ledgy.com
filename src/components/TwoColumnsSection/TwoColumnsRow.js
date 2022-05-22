/* eslint-disable prettier/prettier */
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const TwoColumnsRow = ({ twoColumnData }) => {
  const { textRight, columns } = twoColumnData;
  const [activeData, setActiveData] = useState(columns[0]);

  const handleActiveData = (item) => {
    setActiveData(item);
  };
  return (
    <div className="twocolumnsrow__wrapper">
      <div
        className={`twocolumnstabs ${
          textRight ? "twocolumnstabs__left" : null
        }`}
      >
        <div className="twocolumnstabs__wrapper">
          {columns.map((item, index) => (
            <div
              className={`twocolumnstabs__item ${
                item === activeData ? "activeTab" : ""
              }`}
              key={index}
              onClick={() => handleActiveData(item)}
            >
              {item.columnName}
              {item === activeData ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={activeData ? activeData.id : "empty"}
          className="twocolumnsrow__data"
          animate={{ opacity: 1, y: 20 }}
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, easeing: "anticipate" }}
        >
          <div
            className={`textcolumn ${textRight ? "textcolumn__right" : null}`}
          >
            <p lassName="textcolumn__subtitle">{activeData.subtitle}</p>

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
          <div
            className={`imagecolumn ${
              textRight ? "image-left" : "image-right"
            }`}
          >
            <img src={activeData.imgUrl} alt="" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TwoColumnsRow;
