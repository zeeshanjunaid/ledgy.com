// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Feature';
import { Title, FeatureList, FeatureLi, Hr, ChevronRight } from '../../layouts/utils';

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
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>Save hours of work by getting rid of manual spreadsheet processes</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Supports everything from pools to options, phantom options, warrants, vested
                    stock and inverse vesting
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Keep track of any vesting schedule</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Get notified of important vesting and expiry events and engage your employees by
                    inviting them to track their stake on Ledgy
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Get started in minutes with the copy-paste spreadsheet importer</Trans>
                </FeatureLi>
              </ul>
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

          <Hr />

          <FeatureList
            textSize="5"
            header={<Trans>Supports everything</Trans>}
            features={[
              <Trans>
                Create option or phantom pools reserved for employees and keep track of how much is
                granted, available, vested and exercised
              </Trans>,
              <Trans>
                Grant options, phantom options, warrants or add inverse vesting to stock
                transactions
              </Trans>,
              <Trans>Track exercise, termination and expiration</Trans>
            ]}
            imgSize="7"
            fade="left"
            img={<Img {...props.data.addOption} alt={i18n.t`Add an option pool`} />}
          />

          <Hr />

          <div className="row align-items-center my-8 pb-3">
            <div className="col-md-5">
              <h2>
                <Trans>Any vesting schedule</Trans>
              </h2>
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>Add vesting or inverse vesting to any transaction</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Either use simple linear vesting with duration, interval and cliff, define your
                    own custom vesting schedule, or select a preset
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Visualizations help you understand what happens</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 order-md-first mr-auto" data-aos="fade-right">
              <Img {...props.data.addVesting} alt={i18n.t`Add vesting`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center my-8">
            <div className="col-md-5 ml-auto">
              <h2>
                <Trans>Engage your employees</Trans>
              </h2>
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    Get notified two weeks before a cliff or vesting ends or a grant expires to not
                    miss using your participation plan for engaging your employees
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Invite your employees to track their stake and vesting in their Ledgy portfolio
                  </Trans>
                </FeatureLi>
              </ul>
              <Link href to={`${props.prefix}/features/collaboration/`}>
                Learn more about collaboration
                <ChevronRight />
              </Link>
            </div>

            <div className="col-md-7" data-aos="fade-left">
              <Img
                {...props.data.notificationEmail}
                alt={i18n.t`Email notification about upcoming vesting event`}
              />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center my-8">
            <div className="col-md-5 ml-auto">
              <h2>
                <Trans>Diluted cap table</Trans>
              </h2>
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>See your pools and employee participation grants in the cap table</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Choose to only show pools or the detailed view with the grants distributed to
                    their holders
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 order-md-first" data-aos="fade-right">
              <Img {...props.data.dilutedTable} alt={i18n.t`Show cap table fully diluted`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <h2>
                <Trans>Spreadsheet importer</Trans>
              </h2>
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>Get started in minutes with the copy-paste spreadsheet importer</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Copy-pasting employee grants from your existing spreadsheet</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-8" data-aos="fade-left">
              <Img {...props.data.bulkEntry} alt={i18n.t`Bulk entry`} />
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
    dilutedTable: imageSharp(fluid: { originalName: { regex: "/option-diluted-captable.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    notificationEmail: imageSharp(fluid: { originalName: { regex: "/uri.jpg/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    bulkEntry: imageSharp(fluid: { originalName: { regex: "/uri.jpg/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
