import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import ReactTooltip from 'react-tooltip';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { getIntegrationLogos } from './lib';
import { Image } from '../utils';
import { CustomButton } from '../CustomButton';

const TITLE = 'Customize Ledgy with your existing ecosystem';
const DESCRIPTION = 'Explore the full integration gallery and build the exact workflow you need.';
const BUTTON_TEXT = 'Browes our integrations';
const BUTTON_LINK = '/marketplace/';

export const LogosGridSection = () => {
  const [activeLogo, setActiveLogo] = useState(null as number | null);
  const logos = getIntegrationLogos();

  return (
    <div className="logos_grid_section bg-secondary">
      <div className="container">
        <div className="text-center">
          <h1>{TITLE}</h1>

          <p className="mt-4 mb-0">{DESCRIPTION}</p>

          <div className="logos_grid">
            <div className="logos_grid__grid">
              {logos.map((logo, index) => (
                <div
                  className="logos_grid__item"
                  onMouseEnter={() => setActiveLogo(index)}
                  onMouseLeave={() => setActiveLogo(null)}
                  data-tip
                  data-for="logoName"
                  key={index}
                >
                  <Image image={logo} />

                  {activeLogo === index && (
                    <ReactTooltip
                      id="logoName"
                      place="right"
                      type="dark"
                      effect="float"
                      offset={{ top: 8, right: 8 }}
                      arrowColor="rgba(0,0,0,0)"
                    >
                      <span>{logo.title}</span>
                    </ReactTooltip>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <CustomButton url={BUTTON_LINK} text={BUTTON_TEXT} isTopBanner isPrimary />
          </div>
        </div>
      </div>
    </div>
  );
};
