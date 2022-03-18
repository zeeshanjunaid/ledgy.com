import React from 'react';

import { TopBannerLayout } from '../TopBannerLayout';

import { DemoForm } from '../forms';
import { CapterraBadge, G2Badge, SourceforgeBadge } from '../../layouts/demo';

export const DemoTopBanner = ({
  title,
  subtitle,
}: {
  title: JSX.Element;
  subtitle: JSX.Element;
}) => {
  const form = (
    <DemoForm buttonText={'Show me a demo'} contentfulRequesterType={undefined} slug={'slug'} />
  );

  return (
    <div id="demo">
      <TopBannerLayout
        title={title}
        subtitle={subtitle}
        buttonOne={<CapterraBadge />}
        buttonTwo={<G2Badge />}
        buttonThree={<SourceforgeBadge />}
        componentRight={form}
        smallPadding
      />
    </div>
  );
};
