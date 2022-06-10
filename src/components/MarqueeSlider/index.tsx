import Marquee from 'react-fast-marquee';
import React from 'react';
import logos from './data';

export const MarqueeSlider = () => {
  return (
    <div className="marqueeslider__wrapper">
      <Marquee pauseOnHover={true} speed={100} gradient={false}>
        {logos.map((logo) => (
          <div key={logo.id} className="marqueeslider__img">
            <img src={logo.url} alt={logo.alt} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
