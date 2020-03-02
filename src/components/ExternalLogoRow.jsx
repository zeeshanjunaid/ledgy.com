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
