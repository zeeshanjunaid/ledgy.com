// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Features';
import { Title } from '../../layouts/utils';

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Funding Round Modeling`}
      section={i18n.t`Features`}
      description={i18n.t`Simulate the outcome of your upcoming financing rounds. Detailed models give you a headstart over angels and VCs.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Funding Round Modeling</Trans>
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
                <Trans>Explore new scenarios for upcoming financing rounds interactively</Trans>
              </h2>
              <p>
                <Trans>
                  Is your startup running well and you’re already thinking about a new financing
                  round to fuel your growth and take your company to the next level?
                  <br />
                  <br />
                  Enter a valuation (pre- or post-money), and you will see how your convertibles
                  apply to your cap table immediately. If your convertible has a cap, discount or an
                  interest—Ledgy does the math for you. Add an investment and enter the value of the
                  investment.
                  <br />
                  <br />
                  Add a new employee pool with a fixed percentage, or increase an existing one to
                  that percentage. You can even choose if it only dilutes existing shareholders or
                  everyone, including the new ones.
                  <br />
                  <br />
                  Watch in real-time how the new investment impacts your current shareholder
                  distribution. You can find the round modeling tool directly on the{' '}
                  <i>Cap Table</i> page.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.roundModelingSample} alt={i18n.t`Round Modeling`} />
              </div>
            </div>
          </div>

          <header className="section-header text-left">
            <div className="row gap-y">
              <div className="col-md-6 ml-auto">
                <Trans>
                  Often you will have a couple of new investors and then existing shareholders will
                  participate pro-rata in the round. You cap table is in Ledgy, so you can
                  distribute an investment amount pro-rata with just a single click.
                </Trans>
              </div>

              <div className="col-md-6" data-aos="fade-left">
                <Img
                  {...props.data.roundModelingProRata}
                  alt={i18n.t`Distribute Investment Pro-Rata`}
                />
              </div>
            </div>
          </header>

          <div>
            <header className="section-header text-left">
              <p>
                <Trans>
                  Scroll down, and you will notice that the cap table now indicates the{' '}
                  <i>Round Modeling</i> mode. This gives you a detailed overview of who owns how
                  many shares after applying the new financing round.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-left">
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
              <p>
                <Trans>
                  After you’re finished with modeling your financing round, you can download the
                  scenario as a PDF document and share it with your co-founders, lawyers and
                  investors. The document includes the pre- and post-money valuation of your
                  company, all investments, and convertibles with their resulting share price and
                  the number of shares and, of course, the resulting cap table. At the end of the
                  document, you will also find valuable plots to visualize the new development step
                  of your company.
                </Trans>
              </p>
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
              <p>
                <Trans>
                  As soon as you’re done with your financing round, hit the <i>Convert</i> button.
                  This will transform the scenario into real transactions for your cap table.
                </Trans>
              </p>
            </div>

            <div className="col-md-5" data-aos="fade-left">
              <Img {...props.data.roundModelingConvert} alt={i18n.t`Convert financing round`} />
            </div>
          </div>

          <FeatureLinks {...props} i18n={i18n} page="round-modeling" />
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
  }
`;
