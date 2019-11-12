// @flow

import React from 'react';

import sample from 'lodash/sample';
import { Trans } from '@lingui/react';
import { callToActionExperiments, trackSignup, isBrowser, appUrl } from '../layouts/utils';

// eslint-disable-next-line import/prefer-default-export
export const CTABanner = () => {
  const experiment = isBrowser ? sample(callToActionExperiments) : callToActionExperiments[0];
  return (
    <section className="section bg-pale-secondary">
      <div className="container py-md-4">
        <div className="row m-0 w-100 justify-content-center align-items-center">
          <h4 className="m-3 text-center">{experiment.title}</h4>
          <a
            className="cta-button m-3 btn btn-lg btn-round btn-primary align-self-center"
            href={`${appUrl}/signup`}
            onClick={() => {
              if (window.ga) window.ga('set', 'dimension2', experiment.name);
              trackSignup('clickSignup');
            }}
          >
            <Trans>Get started</Trans>
          </a>
        </div>
      </div>
    </section>
  );
};
