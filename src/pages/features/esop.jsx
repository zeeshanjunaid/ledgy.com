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
                <Trans>Easily track your vesting schedules</Trans>
              </h2>
              <p>
                <Trans>
                  With Ledgy, setting up your ESOPs will become the simplest of tasks; in a matter
                  of a few clicks, you will have your employee participation plans up and running,
                  whether they are real stock transfers, options from a pool, warrants, or even
                  phantom shares.
                  <br />
                  <br />
                  When it comes to vesting schedules, efficiently setting up their type, duration,
                  cliff, and every other detail will not be a daunting effort. With interactive
                  graphs, you will be able to monitor these schedules in real time, and even better,
                  allow your employees to log in to their accounts so they can see at any point in
                  time how much stock they have vested and how many shares are still outstanding.
                  <br />
                  <br />
                  When needed, terminating or exercising options will be just as intuitive, and any
                  amount that may still be available will continue to be tracked.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-12 mx-auto mb-7" data-aos="fade-up">
                <Img
                  {...props.data.incentivesPage}
                  alt={i18n.t`Overview over vested, granted, and exercised incentives`}
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4">
              <p>
                <Trans>
                  You can create a simple or custom vesting schedule, define over how many months
                  the shares are to be vested, whether there’s a cliff, and how often a new batch of
                  shares gets assigned to the employee.
                  <br />
                  As soon as you enter the first numbers, you will see a visual representation of
                  the current schedule.
                </Trans>
              </p>
            </div>

            <div className="col-md-7 ml-auto" data-aos="fade-left">
              <Img {...props.data.addVesting} alt={i18n.t`Add vesting`} />
            </div>
          </div>

          <hr className="my-8" />

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <p>
                <Trans>
                  In the case that your employee shares are implemented as options or phantom
                  options, define a pool of approved capital first. Click the <i>Add pool</i> to
                  create an options or phantom pool of a given share class and a fixed size. Then
                  issue options, phantom options or shares from the approved capital and see key
                  metrics of the pool like the amount still available.
                </Trans>
              </p>
            </div>

            <div className="col-md-7 order-md-first" data-aos="fade-right">
              <Img {...props.data.addOption} alt={i18n.t`Add an option pool`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-7">
              <p>
                <Trans>
                  When it’s time to exercise option grants, Ledgy calculates for you the amount that
                  is already vested at a given date and lets you exercise parts or the full option
                  grant.
                  <br />
                  <br />
                  Did an employee leave the company? Ledgy supports terminating part or the whole
                  option grant.
                  <br />
                  <br />
                  Filter the transactions by an employee to see all their transactions (option
                  grant, terminations and exercises) at a glance.
                </Trans>
              </p>
            </div>

            <div className="col-md-4 ml-auto" data-aos="fade-left">
              <Img {...props.data.exerciseOption} alt={i18n.t`Issue options from a pool`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-3 ml-auto">
              <p>
                <Trans>
                  To get an overall view of the situation, check out yur <i>Cap Table</i> page and
                  select the <i>fully diluted detailed</i> view to see your pools and employee
                  incentives. You can chose to view your diluted cap table with all options
                  aggregated in their pool, or distributed to each person.
                </Trans>
              </p>
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
                  Once your incentive plan is on Ledgy, it’s time to engage your employees. Head
                  over to the stakeholders page and invite them with a single click. They will then
                  receive an email so they can log in to Ledgy themselves and see how many shares
                  they have vested at any point in time.
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
