// @flow

import React, { type Node } from 'react';
import Img from 'gatsby-image';

export const Testimonial = ({
  img,
  name,
  description,
  col,
  rounded,
  minHeight = 80
}: {
  img: Object,
  name: string,
  description: Node,
  col: number,
  rounded?: boolean,
  minHeight?: number
}) => (
  <div
    className={`testimonial col-lg-${col} d-flex flex-column justify-content-start align-items-center mb-4 mb-lg-0`}
  >
    <div
      className="d-flex align-items-center justify-content-center mt-4"
      style={minHeight ? { minHeight } : {}}
    >
      <Img {...img} alt={name} className={rounded ? 'avatar' : ''} />
    </div>
    <div className="d-flex flex-column justify-content-between mt-4 h-100">
      <div className="testimonial-description">{description}</div>
      <small className="text-light mt-4" style={{ minHeight: '80px' }}>
        {name}
      </small>
    </div>
  </div>
);
