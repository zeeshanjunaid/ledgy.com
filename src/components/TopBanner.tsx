import React from 'react';
import { t } from '@lingui/macro';

import { demoPage } from '../helpers';
import { RequestDemoButton } from './RequestDemoButton';
import { TopBannerLayout } from './TopBannerLayout';
import { formatUrl } from './lib';
import { Button, DynamicTrans, Image } from './utils';

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

export const TopBanner = ({
  mainHeader,
  description,
  image,
  firstButtonText,
  firstButtonUrl,
  secondButtonText,
  secondButtonUrl,
  prefix,
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

  return (
    <div>
      <TopBannerLayout
        title={<DynamicTrans>{mainHeader}</DynamicTrans>}
        subtitle={<DynamicTrans>{description}</DynamicTrans>}
        buttonOne={buttonOne}
        buttonTwo={buttonTwo}
        componentRight={<Screenshot image={image} />}
      />
    </div>
  );
};
