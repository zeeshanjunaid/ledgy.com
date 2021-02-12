import React from 'react';
import { Link } from 'gatsby';

import { Button } from './Button';
import { DynamicTrans } from './DynamicTrans';
import { formatUrl } from './lib';
import { Icon } from './Icon';
import { Section } from './Section';
import { LinkWithChevron } from './LinkWithChevron';

export const CallToAction = ({
  header,
  description,
  buttonText,
  buttonPath,
  externalLinkText,
  externalLinkUrl,
  icon,
  secondaryHeader,
  secondaryDescription,
  secondaryLinkText,
  secondaryLinkPath,
  prefix,
}: { prefix: string } & CallToActionProps) => (
  <Section className="my-4">
    <div className="row">
      <div className="col-md-8 mb-4 mb-md-2 pr-5">
        <h2 className="mb-4">
          <DynamicTrans>{header}</DynamicTrans>
        </h2>
        <p className="mb-4">
          <DynamicTrans>{description}</DynamicTrans>
        </p>
        <div className="d-flex align-items-center flex-wrap">
          <Link to={formatUrl(prefix, buttonPath)}>
            <Button className="btn-xl mr-4 mb-4">
              <DynamicTrans>{buttonText}</DynamicTrans>
            </Button>
          </Link>
          {!!(externalLinkText && externalLinkUrl) && (
            <LinkWithChevron
              to={externalLinkUrl}
              text={externalLinkText}
              className="mb-4"
              prefix={prefix}
            />
          )}
        </div>
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
          <LinkWithChevron to={secondaryLinkPath} text={secondaryLinkText} prefix={prefix} />
        </div>
      </div>
    </div>
  </Section>
);
