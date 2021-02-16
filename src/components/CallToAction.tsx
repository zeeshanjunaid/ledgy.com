import React from 'react';
import { Link } from 'gatsby';

import { Button, DynamicTrans, Icon, Section, LinkWithChevron, SectionHeader } from './utils';
import { formatUrl } from './lib';

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
  <Section>
    <div className="row">
      <div className="col-md-8 mb-4 mb-md-2 pr-5">
        <SectionHeader header={header} className="m-0" />
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
