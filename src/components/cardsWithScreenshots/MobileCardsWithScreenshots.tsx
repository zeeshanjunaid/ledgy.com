import React from 'react';
import Img from 'gatsby-image';

import { DynamicTrans } from '../DynamicTrans';
import { SectionHeader } from '../SectionHeader';

export const MobileCardsWithScreenshots = ({
  header,
  content,
}: SelectableCardsWithScreenshotsProps) => {
  return (
    <div className="d-lg-none">
      <SectionHeader header={header} className="text-center" />
      {content.map((v) => {
        const { title, screenshot, description } = v;
        const { childImageSharp } = screenshot.localFile || {};
        return (
          <div className="text-center" key={`img-${title}`}>
            <h5>
              <DynamicTrans>{title}</DynamicTrans>
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
