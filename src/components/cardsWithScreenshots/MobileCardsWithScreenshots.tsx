import React from 'react';
import Img from 'gatsby-image';

import { DynamicTrans } from '../DynamicTrans';

export const MobileCardsWithScreenshots = ({
  title,
  content,
}: SelectableCardsWithScreenshotsProps) => {
  return (
    <div className="d-lg-none">
      <h2 className="pb-4 text-center">
        <DynamicTrans>{title}</DynamicTrans>
      </h2>
      {content.map((v) => {
        const { header, screenshot, description } = v;
        const { childImageSharp } = screenshot.localFile || {};
        return (
          <div className="text-center" key={`img-${header}`}>
            <h5>
              <DynamicTrans>{header}</DynamicTrans>
            </h5>
            <p>
              <DynamicTrans>{description}</DynamicTrans>
            </p>
            <div className="screenshot mb-5">
              {!!childImageSharp && <Img {...childImageSharp} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};
