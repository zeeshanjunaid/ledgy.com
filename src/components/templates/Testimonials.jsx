// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';

import { Testimonial } from '../Testimonial';

export const Testimonials = ({ data, i18n }: Object): Node => {
  const TESTIMONIALS = [
    {
      name: 'Maria Weiers, Partner @ Taylor Wessing',
      description: (
        <Trans>
          The powerful synergy of our law firm’s expertise and Ledgy’s founder-oriented technology
          is paving the way to spread knowledge on how to involve employees in a startup’s success.
        </Trans>
      ),
      img: data.taylorwessing,
      rounded: false
    },
    {
      name: 'Johannes Reck, CEO @ GetYourGuide',
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
      col={4}
      key={name}
      name={name}
      img={img}
      description={description}
      rounded={rounded}
    />
  ));

  return (
    <div className="py-6">
      <div className="row text-center justify-content-between mb-3">{testimonials}</div>
      <div className="row text-center justify-content-center">
        <Testimonial
          col={12}
          name={i18n.t`Dominic Jacquesson, VP Talent @ Index Ventures, a VC that founded the Not Optional initiative`}
          img={data.notoptional}
          minHeight={0}
          description={
            <Trans>
              Any initiative that makes it easier for companies and employees to increase their use
              of stock options is a welcome one. We applaud Ledgy for helping entrepreneurs in
              Germany to set up robust and fair virtual stock option schemes. Our hope is that
              legislators in Germany will make reforming stock option policies a priority in 2020,
              allowing employees to receive real stock options, not just virtual ones.
            </Trans>
          }
        />
      </div>
    </div>
  );
};
