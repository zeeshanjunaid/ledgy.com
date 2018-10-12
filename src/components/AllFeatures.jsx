// @flow

import * as React from 'react';
import { Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Feature = ({ children }: { children: React.Node }) => (
  <li className="media">
    <FontAwesomeIcon icon={faCheck} className="text-success mr-3" />
    <div className="media-body">
      {children}
    </div>
  </li>
);

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
          <Feature><Trans>Funding Round Modeling</Trans></Feature>
          <Feature><Trans>Full Transaction History</Trans></Feature>
          <Feature><Trans>Consistency Checks</Trans></Feature>
          <Feature><Trans>Transaction Filters</Trans></Feature>
          <Feature><Trans>Convertible Loans</Trans></Feature>
          <Feature><Trans>Stock Split</Trans></Feature>
          <Feature><Trans>Unlimited Share Classes</Trans></Feature>
          <Feature><Trans>Numbered Shares</Trans></Feature>
          <Feature><Trans>Treasury Shares</Trans></Feature>
        </ul>
      </div>
    </div>


    <div className="col-lg-4">
      <div className="pricing-3 border rounded text-left">
        <ul className="mb-0 mt-5">
          <Feature><Trans>Employee Options</Trans></Feature>
          <Feature><Trans>Phantom Programs</Trans></Feature>
          <Feature><Trans>Option Termination</Trans></Feature>
          <Feature><Trans>Option Expiration</Trans></Feature>
          <Feature><Trans>Approved Capital Pools</Trans></Feature>
          <Feature><Trans>Vesting Schedules</Trans></Feature>
          <Feature><Trans>Fully-diluted View</Trans></Feature>
          <Feature><Trans>Read-only Access</Trans></Feature>
          <Feature><Trans>Investor Portfolio</Trans></Feature>
        </ul>
      </div>
    </div>


    <div className="col-lg-4">
      <div className="pricing-3 border rounded text-left">
        <ul className="mb-0 mt-5">
          <Feature><Trans>Spreadsheet Import</Trans></Feature>
          <Feature><Trans>Customizable PDF Reports</Trans></Feature>
          <Feature><Trans>CSV Export</Trans></Feature>
          <Feature><Trans>Secure Document Storage</Trans></Feature>
          <Feature><Trans>Attach Documents to Transactions</Trans></Feature>
          <Feature><Trans>Multiple Administrators</Trans></Feature>
          <Feature><Trans>Audit Trails</Trans></Feature>
          <Feature><Trans>Two-Factor Authentication</Trans></Feature>
          <Feature><Trans>Send Holding Confirmations</Trans></Feature>
        </ul>
      </div>
    </div>
  </div>
);
