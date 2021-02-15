import React from 'react';
import Img from 'gatsby-image';

import { DynamicTrans } from '../DynamicTrans';
import { SectionHeader } from '../SectionHeader';

export const MobileCardsWithScreenshots = ({
  title,
  content,
}: SelectableCardsWithScreenshotsProps) => {
  return (
    <div className="d-lg-none">
      <SectionHeader header={title} className="text-center" />
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
