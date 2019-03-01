// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Features';
import { Title } from '../../layouts/utils';

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Single source of truth`}
      section={i18n.t`Features`}
      description={i18n.t`Track the complete history of your shares. Integrated consistency checks will guarantee that your cap table is error-free. Collaborate on a single source of truth.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>A Trusted Single Source of Truth</Trans>
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
                <Trans>Replace your Excel with Ledgy</Trans>
              </h2>
              <p>
                <Trans>
                  Keep the ownership history of your company at a single place. No more shuffling
                  around with different documents shared via email, Dropbox, Google Drive or Slack.
                  <br />
                  Ledgy will be your single source of truth. And it’s a damn good one!
                  <br />
                  <br />
                  To get started enter all your ownership transactions into Ledgy. That’s an
                  excellent opportunity to understand what has been going on in your cap table.
                  <br />
                  <br />
                  Need help?{' '}
                  <Link href to={`${props.prefix}/contact/`}>
                    Contact us
                  </Link>
                  , and we will assist you to get started with Ledgy.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.createCaptable} alt={i18n.t`Create a cap table`} />
              </div>
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4">
              <p>
                <Trans>
                  Oops, there was an error in your cap table? Don’t worry; Ledgy will assist you in
                  getting your cap table straight.
                  <br />
                  Once finished, sit back and relax. Now you can be assured that your cap table is
                  error-free.
                </Trans>
              </p>
            </div>

            <div className="col-md-8 ml-auto" data-aos="fade-left">
              <Img {...props.data.transactionError} alt={i18n.t`Transaction error checking`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <p>
                <Trans>
                  Did you notice the number in the center bottom? Any time you transfer shares from
                  one shareholder to another, Ledgy will show you how many shares that particular
                  shareholder has <i>available</i> at that given point in time.
                </Trans>
              </p>
            </div>

            <div className="col-md-8 order-md-first" data-aos="fade-right">
              <Img {...props.data.availableShares} alt={i18n.t`Available shares for transfer`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <p>
                <Trans>
                  By the way, if you decide to number your shares, we also got you covered. Ledgy
                  will track who owns which shares for each transaction and assist you in entering
                  valid share numbers.
                  <br />
                  With Ledgy you can be sure that no single share number goes missing or is assigned
                  twice.
                </Trans>
              </p>
            </div>

            <div className="col-md-8" data-aos="fade-left">
              <Img {...props.data.shareNumberChecking} alt={i18n.t`Share number checking`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <p>
                <Trans>
                  Startups do end up with several conflicting spreadsheet-based cap tables, one
                  being with the founders, one with the lawyers, one with the leading investors. Not
                  so with Ledgy. Have one single source of truth and give your key stakeholders
                  access with a single click. Don’t waste money on consolidating several cap table
                  versions, professionaly manage it from the start instead.
                </Trans>
              </p>
            </div>

            <div className="col-md-8 order-md-first" data-aos="fade-right">
              <Img
                {...props.data.accessRights}
                alt={i18n.t`Give view or admin access to your stakeholders`}
              />
            </div>
          </div>

          <hr className="my-8" />

          <div>
            <header className="section-header text-left">
              <h2>
                <Trans>Nice charts!</Trans>
              </h2>
              <p>
                <Trans>
                  Finished? Go back to the <i>Cap Table</i> page and view the result. At any point
                  in the history of your ownership, Ledgy can draw you a helpful chart that
                  represents the current equity distribution of your company. <br />
                  You have several views on your cap table at your fingertips. You can assign your
                  shareholders to groups and view the distribution among them. Or you can get a
                  comprehensive overview by viewing the distribution between the different
                  securities, like common shares, preferred shares, convertibles and options.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.captableBasic} alt={i18n.t`A basic cap table`} />
              </div>
            </div>
          </div>

          <FeatureLinks {...props} i18n={i18n} page="consistency" />
        </div>
      </section>
    </main>
  </div>
));

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...FeaturesFragment

    createCaptable: imageSharp(fluid: { originalName: { regex: "/create-captable.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    transactionError: imageSharp(fluid: { originalName: { regex: "/transaction-error.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    availableShares: imageSharp(fluid: { originalName: { regex: "/available-shares.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    shareNumberChecking: imageSharp(
      fluid: { originalName: { regex: "/share-number-checking.png/" } }
    ) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    accessRights: imageSharp(fluid: { originalName: { regex: "/access-rights.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    captableBasic: imageSharp(fluid: { originalName: { regex: "/captable-basic.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
