// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Feature';
import { Title } from '../../layouts/utils';

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
                  Is your startup thriving and you’re already thinking about a new financing round
                  to fuel your growth and take your company to the next level? Or maybe you are
                  ready for a new adventure and would like to see what chunk of the pie each
                  stakeholder gets if you proceed with an exit?
                  <br />
                  <br />
                  Ledgy’s modeling tools are exactly made for you to dive into all of these
                  possibilities, allowing you to <strong>quickly model</strong> all sorts of
                  different situations, <strong>understand how dilution works</strong> in such
                  events, and assess the impact of <strong>liquidation preferences</strong>.
                  <br />
                  <br />
                  For a new round, start by entering a valuation (pre- or post-money) and you’ll
                  immediately see how your convertibles apply to your cap table. Whether they have a
                  cap, interest, or discount, Ledgy will do the math for you. Add investments and
                  employee pools with a fixed percentage, or increase an existing one to that
                  percentage. You can even choose if it only dilutes existing shareholders or
                  everyone, including the new ones.
                  <br />
                  <br />
                  Watch in real time how the new investment impacts your current shareholder
                  distribution. You can find the round modeling tool directly on the{' '}
                  <i>Cap Table</i> page.
                </Trans>
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
                  <Trans>
                    Tweak different parameters of the simulation as they best suit you by clicking
                    on <i>Actions</i> and <i>Settings</i>. You can adjust shares rounding, as well
                    as including or excluding convertibles and pools in the share price.
                  </Trans>
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
                  <Trans>
                    Often you will have a couple of new investors, and then existing shareholders
                    will participate pro-rata in the round. Your cap table is on Ledgy, so you can
                    distribute an investment amount pro-rata with just a single click.
                  </Trans>
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
              <p>
                <Trans>
                  What if your company is worth such an amount that makes you think about an exit?
                  With the Premium Exit Modeling feature, Ledgy will do an insane amount of math to
                  show you the distribution of stakes in all possible situations.
                </Trans>
              </p>
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
