// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Feature';
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
              <Trans>Trust in Your Cap Table</Trans>
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
                  Keep the ownership history of your company in a single place. No more shuffling
                  around with different documents, contacting lawyers, having missing pieces, and
                  errors occurring left and right.
                  <br />
                  <br />
                  Feed Ledgy your company’s information and let our cap table work as the one source
                  of truth for your company equity.
                  <br />
                  <br />
                  With our quick and easy onboarding process, your legally valid cap table will be
                  set up in no time! No room for errors, Ledgy’s computing is state-of-the-art, and
                  will warn you shall there be any inconsistencies.
                  <br />
                  <br />
                  Need help?{' '}
                  <Link href to={`${props.prefix}/contact/`}>
                    Contact us
                  </Link>
                  , and we will assist you in getting started with Ledgy.
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
            <div className="col-md-5 ml-auto">
              <p>
                <Trans>
                  Here an example of how easy it is to perform transactions on Ledgy; in this case,
                  a share transfer. Notice the number in the center bottom? Ledgy is always dynamic
                  and will show you how many shares that particular stakeholder has <i>available</i>{' '}
                  at that given point in time.
                </Trans>
              </p>
            </div>

            <div className="col-md-7 order-md-first" data-aos="fade-right">
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
            <div className="col-md-3 ml-auto">
              <p>
                <Trans>
                  Has your company received funding via a pooled investment? Ledgy helps you
                  understand who owns what stake in your company. In this example,{' '}
                  <i>The Exciting Company</i> represents an investor pool with three beneficiaries.
                </Trans>
              </p>
            </div>

            <div className="col-md-9 order-md-first" data-aos="fade-right">
              <Img {...props.data.pooledInvestment} alt={i18n.t`Pooled investment`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-5 ml-auto">
              <p>
                <Trans>
                  Each one of your transactions may have some documents associated to it; that is
                  why Ledgy allows you to upload files and attach them to your transactions. These
                  docs can then be downloaded in the <i>Documents</i> page and the investor
                  portfolio <i>History</i> page.
                </Trans>
              </p>
            </div>

            <div className="col-md-7" data-aos="fade-left">
              <Img {...props.data.attachDocTransaction} alt={i18n.t`Attach doc to transaction`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <p>
                <Trans>
                  How much is your company worth? With the valuation transaction, add the share
                  price at all of your valuation events. Our beautiful interactive graphs will show
                  you the evolution of your company’s valuation over time.
                </Trans>
              </p>
            </div>

            <div className="col-md-8 order-md-first" data-aos="fade-right">
              <Img {...props.data.valuation} alt={i18n.t`Valuation`} />
            </div>
          </div>

          <hr className="my-8" />

          <div>
            <header className="section-header text-left">
              <h2>
                <Trans>Bulk import!</Trans>
              </h2>
              <p>
                <Trans>
                  We know it can be tedious to add each person and transaction one by one, so Ledgy
                  has at your disposal the bulk import feature{' '}
                  <span role="img" aria-label="rocket">
                    🚀
                  </span>
                  <br />
                  <br />
                  Whether it’s your stakeholders, share issues, or option issues, we got you
                  covered. Just copy and paste your information into one of our built-in
                  spreadsheets and <i>voilà!</i> Even easier done than said.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.bulkEntry} alt={i18n.t`Bulk entry`} />
              </div>
            </div>
          </div>

          <FeatureLinks {...props} i18n={i18n} page="captable" />
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
    pooledInvestment: imageSharp(fluid: { originalName: { regex: "/pooled-investment.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    attachDocTransaction: imageSharp(
      fluid: { originalName: { regex: "/attach-doc-transaction.png/" } }
    ) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    bulkEntry: imageSharp(fluid: { originalName: { regex: "/bulk-entry.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    valuation: imageSharp(fluid: { originalName: { regex: "/valuation.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
