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
          <div>
            <header className="section-header text-left">
              <h2>
                <Trans>Explore new scenarios interactively</Trans>
              </h2>
              <p>
                <Trans>
                  Ready to explore different financing round situations? Wondering how the stakes
                  would distribute in the case of an exit?
                </Trans>
              </p>
              <p>
                <Trans>
                  <strong>Quickly model</strong> all sorts of different situations,{' '}
                  <strong>understand dilution </strong> in such events, and assess the impact of{' '}
                  <strong>liquidation preferences</strong>.
                </Trans>
              </p>
              <p>
                <Trans>Start entering your data and see your model shape up in real time!</Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto" data-aos="fade-up">
                <Img {...props.data.roundModelingSample} alt={i18n.t`Round Modeling`} />
              </div>
            </div>
          </div>

          <hr className="my-8" />

          <div>
            <header className="section-header text-left">
              <div className="row gap-y">
                <div className="col-md-6 ml-auto">
                  <ul className="pl-0 pt-2">
                    <FeatureLi>
                      <Trans>Adjust shares rounding as preferred</Trans>
                    </FeatureLi>
                    <FeatureLi>
                      <Trans>Include or exclude convertibles and pools in the share price</Trans>
                    </FeatureLi>
                  </ul>
                </div>

                <div className="col-md-6" data-aos="fade-left">
                  <Img {...props.data.simulationSettings} alt={i18n.t`Simulation settings`} />
                </div>
              </div>
            </header>
          </div>

          <div>
            <header className="section-header text-left">
              <div className="row gap-y">
                <div className="col-md-6 ml-auto">
                  <ul className="pl-0 pt-2">
                    <FeatureLi>
                      <Trans>Need to distribute an investment pro-rata?</Trans>
                    </FeatureLi>
                    <FeatureLi>
                      <Trans>Simply enter the amount and investors participating</Trans>
                    </FeatureLi>
                  </ul>
                </div>

                <div className="col-md-6 order-md-first" data-aos="fade-right">
                  <Img
                    {...props.data.roundModelingProRata}
                    alt={i18n.t`Distribute Investment Pro-Rata`}
                  />
                </div>
              </div>
            </header>
          </div>

          <div>
            <header className="section-header my-5 text-left">
              <p>
                <Trans>
                  When in round modeling mode, your cap table will show you how the distribution
                  looks if you materialize your round.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-right">
                <Img
                  {...props.data.roundModelingCaptable}
                  alt={i18n.t`Cap table during round modeling`}
                />
              </div>
            </div>
          </div>

          <div>
            <header className="section-header text-left mt-3">
              <h2>
                <Trans>Share your scenarios</Trans>
              </h2>
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    After financing round modeling, download the scenario as PDF and share it with
                    your co-founders, lawyers and investors
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Documents include valuations, investments, convertibles, amount of shares, and
                    cap table, all put together in tables and graphs
                  </Trans>
                </FeatureLi>
              </ul>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up-right">
                <Img
                  {...props.data.roundModelingPdf}
                  alt={i18n.t`PDF export of the financing round`}
                />
              </div>
            </div>
          </div>

          <hr className="my-8" />

          <div className="row align-items-center">
            <div className="col-md-6 ml-auto">
              <h2>
                <Trans>Convert to transactions</Trans>
              </h2>
              <ul className="pl-0 pt-3">
                <FeatureLi>
                  <Trans>Is your model becoming a reality?</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    In two clicks, convert the scenario to real transactions for your cap table
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <Img {...props.data.roundModelingConvert} alt={i18n.t`Convert financing round`} />
            </div>
          </div>

          <hr className="my-8" />

          <div className="row align-items-center pb-7">
            <div className="col-md-4 mr-auto">
              <h2>
                <Trans>Exit Modeling</Trans>
              </h2>
              <ul className="pl-0 pt-3">
                <FeatureLi>
                  <Trans>Ready to sell out?</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Test all exit possibilites with our premium exit modeling tool</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-8 order-md-first" data-aos="fade-right">
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
  }
`;
