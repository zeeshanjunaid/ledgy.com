import React from 'react';
import { t } from '@lingui/macro';

import { demoPage } from '../helpers';
import { RequestDemoButton } from './RequestDemoButton';
import { TopBannerLayout } from './TopBannerLayout';
import { formatUrl } from './lib';
import { Button, DynamicTrans, Image } from './utils';
import { DemoForm } from './forms';
import { CapterraBadge, G2Badge, SourceforgeBadge } from '../layouts/demo';

const DEMO_BANNER = 'demo';
const NO_BUTTONS_BANNER = 'no-button';

const CustomButton = ({ prefix, url, text }: Prefix & { url: string; text: string }) => (
  <Button
    href={formatUrl(prefix, url)}
    className="btn-xl mr-2 my-1 align-self-center"
    inverted
    outline
  >
    <DynamicTrans>{text}</DynamicTrans>
  </Button>
);

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
  type = 'normal',
}: {
  mainHeader: string;
  description: string;
  image: ImageProps;
  buttonOne: JSX.Element;
  buttonTwo: JSX.Element;
  type: BannerType;
}) => {
  const buttonDemoOne = <CapterraBadge />;
  const buttonDemoTwo = <G2Badge />;
  const buttonDemoThree = <SourceforgeBadge />;
  const form = (
    <div id="demo">
      <DemoForm buttonText={'Schedule my demo'} contentfulRequesterType={undefined} slug={'slug'} />
    </div>
  );

  switch (type) {
    case NO_BUTTONS_BANNER:
      return (
        <TopBannerLayout
          title={<DynamicTrans>{mainHeader}</DynamicTrans>}
          subtitle={<DynamicTrans>{description}</DynamicTrans>}
          buttonOne={<></>}
          componentRight={<Screenshot image={image} />}
          smallPadding
        />
      );
    case DEMO_BANNER:
      return (
        <TopBannerLayout
          title={<DynamicTrans>{mainHeader}</DynamicTrans>}
          subtitle={<DynamicTrans>{description}</DynamicTrans>}
          buttonOne={buttonDemoOne}
          buttonTwo={buttonDemoTwo}
          buttonThree={buttonDemoThree}
          componentRight={form}
        />
      );

    default:
      return (
        <TopBannerLayout
          title={<DynamicTrans>{mainHeader}</DynamicTrans>}
          subtitle={<DynamicTrans>{description}</DynamicTrans>}
          buttonOne={buttonOne}
          buttonTwo={buttonTwo}
          componentRight={<Screenshot image={image} />}
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

  const buttonClassName = 'my-sm-0 my-2 btn-xl d-inline mr-2';

  const buttonOne = firstButtonUrl.includes(demoPage) ? (
    <RequestDemoButton
      prefix={prefix}
      buttonText={firstButtonText}
      buttonClassName={buttonClassName}
    />
  ) : (
    <CustomButton prefix={prefix} url={firstButtonUrl} text={firstButtonText} />
  );

  const buttonTwo = secondButtonUrl.includes(demoPage) ? (
    <RequestDemoButton
      prefix={prefix}
      buttonText={secondButtonText}
      buttonClassName={buttonClassName}
    />
  ) : (
    <CustomButton prefix={prefix} url={secondButtonUrl} text={secondButtonText} />
  );

  return renderBannerFromType({ mainHeader, description, image, buttonOne, buttonTwo, type });
};
