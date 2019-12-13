// @flow

import React, { useEffect, type Node } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import Img from 'gatsby-image';
import sample from 'lodash/sample';

import { demoUrl, targetBlank, appUrl, isBrowser, trackSignupGoogleAnalytics } from '../helpers';

const languageKeys = {
  en: {
    title: 'titleEn',
    subtitle: 'subtitleEn'
  },
  de: {
    title: 'titleDe',
    subtitle: 'subtitleDe'
  },
  fr: {
    title: 'titleFr',
    subtitle: 'subtitleFr'
  }
};

type Experiment = {
  name: string,
  title: string,
  subtitle: string
};

type ExperimentKeys = Experiment;

const getExperiment = (experiments: ExperimentKeys[], lang: string): Experiment => {
  const sampledExperiment = isBrowser ? sample(experiments) : experiments[0];
  const { title: titleKey, subtitle: subtitleKey } = languageKeys[lang];
  return {
    name: sampledExperiment.name,
    title: sampledExperiment[titleKey],
    subtitle: sampledExperiment[subtitleKey]
  };
};

declare type HeaderButton = {| props: Object, text: Node |};

export const HeaderLayout = ({
  title,
  subtitle,
  buttonOne,
  buttonTwo,
  customButton,
  image
}: {|
  title: Node | string,
  subtitle: Node | string,
  buttonOne: HeaderButton,
  buttonTwo?: HeaderButton,
  customButton?: Node,
  image: Node
|}) => (
  <header className="header bg-ledgy d-flex home-banner px-1 text-left ">
    <div className="container my-auto">
      <div className="row gap-y mt-md-2 pb-4 pb-md-6">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <div className="mt-md-n6 mb-md-4">
            <h1 className="text-white mb-2 mb-sm-3">{title}</h1>
            <div className="big-text text-white font-weight-light pb-3">{subtitle}</div>
          </div>
          <div>
            <a
              className={`btn btn-block d-sm-inline btn-xl mx-1 btn-round ${
                buttonTwo ? 'btn-outline-light' : 'btn-light'
              }`}
              {...buttonOne.props}
            >
              {buttonOne.text}
            </a>
            {!!buttonTwo && (
              <a
                className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-light"
                {...buttonTwo.props}
              >
                {buttonTwo.text}
              </a>
            )}
            {customButton}
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">{image}</div>
      </div>
    </div>
  </header>
);

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

  const buttonOne = {
    props: {
      href: demoUrl,
      onClick: () => trackSignupGoogleAnalytics('clickDemo'),
      ...targetBlank
    },
    text: <Trans>See the Demo</Trans>
  };
  const buttonTwo = {
    props: { href: `${appUrl}/signup`, onClick: trackSignupGoogleAnalytics, ...targetBlank },
    text: <Trans>Get Started Free</Trans>
  };
  return (
    <HeaderLayout
      title={title}
      subtitle={subtitle}
      buttonOne={buttonOne}
      buttonTwo={buttonTwo}
      image={
        <div id="tablet-ledgy" data-aos="fade-up">
          <Img {...data.tablet} alt={i18n.t`Screenshot of the Ledgy app`} />
        </div>
      }
    />
  );
};
