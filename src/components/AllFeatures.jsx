// @flow

import * as React from 'react';
import { Trans } from '@lingui/react';
import { Li } from '../layouts/utils';

export default () => (
  <div className="row gap-y">
    <div className="px-7">
      <h2><Trans>And Much More</Trans></h2>
      <p>
        <Trans>
          Ledgy can do a lot for you—and more features are constantly being developed.
          Most currently available features are listed below. Get in touch if your favorite
          feature is missing, we love to hear feedback.
        </Trans>
      </p>
    </div>

    <div className="col-lg-4">
      <div className="pricing-3 border rounded text-left">
        <ul className="mb-0 mt-5">
          <Li><Trans>Funding Round Modeling</Trans></Li>
          <Li><Trans>Full Transaction History</Trans></Li>
          <Li><Trans>Consistency Checks</Trans></Li>
          <Li><Trans>Transaction Filters</Trans></Li>
          <Li><Trans>Convertible Loans</Trans></Li>
          <Li><Trans>Stock Split</Trans></Li>
          <Li><Trans>Unlimited Share Classes</Trans></Li>
          <Li><Trans>Numbered Shares</Trans></Li>
          <Li><Trans>Treasury Shares</Trans></Li>
        </ul>
      </div>
    </div>


    <div className="col-lg-4">
      <div className="pricing-3 border rounded text-left">
        <ul className="mb-0 mt-5">
          <Li><Trans>Employee Options</Trans></Li>
          <Li><Trans>Phantom Programs</Trans></Li>
          <Li><Trans>Option Termination</Trans></Li>
          <Li><Trans>Option Expiration</Trans></Li>
          <Li><Trans>Approved Capital Pools</Trans></Li>
          <Li><Trans>Vesting Schedules</Trans></Li>
          <Li><Trans>Fully-diluted View</Trans></Li>
          <Li><Trans>Read-only Access</Trans></Li>
          <Li><Trans>Investor Portfolio</Trans></Li>
        </ul>
      </div>
    </div>


    <div className="col-lg-4">
      <div className="pricing-3 border rounded text-left">
        <ul className="mb-0 mt-5">
          <Li><Trans>Spreadsheet Import</Trans></Li>
          <Li><Trans>Customizable PDF Reports</Trans></Li>
          <Li><Trans>CSV Export</Trans></Li>
          <Li><Trans>Secure Document Storage</Trans></Li>
          <Li><Trans>Attach Documents to Transactions</Trans></Li>
          <Li><Trans>Multiple Administrators</Trans></Li>
          <Li><Trans>Audit Trails</Trans></Li>
          <Li><Trans>Two-Factor Authentication</Trans></Li>
          <Li><Trans>Send Holding Confirmations</Trans></Li>
        </ul>
      </div>
    </div>
  </div>
);
