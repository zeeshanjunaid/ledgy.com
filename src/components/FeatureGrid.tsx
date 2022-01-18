import React from 'react';

import { CustomFade, DynamicTrans, Icon, LinkWithChevron, Section, SectionHeader } from './utils';

const FeatureGridCard = ({
  featureGridSection,
  prefix,
  index,
}: {
  featureGridSection: FeatureGridSectionProps;
  prefix: string;
  index: number;
}) => {
  const { title, description, icon, url } = featureGridSection;
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
        {!!url && <LinkWithChevron text={'Learn More'} to={url} prefix={prefix} />}
      </div>
    </CustomFade>
  );
};

export const FeatureGrid = ({ header, sections, prefix }: FeatureGridContentProps & Prefix) => (
  <Section>
    <SectionHeader header={header} />
    <div className="row my-4">
      {sections.map((section, index) => (
        <FeatureGridCard
          key={section.title}
          index={index}
          featureGridSection={section}
          prefix={prefix}
        />
      ))}
    </div>
  </Section>
);
