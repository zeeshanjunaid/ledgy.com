<<<<<<< HEAD
/* eslint-disable prettier/prettier */
=======
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
import { DynamicTrans, Image } from './utils';

import { CustomButton } from './CustomButton';
import { DemoTopBanner } from './topBanners/DemoTopBanner';
import { ExtraLinkTopBanner } from './topBanners/ExtraLinkTopBanner';
<<<<<<< HEAD
import { LogosSection } from './LogosSection';
import { MarqueeSlider } from './MarqueeSlider';
=======
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
import React from 'react';
import { RequestDemoButton } from './RequestDemoButton';
import { TopBannerLayout } from './TopBannerLayout';
import { demoPage } from '../helpers';
import { t } from '@lingui/macro';

const DEMO_BANNER = 'demo';
const NO_BUTTONS_BANNER = 'no-button';
const ONE_BUTTON_BANNER = 'one-button';
const EXTRA_LINK_BANNER = 'extra-link';

const Screenshot = ({ image }: { image: ImageProps }) => (
  <div className="mt-sm-4 mt-xl-0 p-0 screenshot">
    <Image image={image} alt={t`Screenshot of the Ledgy app`} />
  </div>
);

const renderBannerFromType = ({
  mainHeader,
  description,
  image,
  buttonOne,
  buttonTwo,
  type = 'normal'
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
        <>
          <TopBannerLayout
            title={title}
            subtitle={subtitle}
            buttonOne={<></>}
            componentRight={imageRight}
            smallPadding
          />
<<<<<<< HEAD
          <MarqueeSlider />
=======
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
        </>
      );

    case ONE_BUTTON_BANNER:
      return (
        <>
          <TopBannerLayout
            title={title}
            subtitle={subtitle}
            buttonOne={buttonOne}
            componentRight={imageRight}
            smallPadding
          />
<<<<<<< HEAD
          <MarqueeSlider />
=======
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
        </>
      );

    case DEMO_BANNER:
      return (
        <>
          <DemoTopBanner title={title} subtitle={subtitle} />
<<<<<<< HEAD
          <MarqueeSlider />
=======
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
        </>
      );

    case EXTRA_LINK_BANNER:
      return (
        <>
          <ExtraLinkTopBanner
            title={title}
            subtitle={subtitle}
            buttonOne={buttonOne}
            buttonTwo={buttonTwo}
            componentRight={imageRight}
          />
<<<<<<< HEAD
          <MarqueeSlider />
=======
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
        </>
      );
    default:
      return (
        <>
          <TopBannerLayout
            title={title}
            subtitle={subtitle}
            buttonOne={buttonOne}
            buttonTwo={buttonTwo}
            componentRight={imageRight}
            smallPadding
          />
<<<<<<< HEAD
          <MarqueeSlider />
=======
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
        </>
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
  type
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
<<<<<<< HEAD
    type
=======
    type,
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
  });
};
