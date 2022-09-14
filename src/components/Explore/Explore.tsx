import React from 'react';
import { ExploreSection } from './ExploreSection';
import { Section } from '../utils';

export const Explore = ({ prefix, ...explore }: Prefix & ExploreProps) => {
  return (
    <Section smallPadding>
      <div className="container">
        <div className="row">
          <ExploreSection explore={explore} prefix={prefix} />
        </div>
      </div>
    </Section>
  );
};
