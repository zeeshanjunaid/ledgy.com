import React from 'react';

import { TopBannerLayout } from '../TopBannerLayout';

import { DemoForm } from '../forms';
import { CapterraBadge, G2Badge, SourceforgeBadge } from '../../layouts/demo';
import { isBrowser } from '../../helpers';

const getSlug = () => {
  return isBrowser ? window.location.pathname : '';
};

export const DemoTopBanner = ({
  title,
  subtitle,
}: {
  title: JSX.Element;
  subtitle: JSX.Element;
}) => {
  const slug = getSlug();
  const form = (
    <DemoForm buttonText={'Show me a demo'} contentfulRequesterType={undefined} slug={slug} />
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
