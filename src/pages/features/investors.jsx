// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Feature';
import { Title, FeatureLi, Hr } from '../../layouts/utils';

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Investor Relations & Portfolio`}
      section={i18n.t`Features`}
      description={i18n.t`Investors love to track the progress of their companies. Help them to be excited about what you have achieved.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Investor Relations & Portfolio</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main className="main-content">
      <section className="section overflow-hidden">
        <div className="container text-left">
          <header className="section-header mb-5 text-left">
            <ul className="pl-0 pt-2">
              <FeatureLi>
                <Trans>Be professional towards your investors as a startup</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>Track and share KPIs and write recurring reports</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  The simplest and most time-efficient way to manage the portfolio as an investor
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Get equity and reporting updates from your portfolio in one place, from
                  transaction history to legal documents, valuations, KPIs and reports
                </Trans>
              </FeatureLi>
            </ul>
          </header>

          <div className="row gap-y">
            <div className="col-md-11 mx-auto mb-7" data-aos="fade-up">
              <Img {...props.data.dashboardShares} alt={i18n.t`Share details`} />
            </div>
          </div>

          <hr className="mb-8" />

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

          <div className="row align-items-center my-8 pb-2">
            <div className="col-md-5 mr-auto">
              <h2>
                <Trans>Key Performance Indicators</Trans>
              </h2>

              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    Integrate your KPIs on Ledgy in a single copy-paste action, including expected
                    and actual values
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Choose their interval, unit, and type of graph you want them to be displayed in
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Share them with individual stakeholders or with whole groups, such as all your
                    investors
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7" data-aos="fade-left">
              <Img {...props.data.kpiChart} alt={i18n.t`Kpi chart`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center my-8 pb-2">
            <div className="col-md-5 ml-auto">
              <h2>
                <Trans>Reports</Trans>
              </h2>
              <ul className="pl-0 pt-3">
                <FeatureLi>
                  <Trans>
                    Generate recurring reports with fixed intervals and attach your KPIs to them
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Our integrated rich text editor makes the typing process really smooth!
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Attach any documents that may need to go along with your report</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Publish your reports once done, which will share them with your selected
                    stakeholders
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 order-md-first" data-aos="fade-right">
              <Img {...props.data.reportExample} alt={i18n.t`Report`} />
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

          <FeatureLinks {...props} i18n={i18n} page="investors" />
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
    kpiChart: imageSharp(fluid: { originalName: { regex: "/kpi-chart.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    reportExample: imageSharp(fluid: { originalName: { regex: "/report-example.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
