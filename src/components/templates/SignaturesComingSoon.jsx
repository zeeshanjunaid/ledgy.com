// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import Img from 'gatsby-image';

export const SignaturesComingSoon = ({ data }: Object): Node => {
  return (
    <div id="signatories-coming-soon" className="row text-center justify-content-between py-6">
      <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center text-left mb-4 mb-lg-0">
        <h6 className="w-100">
          <Trans>COMING SOON:</Trans>
        </h6>
        <h6 className="w-100">
          <Trans>Sign grants online in seconds</Trans>
        </h6>
        <ol className="py-0 pr-0 pl-4 w-100">
          <li>
            <Trans>Upload the document</Trans>
          </li>
          <li>
            <Trans>Select signatories</Trans>
          </li>
          <li>
            <Trans>Send and receive valid signatures in a matter of seconds</Trans>
          </li>
        </ol>
      </div>

      <div className="col-lg-7 d-flex flex-column justify-content-center align-items-center mb-4 mb-lg-0 mx-auto">
        <div className="d-flex align-items-center justify-content-center my-auto w-100">
          <Img {...data.signatures} alt="Ledgy signatures, powered by skribble" />
        </div>
      </div>
    </div>
  );
};
