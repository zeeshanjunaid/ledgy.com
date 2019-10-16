// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import Img from 'gatsby-image';
import sample from 'lodash/sample';

import { demoUrl, targetBlank, appUrl, trackSignup, isBrowser } from '../layouts/utils';

const oldExperiments = [
  {
    name: 'master',
    title: <Trans>The New Standard in Equity Management</Trans>,
    subtitle: <Trans>Made for startups, great for investors</Trans>
  },
  {
    name: 'lostTrack',
    title: <Trans>Round Modeling. Made Simple.</Trans>,
    subtitle: (
      <Trans>Lost track of who owns how many shares in your startup? Let Ledgy deal with it.</Trans>
    )
  },
  {
    name: 'modelFinancingRound',
    title: <Trans>Round Modeling. Made Simple.</Trans>,
    subtitle: <Trans>Want to model the new financing round for your company? Use Ledgy!</Trans>
  },
  {
    name: 'investorRelations',
    title: <Trans>Investor relations and equity management for startups</Trans>,
    subtitle: (
      <Trans>Share important documents with your investors, advisory board and employees.</Trans>
    )
  }
];

const getExperiment = () => {
  const experiment = isBrowser ? sample(oldExperiments) : oldExperiments[0];
  return experiment;
};

// eslint-disable-next-line import/prefer-default-export
export const HomePageHeader = ({ i18n, data }: Props) => {
  const experiment = getExperiment();
  return (
    <header className="header bg-ledgy home-banner px-1 text-left ">
      <div className="container">
        <div className="row gap-y mt-md-2 pb-4 pb-md-6">
          <div className="col-lg-6">
            <h1 className="text-white mb-2 mb-sm-3">{experiment.title}</h1>
            <h5 className="text-white font-weight-light pb-4 pb-lg-6 mb-0">
              {experiment.subtitle}
            </h5>

            <div className="text-white pb-5 pb-lg-7 banner-text">
              <Trans>
                Get your cap table and employee participation plans right, from the beginning. Make
                your financing rounds a success and engage your investors and employees. Know your
                data is safe and compliant.
              </Trans>
            </div>
            <a
              className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-outline-light"
              href={demoUrl}
              onClick={() => trackSignup('clickDemo')}
              {...targetBlank}
            >
              <Trans>See the Demo</Trans>
            </a>
            <a
              className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-light"
              href={`${appUrl}/signup`}
              onClick={trackSignup}
            >
              <Trans>Get Started Free</Trans>
            </a>
          </div>
          <div className="col-lg-6">
            <div id="tablet-ledgy" data-aos="fade-up">
              <Img {...data.tablet} alt={i18n.t`Screenshot of the Ledgy app`} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
