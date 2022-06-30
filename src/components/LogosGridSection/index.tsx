import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import ReactTooltip from "react-tooltip";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { logosgrid } from "./data";

const LogosGridSection = () => {
  const { title, description, btnText, btnLink, logos } = logosgrid;
  const [activeLogo, setActiveLogo] = useState(null);
  return (
    <div className="logosgridsection">
      <div className="container">
        <div className="logosgridsection__info">
          <div className="logosgridsection__info-title">
            <h2>{title}</h2>
          </div>
          <div className="logosgridsection__info-description">
            <p>{description}</p>
          </div>
          <div className="logosgridsection__info-btn">
            <Link className="btn btn-primary" to={btnLink}>
              {btnText}
              <span>
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </Link>
          </div>
        </div>
        <div className="logosgrid">
          <div className="logosgrid__grid">
            {logos.map((item, index) => (
              <Link
                onMouseEnter={() => setActiveLogo(index)}
                onMouseLeave={() => setActiveLogo(null)}
                to={item.srcLink}
                key={index}
                data-tip
                data-for="logoName"
              >
                <div className="logosgrid__item">
                  <img src={item.imgLink} alt={item.name} />
                  {activeLogo === index && (
                    <ReactTooltip
                      id="logoName"
                      place="right"
                      type="dark"
                      effect="float"
                      offset={{ top: "8px", right: "8px" }}
                      arrowColor="rgba(0,0,0,0)"
                    >
                      <span>{item.name}</span>
                    </ReactTooltip>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosGridSection;
