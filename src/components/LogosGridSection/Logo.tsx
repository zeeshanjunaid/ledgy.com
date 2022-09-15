import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Image } from '../utils';

export const Logo = ({ logo }: { logo: ImageProps }) => {
  const [activeLogoIndex, setActiveLogoIndex] = useState(false);
  return (
    <div
      className="logos_grid__item"
      onMouseEnter={() => setActiveLogoIndex(true)}
      onMouseLeave={() => setActiveLogoIndex(false)}
      data-tip
      data-for="logoName"
    >
      <Image image={logo} />

      {activeLogoIndex && (
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
  );
};
