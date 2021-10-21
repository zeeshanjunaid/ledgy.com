import React from 'react';
import { CustomFade, Image } from '../components';
export const MarketplacePictures = ({ pictures }: { pictures: ImageProps[] }) => {
  const picturesCount = pictures.length;
  return (
    <div className={`row align-items-center mt-2 mb-6`}>
      {pictures.map((picture, i) => {
        const colCount = (picturesCount === 3 && 4) || (picturesCount === 2 && 6) || 12;
        return (
          <div className={`col-12 col-lg-${colCount} py-2`} key={`picture-${i}`}>
            <CustomFade translate="0, 100px" delay={i * 100}>
              <Image image={picture} className="screenshot" />
            </CustomFade>
          </div>
        );
      })}
    </div>
  );
};
