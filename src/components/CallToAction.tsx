import React from 'react';
import { Link } from 'gatsby';

import {
  Button,
  DynamicTrans,
  Icon,
  Section,
  LinkWithChevron,
  SectionHeader,
  CustomFade,
} from './utils';
import { formatUrl, isExternalUrl } from './lib';

const CTAButton = ({
  buttonText,
  buttonUrl,
  prefix,
}: {
  buttonText: string;
  buttonUrl: string;
  prefix: string;
}) => {
  const text = <DynamicTrans>{buttonText}</DynamicTrans>;
  return isExternalUrl(buttonUrl) ? (
    <Button href={buttonUrl} className="btn-xl mr-4 mb-4">
      {text}
    </Button>
  ) : (
    <Link to={formatUrl(prefix, buttonUrl)}>
      <Button className="btn-xl mr-4 mb-4">{text}</Button>
    </Link>
  );
};

export const CallToAction = ({
  header,
  description,
  buttonText,
  buttonUrl,
  linkText,
  linkUrl,
  icon,
  secondaryHeader,
  secondaryDescription,
  secondaryLinkText,
  secondaryLinkUrl,
  prefix,
}: { prefix: string } & CallToActionProps) => (
  <Section>
    <div className="row">
      <div className="col-md-8 mb-4 mb-md-2 pr-5">
        <SectionHeader header={header} className="m-0" />
        <p className="mb-4">
          <DynamicTrans>{description}</DynamicTrans>
        </p>
        <CustomFade translate="0, 100px">
          <div className="d-flex align-items-center flex-wrap">
            <CTAButton buttonText={buttonText} buttonUrl={buttonUrl} prefix={prefix} />
            {!!(linkText && linkUrl) && (
              <LinkWithChevron to={linkUrl} text={linkText} className="mb-4" prefix={prefix} />
            )}
          </div>
        </CustomFade>
      </div>
      <div className="col-md-4">
        <div className="left-border-with-accent left-border-with-accent-lg">
          <Icon icon={icon} className="mb-3" height={50} width={50} />
          <div>
            <p className="accent-border font-weight-semi-bold mb-2">
              <DynamicTrans>{secondaryHeader}</DynamicTrans>
            </p>
          </div>
          <p className="mb-2">
            <DynamicTrans>{secondaryDescription}</DynamicTrans>
          </p>
          <LinkWithChevron to={secondaryLinkUrl} text={secondaryLinkText} prefix={prefix} />
        </div>
      </div>
    </div>
  </Section>
);
