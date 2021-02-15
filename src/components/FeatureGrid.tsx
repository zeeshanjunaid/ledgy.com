import React from 'react';
import { CustomFade } from './CustomFade';

import { DynamicTrans } from './DynamicTrans';
import { Icon } from './Icon';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';

const FeatureGridCard = ({
  featureGridSection,
  index,
}: {
  featureGridSection: FeatureGridSectionProps;
  index: number;
}) => {
  const { title, description, icon } = featureGridSection;
  return (
    <CustomFade
      delay={index * 200}
      translate="0, 100px"
      className="col-12 col-sm-6 col-xl-3 mb-4 mb-xl-0"
    >
      <div className="left-border-with-accent h-100">
        <Icon icon={icon} />
        <h5 className="my-2 accent-border">
          <DynamicTrans>{title}</DynamicTrans>
        </h5>
        <p className="my-2">
          <DynamicTrans>{description}</DynamicTrans>
        </p>
      </div>
    </CustomFade>
  );
};

export const FeatureGrid = ({ header, sections }: FeatureGridContentProps) => (
  <Section>
    <SectionHeader header={header} />
    <div className="row my-4">
      {sections.map((v, i) => (
        <FeatureGridCard key={v.title} index={i} featureGridSection={v} />
      ))}
    </div>
  </Section>
);
