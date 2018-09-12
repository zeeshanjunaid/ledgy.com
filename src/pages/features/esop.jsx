// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Features';
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
            <h1><Trans>Employee Incentive Plans</Trans></h1>
          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section overflow-hidden">
        <div className="container text-left">

          <div>
            <header className="section-header text-left">
              <h2><Trans>Make your employees happy</Trans></h2>
              <p>
                <Trans>
                  Are you building a fast-growing company and want your valuable
                  employees to be part of your success?
                  Ledgy offers you a powerful module to manage your
                  employee incentive plans.
                  No matter if you transfer real stock from your company to an employee,
                  options from a fixed-size pool of approved capital or even phantom stock.
                  <br /><br />
                  Terminate or exercise the options and keep track of the amount
                  which is still available.
                  <br /><br />
                  Add a vesting schedule to your ESOPs and track their status in real-time.
                  Coolest thing ever, let your employees log in to Ledgy and allow them
                  to see at any point in time how much stock they have already vested and
                  how many shares are still outstanding.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.addOption} alt={i18n.t`Add incentive plan`} />
              </div>
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4">
              <p>
                <Trans>
                  You can create a detailed vesting schedule by defining over how
                  many months the shares are to be vested, wether there’s a cliff and
                  how often a new batch of shares gets assigned to the employee.<br />
                  As soon as you enter the first numbers, you will see a visual representation
                  of the current schedule.
                </Trans>
              </p>
            </div>

            <div className="col-md-8 ml-auto" data-aos="fade-left">
              <Img {...props.data.vestingSchedule} alt={i18n.t`Vesting schedule for ESOPs`} />
            </div>
          </div>

          <hr className="my-8" />

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <p>
                <Trans>
                  In the case that your employee shares are implemented as options
                  or phantom options, define a pool of approved capital first.
                  Click the <i>Add pool</i> to create an options or
                  phantom pool of a given share class and a fixed size.
                  Then issue options, phantom options or shares from the approved
                  capital and see key metrics of the pool like the amount still available.
                </Trans>
              </p>
            </div>

            <div className="col-md-8 order-md-first" data-aos="fade-right">
              <Img {...props.data.addPool} alt={i18n.t`Add an incentives pool`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-5 ml-auto">
              <p>
                <Trans>
                  When it’s time to exercise option grants, Ledgy calculates for you the
                  amount that is already vested at a given date and lets you exercise
                  parts or the full option grant.<br /><br />
                  Did an employee leave the company? Ledgy supports terminating part
                  or the whole option grant.<br /><br />
                  Filter the transactions by an
                  employee to see all their transactions (option grant,
                  terminations and exercises) at a glance.
                </Trans>
              </p>
            </div>

            <div className="col-md-7" data-aos="fade-left">
              <Img {...props.data.exerciseOption} alt={i18n.t`Issue options from a pool`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-3 ml-auto">
              <p>
                <Trans>
                  Check back at your <i>Cap Table</i> and select the <i>fully diluted</i> view
                  to see the newly created pool and employee incentives. You can even view your
                  diluted cap table with all options aggregated in their pool, or distributed to
                  each person (detailed view).
                </Trans>
              </p>
            </div>

            <div className="col-md-9 order-md-first" data-aos="fade-right">
              <Img {...props.data.dilutedTable} alt={i18n.t`Show cap table fully diluted`} />
            </div>
          </div>

          <hr className="my-8" />

          <div>
            <header className="section-header text-left">
              <h2><Trans>Keep your employees engaged</Trans></h2>
              <p>
                <Trans>
                  Once your incentive plan is on Ledgy, it’s time to
                  engage your employees.
                  They can log in to Ledgy themselves with their email
                  address at any time and see how many shares they have already vested.
                  Invite them with a click on the shareholders page.
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
  query ESOPQuery {
    ...FeaturesFragment

    addOption: imageSharp(id: { regex: "/option-add.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    vestingSchedule: imageSharp(id: { regex: "/vesting-schedule.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    addPool: imageSharp(id: { regex: "/add-pool.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    exerciseOption: imageSharp(id: { regex: "/option-exercise.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    dilutedTable: imageSharp(id: { regex: "/option-diluted-captable.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    optionInPortfolio: imageSharp(id: { regex: "/incentives-dashboard.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
  }
`;
