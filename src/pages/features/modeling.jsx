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
      title={i18n.t`Round and Exit Modeling`}
      section={i18n.t`Features`}
      description={i18n.t`Simulate the outcome of your upcoming financing rounds. Detailed models give you a headstart over angels and VCs.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Round and Exit Modeling</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main className="main-content">
      <section className="section overflow-hidden">
        <div className="container text-left">
          <header className="section-header text-left">
            <ul className="pl-0 pt-2">
              <FeatureLi>
                <Trans>
                  Understand how dilution works by quickly comparing different modeling scenarios
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Flexible yet intuitive round modeling supporting convertibles, fixed employee
                  pools and pro-rata distribution
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Assess the impact of liquidation preferences with waterfall analysis and
                  breakpoint charts
                </Trans>
              </FeatureLi>
            </ul>
          </header>

          <div className="row gap-y">
            <div className="col-md-10 mx-auto" data-aos="fade-up">
              <Img {...props.data.roundModelingSample} alt={i18n.t`Round Modeling`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center my-8 pb-2">
            <div className="col-md-6 ml-auto">
              <h2>
                <Trans>Get the calculations right</Trans>
              </h2>
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    Add convertibles with cap, discount and interest and see how they convert during
                    the next round
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    See how many shares have to be reserved for a fixed percentage employee pool
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Use pre- or post-money valuation and see the respective other</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-5 order-md-first" data-aos="fade-right">
              <Img {...props.data.convertibleForm} alt={i18n.t`Get the calculations right`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center my-8 pb-2">
            <div className="col-md-6 ml-auto">
              <h2>
                <Trans>Compare and share scenarios</Trans>
              </h2>
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>Add any number of scenarios to compare different possibilities</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Copy an existing scenario to compare a few details</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Share your scenarios as pdf, including valuations, investments, convertibles,
                    amount of shares, and cap table
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-5" data-aos="fade-left">
              <Img {...props.data.modelingScenarios} alt={i18n.t`Compare and share scenarios`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center my-8 pb-2">
            <div className="col-md-6 mr-auto">
              <h2>
                <Trans>Adjust your simulations</Trans>
              </h2>
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    Play around with founder- or investor-friendly settings, let convertibles and
                    pools dilute all or only the existing shareholders
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Rounded share price, or exact to 10 decimals</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Round to nearest integer or always down</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-5 order-md-first" data-aos="fade-right">
              <Img {...props.data.simulationSettings} alt={i18n.t`Simulation settings`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center my-8 pb-2">
            <div className="col-md-6 ml-auto">
              <h2>
                <Trans>Pro-rata distribution</Trans>
              </h2>
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    Ledgy makes it easy to simulate an investment with a pro-rata distribution
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Uses your existing cap table percentages to distribute a fixed amount
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-5" data-aos="fade-left">
              <Img
                {...props.data.roundModelingProRata}
                alt={i18n.t`Distribute investment pro-rata`}
              />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center">
            <div className="col-md-5 ml-auto">
              <h2>
                <Trans>Diluted cap table</Trans>
              </h2>
              <ul className="pl-0 pt-3">
                <FeatureLi>
                  <Trans>Understand the dilution impact of the financing round</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    When in round modeling, the cap table below shows the distribution after the
                    round
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 order-md-first" data-aos="fade-right">
              <Img
                {...props.data.roundModelingCaptable}
                alt={i18n.t`Cap table during round modeling`}
              />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center">
            <div className="col-md-6 ml-auto">
              <h2>
                <Trans>Convert to transactions</Trans>
              </h2>
              <ul className="pl-0 pt-3">
                <FeatureLi>
                  <Trans>
                    Automatically update the stakeholder list, transaction history and cap table
                    after the round is finished
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Convert the final scenario in just two clicks</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <Img {...props.data.roundModelingConvert} alt={i18n.t`Convert financing round`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center pb-7">
            <div className="col-md-5 mr-auto">
              <h2>
                <Trans>Exit Modeling</Trans>
              </h2>
              <ul className="pl-0 pt-3">
                <FeatureLi>
                  <Trans>Understand the impact of liquidation preferences</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Supports non-participating, participating with and without cap, and interest
                    payment
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Calculates waterfall analysis of liquidation preferences accross all rounds
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Breakpoint analysis show in which valuation ranges the preferences have an
                    effect and let you optimally plan your strategy
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 order-md-first" data-aos="fade-right">
              <Img {...props.data.exitModeling} alt={i18n.t`Exit Modeling`} />
            </div>
          </div>

          <FeatureLinks {...props} i18n={i18n} page="modeling" />
        </div>
      </section>
    </main>
  </div>
));

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...FeaturesFragment

    roundModelingSample: imageSharp(
      fluid: { originalName: { regex: "/round-modeling-sample.png/" } }
    ) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    roundModelingCaptable: imageSharp(
      fluid: { originalName: { regex: "/round-modeling-captable.png/" } }
    ) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    simulationSettings: imageSharp(
      fluid: { originalName: { regex: "/simulation-settings.png/" } }
    ) {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
    roundModelingProRata: imageSharp(
      fluid: { originalName: { regex: "/round-modeling-pro-rata.png/" } }
    ) {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
    roundModelingPdf: imageSharp(fluid: { originalName: { regex: "/round-modeling-pdf.png/" } }) {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
    roundModelingConvert: imageSharp(
      fluid: { originalName: { regex: "/round-modeling-convert.png/" } }
    ) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    exitModeling: imageSharp(fluid: { originalName: { regex: "/exit-modeling.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    convertibleForm: imageSharp(fluid: { originalName: { regex: "/uri.jpg/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    modelingScenarios: imageSharp(fluid: { originalName: { regex: "/uri.jpg/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
