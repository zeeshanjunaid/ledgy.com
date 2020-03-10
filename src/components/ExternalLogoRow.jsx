// @flow

import React, { type Node } from 'react';
import Img from 'gatsby-image';

import { DynamicTrans } from '../components/DynamicTrans';
import { targetBlank } from '../helpers';

export const ExternalLogoRow = ({ title, logos }: { title: Node, logos: Image[] }) => (
  <div className="bg-light position-relative p-5">
    <div className="container">
      <div className="row justify-content-center">
        <small className="text-gray-neutral text-center">
          <DynamicTrans>{title}</DynamicTrans>
        </small>
      </div>
      <div className="row w-100 justify-content-between align-items-center">
        {logos.map(({ title: alt, localFile: { childImageSharp }, description: url }) => {
          const image = <Img {...childImageSharp} alt={alt} />;
          const hasUrl = !!url && url.startsWith('https://');
          const className = 'm-4 d-flex align-items-center';
          return (
            <div
              className="col-12 col-sm-6 col-md-3 d-flex justify-content-center align-items-center"
              key={alt}
            >
              {hasUrl ? (
                <a href={url} {...targetBlank} className={className}>
                  {image}
                </a>
              ) : (
                <div className={className}>{image}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
