// @flow

import * as React from 'react';
import { Trans } from '@lingui/react';
import { Li } from '../layouts/utils';

export default () => (
  <div className="row gap-y pt-2">
    <div className="px-7">
      <h2>
        <Trans>And Much More</Trans>
      </h2>
      <p>
        <Trans>
          Ledgy can do a lot for you—and more features are constantly being developed. Most
          currently available features are listed below. Get in touch if your favorite feature is
          missing, we love to hear feedback.
        </Trans>
      </p>
    </div>

    <div className="col-lg-4">
      <div className="pricing-3 border rounded text-left">
        <ul className="mb-0 mt-5">
          <Li>
            <Trans>Funding round modeling</Trans>
          </Li>
          <Li>
            <Trans>Full transaction history</Trans>
          </Li>
          <Li>
            <Trans>Consistency checks</Trans>
          </Li>
          <Li>
            <Trans>Transaction filters</Trans>
          </Li>
          <Li>
            <Trans>Convertible loans</Trans>
          </Li>
          <Li>
            <Trans>Stock split</Trans>
          </Li>
          <Li>
            <Trans>Unlimited share classes</Trans>
          </Li>
          <Li>
            <Trans>Numbered shares</Trans>
          </Li>
          <Li>
            <Trans>Treasury shares</Trans>
          </Li>
        </ul>
      </div>
    </div>

    <div className="col-lg-4">
      <div className="pricing-3 border rounded text-left">
        <ul className="mb-0 mt-5">
          <Li>
            <Trans>Employee options</Trans>
          </Li>
          <Li>
            <Trans>Phantom programs</Trans>
          </Li>
          <Li>
            <Trans>Option termination</Trans>
          </Li>
          <Li>
            <Trans>Option expiration</Trans>
          </Li>
          <Li>
            <Trans>Approved capital pools</Trans>
          </Li>
          <Li>
            <Trans>Vesting schedules</Trans>
          </Li>
          <Li>
            <Trans>Fully-diluted view</Trans>
          </Li>
          <Li>
            <Trans>Read-only access</Trans>
          </Li>
          <Li>
            <Trans>Investor portfolio</Trans>
          </Li>
        </ul>
      </div>
    </div>

    <div className="col-lg-4">
      <div className="pricing-3 border rounded text-left">
        <ul className="mb-0 mt-5">
          <Li>
            <Trans>Spreadsheet Import</Trans>
          </Li>
          <Li>
            <Trans>Customizable PDF reports</Trans>
          </Li>
          <Li>
            <Trans>CSV export</Trans>
          </Li>
          <Li>
            <Trans>Secure document storage</Trans>
          </Li>
          <Li>
            <Trans>Attach documents to transactions</Trans>
          </Li>
          <Li>
            <Trans>Multiple administrators</Trans>
          </Li>
          <Li>
            <Trans>Audit trails</Trans>
          </Li>
          <Li>
            <Trans>Two-Factor authentication</Trans>
          </Li>
          <Li>
            <Trans>Send holding confirmations</Trans>
          </Li>
        </ul>
      </div>
    </div>
  </div>
);
