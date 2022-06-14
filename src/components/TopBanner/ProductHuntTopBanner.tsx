import React, { ReactNode } from 'react';
import { ProductHuntButton } from '../ProductHuntButton';
import { TopBannerLayout } from './TopBannerLayout';

export const ProductHuntTopBanner = ({
  title,
  subtitle,
  buttonOne,
  componentRight,
}: {
  title: JSX.Element;
  subtitle: JSX.Element;
  buttonOne?: ReactNode;
  componentRight: ReactNode;
}) => {
  const productHuntButton = (
    <ProductHuntButton
      productHuntLink="https://www.producthunt.com/posts/startup-fundraising-calculator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-startup-fundraising-calculator"
      trackSignupKey="clickProductHunt"
      postId="169181"
      altText="Startup Fundraising Calculator - The calculator you need if you're raising money. | Product Hunt Embed"
    />
  );

  return (
    <TopBannerLayout
      title={title}
      subtitle={subtitle}
      buttonOne={buttonOne}
      buttonTwo={productHuntButton}
      componentRight={componentRight}
      smallPadding
    />
  );
};
