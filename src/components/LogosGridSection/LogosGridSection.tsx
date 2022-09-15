import React from 'react';

import { BUTTON_LINK, BUTTON_TEXT, DESCRIPTION, getIntegrationLogos, TITLE } from './lib';

import { CustomButton } from '../CustomButton';
import { Logo } from './Logo';

export const LogosGridSection = () => {
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
                <Logo logo={logo} key={index} />
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
