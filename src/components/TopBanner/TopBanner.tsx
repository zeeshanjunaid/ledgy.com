import { DemoTopBanner } from './DemoTopBanner';
import { ExtraLinkTopBanner } from './ExtraLinkTopBanner';
import React from 'react';

import { TopBannerLayout } from './TopBannerLayout';

import { ProductHuntTopBanner } from './ProductHuntTopBanner';
import { DynamicTrans, Image } from '../utils';
import { RequestDemoButton } from '../RequestDemoButton';
import { demoPage } from '../../helpers';
import { CustomButton } from '../CustomButton';
import {
  DEMO_BANNER,
  EXTRA_LINK_BANNER,
  NO_BUTTONS_BANNER,
  ONE_BUTTON_BANNER,
  PRODUCT_HUNT_BANNER,
} from './lib';

const Screenshot = ({ image }: { image: ImageProps }) => (
  <div className="mt-sm-4 mt-xl-0 p-0 screenshot">
    <Image image={image} alt={image.title} />
  </div>
);

const renderBannerFromType = ({
  mainHeader,
  description,
  image,
  buttonOne,
  buttonTwo,
  type = 'normal',
}: {
  mainHeader: string;
  description: string;
  image: ImageProps;
  buttonOne: JSX.Element;
  buttonTwo: JSX.Element;
  type: BannerType;
}) => {
  const title = <DynamicTrans>{mainHeader}</DynamicTrans>;
  const subtitle = <DynamicTrans>{description}</DynamicTrans>;
  const imageRight = <Screenshot image={image} />;

  switch (type) {
    case NO_BUTTONS_BANNER:
      return (
        <TopBannerLayout
          title={title}
          subtitle={subtitle}
          buttonOne={<></>}
          componentRight={imageRight}
          smallPadding
        />
      );

    case ONE_BUTTON_BANNER:
      return (
        <TopBannerLayout
          title={title}
          subtitle={subtitle}
          buttonOne={buttonOne}
          componentRight={imageRight}
          smallPadding
        />
      );

    case DEMO_BANNER:
      return <DemoTopBanner title={title} subtitle={subtitle} />;

    case EXTRA_LINK_BANNER:
      return (
        <ExtraLinkTopBanner
          title={title}
          subtitle={subtitle}
          buttonOne={buttonOne}
          buttonTwo={buttonTwo}
          componentRight={imageRight}
        />
      );
    case PRODUCT_HUNT_BANNER:
      return (
        <ProductHuntTopBanner
          title={title}
          subtitle={subtitle}
          buttonOne={buttonOne}
          componentRight={imageRight}
        />
      );
    default:
      return (
        <TopBannerLayout
          title={title}
          subtitle={subtitle}
          buttonOne={buttonOne}
          buttonTwo={buttonTwo}
          componentRight={imageRight}
          smallPadding
        />
      );
  }
};

export const TopBanner = ({
  mainHeader,
  description,
  image,
  firstButtonText,
  firstButtonUrl,
  secondButtonText,
  secondButtonUrl,
  prefix,
  type,
}: TopBannerProps & Prefix) => {
  //avoid delaying the largest contentful paint by lazy loading
  if (image.localFile) image.localFile.childImageSharp.loading = 'eager';
  const isPrimary = firstButtonUrl.includes('#demo');

  const buttonClassName = 'my-sm-0 my-2 btn-xl d-inline mr-2';

  const buttonOne = firstButtonUrl.includes(demoPage) ? (
    <RequestDemoButton
      prefix={prefix}
      buttonText={firstButtonText}
      buttonClassName={buttonClassName}
      utm={'topBanner'}
    />
  ) : (
    <CustomButton url={firstButtonUrl} text={firstButtonText} isTopBanner isPrimary={isPrimary} />
  );

  const buttonTwo = secondButtonUrl.includes(demoPage) ? (
    <RequestDemoButton
      prefix={prefix}
      buttonText={secondButtonText}
      buttonClassName={buttonClassName}
      utm={'topBanner'}
    />
  ) : (
    <CustomButton url={secondButtonUrl} text={secondButtonText} isTopBanner isPrimary={isPrimary} />
  );

  return renderBannerFromType({
    mainHeader,
    description,
    image,
    buttonOne,
    buttonTwo,
    type,
  });
};
