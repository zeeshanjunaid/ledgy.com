// @flow

import React, { type Node } from 'react';
import Img from 'gatsby-image';

import { DynamicTrans } from '../components/DynamicTrans';
import { targetBlank } from '../helpers';

export const ExternalLogoRow = ({ title, logos }: { title: Node, logos: Image[] }) => (
  <div className="bg-light position-relative py-7 my-4">
    <div className="container d-flex justify-content-center">
      <small className="position-absolute-top-center my-5 text-gray-neutral">
        <DynamicTrans>{title}</DynamicTrans>
      </small>
      <div className="row w-100 justify-content-between align-items-center">
        {logos.map(({ title: alt, localFile: { childImageSharp }, description: url }) => (
          <div
            className="col-12 col-sm-6 col-md-3 d-flex justify-content-center align-items-center"
            key={alt}
          >
            <a href={url} {...targetBlank} className="m-4 d-flex align-items-center">
              <Img {...childImageSharp} alt={alt} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);
