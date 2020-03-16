// @flow

import React from 'react';
import { Trans } from '@lingui/react';

export const getCompanyFeaturePricing = () => [
  { text: <Trans>Swiss privacy & security</Trans> },
  { text: <Trans>Cap table</Trans> },
  { text: <Trans>Basic reporting</Trans> },
  { text: <Trans>Basic modeling</Trans> },
  { text: <Trans>Branded reporting</Trans>, startup: false },
  { text: <Trans>Advanced modeling</Trans>, startup: false },
  { text: <Trans>Equity plans</Trans>, startup: false },
  { text: <Trans>Employee dashboard</Trans>, startup: false, scaleup: false },
  {
    text: <Trans>Data rooms</Trans>,
    startup: <Trans>50 MB</Trans>,
    scaleup: <Trans>500 MB</Trans>,
    enterprise: <Trans>Unlimited</Trans>
  },
  { text: <Trans>Data room sharing</Trans>, startup: false },
  {
    text: <Trans>Admin seats</Trans>,
    startup: <Trans>2</Trans>,
    scaleup: <Trans>4</Trans>,
    enterprise: <Trans>Unlimited</Trans>
  },
  {
    text: <Trans>View-only seats</Trans>,
    startup: false,
    scaleup: <Trans>Unlimited</Trans>,
    enterprise: <Trans>Unlimited</Trans>
  },
  {
    text: <Trans>Personal support</Trans>,
    startup: false,
    scaleup: <Trans>Basic</Trans>,
    enterprise: <Trans>Priority</Trans>
  },
  { text: <Trans>Onboarding data audit</Trans>, startup: false, scaleup: false },
  { text: <Trans>Dedicated account manager</Trans>, startup: false, scaleup: false },
  { text: <Trans>SLA</Trans>, startup: false, scaleup: false },
  {
    text: <Trans>Electronic signatures</Trans>,
    startup: false,
    scaleup: <Trans>Standard</Trans>,
    enterprise: <Trans>Qualified</Trans>
  },
  {
    text: <Trans>Document templating</Trans>,
    startup: false,
    scaleup: false,
    enterprise: <Trans>Coming soon</Trans>
  }
];

export const getInvestorFeaturePricing = () => ({
  angelFeatures: [
    <Trans>Up to 10 companies</Trans>,
    <Trans>One investor portfolio with custom and startup-curated entries</Trans>,
    <Trans>Receive reports, KPIs, documents, and sign documents</Trans>,
    <Trans>No support</Trans>
  ],
  fundFeatures: [
    <Trans>Unlimited companies</Trans>,
    <Trans>Unlimited portfolios for your fund</Trans>,
    <Trans>Unlimited admin seats</Trans>,
    <Trans>Premium support and onboarding assistance</Trans>
  ]
});
