// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';

import { Testimonial } from '../Testimonial';

export const Testimonials = ({ data }: Object): Node => {
  const TESTIMONIALS = [
    {
      name: 'Johannes Reck, CEO GetYourGuide',
      description: (
        <Trans>
          Without employee participation plans, companies miss the opportunity to incentivize young
          people to work in a startup by profiting from its success.
        </Trans>
      ),
      img: data.reck,
      rounded: true
    },
    {
      name: 'Dr. Thomas Gemmeke, Head of Legal @ Baker Tilly',
      description: (
        <Trans>
          Employee participation plans are key to taking a startup to the next level. We combined
          our legal expertise and PSOP templates together with Ledgy, so that German startups can
          reward their talented employees.
        </Trans>
      ),
      img: data.bakertilly,
      rounded: false
    }
  ];

  const testimonials = TESTIMONIALS.map(({ name, description, img, rounded }) => (
    <Testimonial
      col={5}
      key={name}
      name={name}
      img={img}
      description={description}
      rounded={rounded}
    />
  ));

  return <div className="row text-center justify-content-between pb-6">{testimonials}</div>;
};
