// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';

import { Testimonial } from '../Testimonial';

export const Testimonials = ({ data }: Object): Node => {
  const TESTIMONIALS = [
    {
      name: 'Ari, CEO RoomPriceGenie.com',
      description: (
        <Trans>
          Ledgy’s templates helped us getting started really fast with setting up our ESOP and gave
          us a solid and trusted basis to start from.
        </Trans>
      ),
      img: data.roomPriceGenie
    },
    {
      name: 'Thomas Weber, Rivero.Tech',
      description: (
        <Trans>
          Ledgy’s templates helped us learn about the structure and content of an ESOP to be well
          prepared for our first meeting with our lawyer.
        </Trans>
      ),
      img: data.rivero
    }
  ];

  const testimonials = TESTIMONIALS.map(({ name, description, img }) => (
    <Testimonial col={5} key={name} name={name} img={img} description={description} />
  ));

  return <div className="row text-center justify-content-between pb-6">{testimonials}</div>;
};
