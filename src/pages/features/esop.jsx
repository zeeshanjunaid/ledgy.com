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
      title={i18n.t`ESOP`}
      section={i18n.t`Features`}
      description={i18n.t`Keep your employees motivated at work. They deserve it. Ledgy's ESOP module will help you to make it happen.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Employee Participation Plans</Trans>
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
                <Trans>Make your employees part of your success</Trans>
              </h2>
              <p>
                <Trans>
                  Set up your ESOPS, whether real stock transfers, options from a pool, warrants, or
                  phantom shares.
                </Trans>
              </p>
              <p>
                <Trans>
                  Configure your vesting schedules and monitor them in real time. Terminate or
                  exercise options when needed.
                </Trans>
              </p>
              <p>
                <Trans>
                  Invite your employees so they can keep track of their option plans, and share any
                  documents with them.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-12 mx-auto mb-7" data-aos="fade-up">
                <Img
                  {...props.data.incentivesPage}
                  alt={i18n.t`Overview over vested, granted and exercised incentives`}
                />
              </div>
            </div>
          </div>

          <hr className="my-8" />

          <div className="row align-items-center my-8">
            <div className="col-md-4 mr-auto">
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>Define pools of approved capital</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Create option or phantom pools of given share classes and fixed sizes
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Issue these shares from the approved capital and see key metrics</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7" data-aos="fade-left">
              <Img {...props.data.addOption} alt={i18n.t`Add an option pool`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4">
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>Create simple or custom vesting schedules</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Define vesting period, cliffs, and how often shares get assigned.</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>See your chart as soon as you start entering numbers</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 order-md-first mr-auto" data-aos="fade-right">
              <Img {...props.data.addVesting} alt={i18n.t`Add vesting`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-7">
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    Exercise option grants at any time, whether vesting is finished or not
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Terminate part of the grant, or all of it</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Filter transactions by employee to see all of their transactions at a glance
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-4 ml-auto" data-aos="fade-left">
              <Img {...props.data.exerciseOption} alt={i18n.t`Issue options from a pool`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-3 ml-auto">
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>See your pools and employee incentives in the cap table</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    In the diluted cap table, see all options aggregated or distributed to each
                    person
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-8 order-md-first" data-aos="fade-right">
              <Img {...props.data.dilutedTable} alt={i18n.t`Show cap table fully diluted`} />
            </div>
          </div>

          <hr className="my-8" />

          <div>
            <header className="section-header text-left">
              <h2>
                <Trans>Engage your employees with more transparency</Trans>
              </h2>
              <p>
                <Trans>
                  Invite your employees with a single click. They will receive an email so they can
                  log in to Ledgy and see how many shares they have vested at any point in time.
                  <br />
                  <br />
                  Remember, happy employees is one of the keys to a successful company.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.optionInPortfolio} alt={i18n.t`ESOPs in the portfolio`} />
              </div>
            </div>
          </div>

          <FeatureLinks {...props} i18n={i18n} page="esop" />
        </div>
      </section>
    </main>
  </div>
));

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...FeaturesFragment

    incentivesPage: imageSharp(fluid: { originalName: { regex: "/incentives-overview.png/" } }) {
      fluid(maxWidth: 900) {
        ...GatsbyImageSharpFluid
      }
    }
    addVesting: imageSharp(fluid: { originalName: { regex: "/add-vesting.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    addOption: imageSharp(fluid: { originalName: { regex: "/add-option.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    exerciseOption: imageSharp(fluid: { originalName: { regex: "/option-exercise.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    dilutedTable: imageSharp(fluid: { originalName: { regex: "/option-diluted-captable.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    optionInPortfolio: imageSharp(
      fluid: { originalName: { regex: "/incentives-dashboard.png/" } }
    ) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
