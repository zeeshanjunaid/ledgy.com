import React from 'react';
import Img, { GatsbyImageFixedProps } from 'gatsby-image';

export const Investor = ({
  name,
  description,
  img,
}: {
  name: string;
  description: string;
  img: GatsbyImageFixedProps;
}) => (
  <div className="col-12 col-md-4 mb-4">
    {img && <Img {...img} alt={name} className="rounded-circle" />}
    <h6>{name}</h6>
    <p className="font-weight-light">{description}</p>
  </div>
);
