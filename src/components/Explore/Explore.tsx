import React from 'react';
import { ExploreSection } from './ExploreSection';
import { Section } from '../utils';

export const Explore = (explore: ExploreProps) => {
  return (
    <Section smallPadding>
      <div className="container">
        <div className="row">
          <ExploreSection explore={explore} />
        </div>
      </div>
    </Section>
  );
};
