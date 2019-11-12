// @flow

import React from 'react';
import { Trans } from '@lingui/react';

import { targetBlank } from '../../layouts/utils';
import { FullWidthBanner } from '../FullWidthBanner';

// eslint-disable-next-line import/prefer-default-export
export const LawyerCTABanner = () => (
  <FullWidthBanner>
    <div className="container">
      <div className="row m-0 w-100 justify-content-center align-items-center">
        <h5 className="m-3 text-center">Are you a lawyer wanting to partner with us?</h5>
        <a
          className="cta-button m-3 btn btn-lg btn-round btn-primary align-self-center"
          href="mailto:contact@ledgy.com?subject=Law Firm Collaboration"
          {...targetBlank}
        >
          <Trans>Apply</Trans>
        </a>
      </div>
    </div>
  </FullWidthBanner>
);
