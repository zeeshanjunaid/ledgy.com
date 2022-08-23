import React from 'react';
import { BENEFITS } from '../constats';
import { Section } from '../../utils';
import { WorkBenefit } from './WorkBenefit';

export const WorkBenefits = () => (
  <Section>
    <h1 className="ml-4 px-4">We strive to empower you</h1>
    <div className="benefits-section d-flex flex-wrap justify-content-around mt-4 pt-4">
      {BENEFITS.map(({ icon, title, subtitle }, index) => (
        <WorkBenefit key={index} icon={icon} title={title} subtitle={subtitle} />
      ))}
    </div>
  </Section>
);
