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
      description={i18n.t`As a startup, be professional towards your investors, track KPIs, write recurring reports. As an investor, this is the simplest and most time-efficient way to manage your portfolio.`}
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
                <Trans>As a startup, be professional towards your investors</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Track KPIs, write recurring reports and share them with your investors
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  As an investor, this is the simplest and most time-efficient way to manage your
                  portfolio
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
              <Img {...props.data.kpiChart} alt={i18n.t`KPI chart`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center">
            <div className="col-md-5 ml-auto">
              <h2>
                <Trans>Recurring Reports</Trans>
              </h2>
              <ul className="pl-0 pt-3">
                <FeatureLi>
                  <Trans>
                    Successful companies share regular updates with their stakeholders, holding
                    themselves accountable
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Style your reports to your needs with the rich-text editor</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Attach your KPIs and any documents</Trans>
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

          <Hr />

          <div className="row align-items-center">
            <div className="col-md-5 mr-auto">
              <h2>
                <Trans>Key Performance Indicators</Trans>
              </h2>

              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>Every company has KPIs, and investors love seeing them in real-time</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Just copy-paste expected and actual values and customize the plots</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Share them with individual stakeholders or with stakeholder groups</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7" data-aos="fade-left">
              <Img {...props.data.kpiChart} alt={i18n.t`Kpi chart`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center">
            <div className="col-md-4 mr-auto">
              <h2>
                <Trans>Professional portfolio</Trans>
              </h2>

              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>Always up-to-date portfolio, curated by your startups</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Keep an eye on your investments, their value and multiple</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Weekly Email notifications if the startups publish new information</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-8 mx-auto mb-7 order-md-first" data-aos="fade-right">
              <Img {...props.data.dashboardShares} alt={i18n.t`Investor portfolio`} />{' '}
            </div>
          </div>

          <Hr />

          <div className="row align-items-center">
            <div className="col-md-4 mr-auto">
              <h2>
                <Trans>Portfolio history</Trans>
              </h2>

              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>Comprehensive transaction history</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Legal documents associated with the transactions at your fingertips</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-8 mx-auto mb-7" data-aos="fade-left">
              <Img {...props.data.dashboardHistory} alt={i18n.t`Portfolio history`} />{' '}
            </div>
          </div>

          <Hr />

          <div className="row align-items-center">
            <div className="col-md-5 mr-auto">
              <h2>
                <Trans>Complete your portfolio</Trans>
              </h2>

              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    Add an investment, if a company is not using Ledgy yet to complete your
                    portfolio
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Invite the founder or CFO to claim the company and keep the information
                    up-to-date
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 mx-auto order-md-first" data-aos="fade-right">
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
