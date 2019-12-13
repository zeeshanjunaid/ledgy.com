// @flow

import React, { type Node } from 'react';

import sample from 'lodash/sample';
import { Trans } from '@lingui/react';
import { callToActionExperiments } from '../layouts/utils';
import { isBrowser, appUrl, targetBlank, trackSignupGoogleAnalytics } from '../helpers';

const Banner = (props: { title: Node, url: string, trackingName: Node, CTAText: Node }) => {
  const { title, url, trackingName, CTAText } = props;
  return (
    <section className="section bg-pale-secondary">
      <div className="container py-md-4">
        <div className="row m-0 w-100 justify-content-center align-items-center">
          <h4 className="m-3 text-center">{title}</h4>
          <a
            className="cta-button m-3 btn btn-lg btn-round btn-primary align-self-center"
            {...targetBlank}
            href={url}
            onClick={() => {
              if (window.ga) window.ga('set', 'dimension2', { trackingName });
              trackSignupGoogleAnalytics('clickSignup');
            }}
          >
            {CTAText}
          </a>
        </div>
      </div>
    </section>
  );
};

export const CTABanner = ({ location }: LayoutProps) => {
  if (location.pathname.includes('/employee-participation-plan-templates/')) {
    return (
      <Banner
        title={<Trans>Free employee participation plan templates</Trans>}
        url="https://app.ledgy.com/templates"
        trackingName="clickPsopFooter"
        CTAText={<Trans>Get now</Trans>}
      />
    );
  }

  const experiment = isBrowser ? sample(callToActionExperiments) : callToActionExperiments[0];
  return (
    <Banner
      title={experiment.title}
      url={`${appUrl}/signup`}
      trackingName={experiment.name}
      CTAText={<Trans>Get started</Trans>}
    />
  );
};
