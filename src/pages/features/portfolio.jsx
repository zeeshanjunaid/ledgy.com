// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Feature';
import { Title, FeatureLi } from '../../layouts/utils';

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Investor Portfolio`}
      section={i18n.t`Features`}
      description={i18n.t`Investors love to track the progress of their companies. Help them to be excited about what you have achieved.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Investor Portfolio</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main className="main-content">
      <section className="section overflow-hidden">
        <div className="container text-left">
          <div>
            <header className="section-header mb-5 text-left">
              <h2>
                <Trans>Your portfolio at a glance</Trans>
              </h2>
              <p>
                <Trans>
                  As an investor, have all your portfolio companies using Ledgy synchronized in one
                  place. See KPIs and Reports of your investments at a glance, and visualize all of
                  your data in a friendly UI.
                </Trans>
              </p>
              <p>
                <Trans>
                  Never lose track of how much you invested in which company and what’s the
                  approximate value of your investments today.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-11 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.dashboardShares} alt={i18n.t`Share details`} />
              </div>
            </div>
          </div>

          <hr className="mb-8" />

          <div className="row align-items-center pb-8">
            <div className="col-md-5 mr-auto">
              <h2>
                <Trans>Monitor all your investments</Trans>
              </h2>

              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    See detailed metrics in your portfolio table and a summary in your company cards
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Data can be visualized aggregated or filtered by company</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 mx-auto mb-7" data-aos="fade-left">
              <Img {...props.data.dashboardCards} alt={i18n.t`Investment overview`} />
            </div>
          </div>

          <div className="row align-items-center pb-8">
            <div className="col-md-4 mr-auto">
              <h2>
                <Trans>Keep track of your history</Trans>
              </h2>

              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>With the transaction history table and plot</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-8 mx-auto mb-7 order-md-first" data-aos="fade-right">
              <Img {...props.data.dashboardHistory} alt={i18n.t`Transaction history`} />{' '}
            </div>
          </div>

          <div className="row align-items-center pb-8">
            <div className="col-md-5 mr-auto">
              <h2>
                <Trans>Smoothly add investments</Trans>
              </h2>

              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>It’s never been easier to centralize your data</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Fill out the form and have your portfolio immediately updated</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 mx-auto" data-aos="fade-left">
              <Img {...props.data.addInvestment} alt={i18n.t`Add portfolio investment`} />
            </div>
          </div>

          <FeatureLinks {...props} i18n={i18n} page="portfolio" />
        </div>
      </section>
    </main>
  </div>
));

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...FeaturesFragment

    dashboardCards: imageSharp(fluid: { originalName: { regex: "/dashboard-cards.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    dashboardShares: imageSharp(fluid: { originalName: { regex: "/dashboard-shares.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    dashboardHistory: imageSharp(fluid: { originalName: { regex: "/dashboard-history.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    addInvestment: imageSharp(fluid: { originalName: { regex: "/add-investment.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
