<<<<<<< HEAD
import Marquee from "react-fast-marquee";
import React from "react";
import logos from "./data";
=======
import Marquee from 'react-fast-marquee';
import React from 'react';
import logos from './data';
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3

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
