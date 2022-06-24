import { LedgyHeroData, LedgyHeroStickyData } from "./data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const LedgyHero = () => {
  const { title, description, infoBox } = LedgyHeroData;

  const { stickySection, content } = LedgyHeroStickyData;
  const { info, items } = stickySection;

  const { headerImage, blocks } = infoBox;

  return (
    <div className="ledgyhero">
      <div className="container">
        <div className="ledgyhero__wrapper">
          <div className="ledgyhero__nav">
            <div className="ledgyhero__nav-left">
              <Link to="/">Customers</Link>
              <span>/</span>
              <Link to="/">Substack</Link>
            </div>
            <div className="ledgyhero__nav-right">
              <Link to="/">Overview</Link>
              <Link to="/">All customers stories</Link>
            </div>
          </div>
          <div className="ledgyhero__content">
            <div className="ledgyhero__content-col--left">
              {title && <h2>{title}</h2>}

              {description && <p>{description}</p>}
            </div>
            <div>
              <div className="ledgyhero__infobox">
                {headerImage && (
                  <div className="ledgyhero__infobox-header">{headerImage}</div>
                )}

                {blocks && blocks.length > 0 && (
                  <div className="ledgyhero__infobox-blocks">
                    {blocks.map((block, index) => (
                      <div className="ledgyhero__infobox-block" key={index}>
                        {block.subtitle && <p>{block.subtitle}</p>}

                        {block.items && block.items.length > 0 && (
                          <>
                            {block.items.map((item, i) => (
                              <li key={i}>
                                {item.icon && <span>{item.icon}</span>}
                                {item.title && item.title}
                              </li>
                            ))}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="ledgyhero__sticky">
          <div className="ledgyhero__sticky-section">
            {items && items.length > 0 && (
              <>
                {items.map((item, i) => (
                  <li>
                    {item.title && <h3>{item.title}</h3>}
                    {item.subtitle && <p>{item.subtitle}</p>}
                  </li>
                ))}
              </>
            )}
            {info.title && <h5>{info.title}</h5>}
            {info.btnText && info.btnLink && (
              <Link to={info.btnLink} className="btn btn-primary">
                {info.btnText}
                <span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </Link>
            )}
          </div>
          {content && (
            <div className="ledgyhero__sticky-content">{content}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LedgyHero;
