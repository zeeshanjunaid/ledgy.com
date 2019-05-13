// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Feature';
import { Title, FeatureList, FeatureLi, Hr } from '../../layouts/utils';

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

          <FeatureList
            textSize="5"
            header={<Trans>Get the calculations right</Trans>}
            features={[
              <Trans>
                Add convertibles with cap, discount and interest and see how they convert during the
                next round
              </Trans>,
              <Trans>
                See how many shares have to be reserved for a fixed percentage employee pool
              </Trans>,
              <Trans>Use pre- or post-money valuation and see the respective other</Trans>
            ]}
            imgSize="7"
            img={<Img {...props.data.convertibleForm} alt={i18n.t`Get the calculations right`} />}
            imgFirst
          />

          <Hr />

          <FeatureList
            textSize="5"
            header={<Trans>Compare and share scenarios</Trans>}
            features={[
              <Trans>Add any number of scenarios to compare different possibilities</Trans>,
              <Trans>Copy an existing scenario to compare a few details</Trans>,
              <Trans>
                Share your scenarios as pdf, including valuations, investments, convertibles, amount
                of shares, and cap table
              </Trans>
            ]}
            imgSize="6"
            img={
              <Img {...props.data.modelingScenarios} alt={i18n.t`Compare and share scenarios`} />
            }
          />

          <Hr />

          <FeatureList
            textSize="6"
            header={<Trans>Adjust your simulations</Trans>}
            features={[
              <Trans>
                Play around with founder- or investor-friendly settings, let convertibles and pools
                dilute all or only the existing shareholders
              </Trans>,
              <Trans>Rounded share price, or exact to 10 decimals</Trans>,
              <Trans>
                Share your scenarios as pdf, including valuations, investments, convertibles, amount
                of shares, and cap table
              </Trans>
            ]}
            imgSize="6"
            img={<Img {...props.data.simulationSettings} alt={i18n.t`Simulation settings`} />}
            imgFirst
          />

          <Hr />

          <FeatureList
            textSize="6"
            header={<Trans>Pro-rata distribution</Trans>}
            features={[
              <Trans>
                Ledgy makes it easy to simulate an investment with a pro-rata distribution
              </Trans>,
              <Trans>Uses your existing cap table percentages to distribute a fixed amount</Trans>
            ]}
            imgSize="5"
            img={
              <Img
                {...props.data.roundModelingProRata}
                alt={i18n.t`Distribute investment pro-rata`}
              />
            }
          />

          <Hr />

          <FeatureList
            textSize="4"
            header={<Trans>Diluted cap table</Trans>}
            features={[
              <Trans>Understand the dilution impact of the financing round</Trans>,
              <Trans>
                When in round modeling, the cap table below shows the distribution after the round
              </Trans>
            ]}
            imgSize="8"
            img={
              <Img
                {...props.data.roundModelingCaptable}
                alt={i18n.t`Cap table during round modeling`}
              />
            }
            imgFirst
          />

          <Hr />

          <FeatureList
            textSize="6"
            header={<Trans>Convert to transactions</Trans>}
            features={[
              <Trans>
                Automatically update the stakeholder list, transaction history and cap table after
                the round is finished
              </Trans>,
              <Trans>Convert the final scenario in just two clicks</Trans>
            ]}
            imgSize="6"
            img={<Img {...props.data.roundModelingConvert} alt={i18n.t`Convert financing round`} />}
          />

          <Hr />

          <FeatureList
            textSize="5"
            header={<Trans>Exit Modeling</Trans>}
            features={[
              <Trans>Understand the impact of liquidation preferences</Trans>,
              <Trans>
                Supports non-participating, participating with and without cap, and interest payment
              </Trans>,
              <Trans>
                Calculates waterfall analysis of liquidation preferences accross all rounds
              </Trans>,
              <Trans>
                Breakpoint analyses show in which valuation ranges the preferences have an effect
                and let you optimally plan your strategy
              </Trans>
            ]}
            imgSize="7"
            img={<Img {...props.data.exitModeling} alt={i18n.t`Exit Modeling`} />}
            imgFirst
          />

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
    convertibleForm: imageSharp(fluid: { originalName: { regex: "/convertible-form.png/" } }) {
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
