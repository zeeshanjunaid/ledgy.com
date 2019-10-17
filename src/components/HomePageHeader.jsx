// @flow

import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import Img from 'gatsby-image';
import sample from 'lodash/sample';

import { demoUrl, targetBlank, appUrl, trackSignup, isBrowser } from '../layouts/utils';

const languageMap = {
  en: {
    titleKey: 'titleEn',
    subtitleKey: 'subtitleEn'
  },
  de: {
    titleKey: 'titleDe',
    subtitleKey: 'subtitleDe'
  },
  fr: {
    titleKey: 'titleFr',
    subtitleKey: 'subtitleFr'
  }
};

type ExperimentKeys = {
  name: string,
  titleKey: string,
  subtitleKey: string
};

type Experiment = {
  name: string,
  title: string,
  subtitle: string
};

const getExperiment = (experiments: ExperimentKeys[], lang: string): Experiment => {
  const sampledExperiment = isBrowser ? sample(experiments) : experiments[0];
  const { titleKey, subtitleKey } = languageMap[lang];
  return {
    name: sampledExperiment.name,
    title: sampledExperiment[titleKey],
    subtitle: sampledExperiment[subtitleKey]
  };
};

// eslint-disable-next-line import/prefer-default-export
export const HomePageHeader = ({ i18n, data, lang }: Props) => {
  const headers = useStaticQuery(
    graphql`
      {
        allContentfulLandingPage {
          edges {
            node {
              id
              name
              titleEn
              titleDe
              titleFr
              subtitleEn
              subtitleDe
              subtitleFr
            }
          }
        }
      }
    `
  );
  const experiments = headers.allContentfulLandingPage.edges.map(edge => edge.node);
  const { title, subtitle, name } = getExperiment(experiments, lang);

  useEffect(() => {
    window.experiment = name;
    if (window.ga) window.ga('set', 'dimension1', window.experiment);
  }, []);

  return (
    <header className="header bg-ledgy home-banner px-1 text-left ">
      <div className="container">
        <div className="row gap-y mt-md-2 pb-4 pb-md-6">
          <div className="col-lg-6">
            <h1 className="text-white mb-2 mb-sm-3">{title}</h1>
            <h5 className="text-white font-weight-light pb-4 pb-lg-6 mb-0">{subtitle}</h5>
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
