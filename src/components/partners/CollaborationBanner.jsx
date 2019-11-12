// @flow

import React from 'react';
import { Trans } from '@lingui/react';

import { FullWidthBanner } from '../FullWidthBanner';

// eslint-disable-next-line import/prefer-default-export
export const CollaborationBanner = () => (
  <FullWidthBanner>
    <div className="container">
      <div className="col col-8 col-md-6 offset-2 offset-md-3">
        <p className="text-center">
          <Trans>
            Startup law is a unique maze, and getting the advice you need is crucial to avoid costly
            legal mistakes.
          </Trans>
        </p>
        <p className="text-center">
          <Trans>
            Our partners will collaborate with you on Ledgy and also offer special offers to Ledgy
            clients.
          </Trans>
        </p>
      </div>
    </div>
  </FullWidthBanner>
);
