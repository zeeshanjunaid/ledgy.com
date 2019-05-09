// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Feature';
import { Title, FeatureLi } from '../../layouts/utils';

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
                  Keep the ownership history of your company in a single place. No need for
                  paperwok, contacting lawyers, missing pieces, or frequent errors.
                </Trans>
              </p>
              <p>
                <Trans>Ledgy’s cap table is the one source of truth for your company equity.</Trans>
              </p>
              <p>
                <Trans>
                  Quick and easy onboarding process to set up your legally valid, error-free cap
                  table in no time!
                </Trans>
              </p>
              <Trans>Need help?</Trans>{' '}
              <Link href to={`${props.prefix}/contact/`}>
                <Trans>Contact us</Trans>
              </Link>
              <Trans>, and we will assist you in getting started with Ledgy.</Trans>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.createCaptable} alt={i18n.t`Create a cap table`} />
              </div>
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-5 ml-auto">
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    Add any transaction, whether shares issue, transfer, valuation, convertible
                    loan, class conversion, stock split, decrease, or employee incentives
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Dynamic display of available shares in all transactions</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 order-md-first" data-aos="fade-right">
              <Img {...props.data.availableShares} alt={i18n.t`Available shares for transfer`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    Numbered shares? No problem. Ledgy can track share numbers and assist you with
                    entering valid values
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-8" data-aos="fade-left">
              <Img {...props.data.shareNumberChecking} alt={i18n.t`Share number checking`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    And pooled investments? Ledgy also takes care of that, helping you understand
                    who owns what stake in the company
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-8 order-md-first" data-aos="fade-right">
              <Img {...props.data.pooledInvestment} alt={i18n.t`Pooled investment`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-5 ml-auto">
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>Upload files associated to each of your transactions.</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Download these files at any time and share them with any of your stakeholders
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7" data-aos="fade-left">
              <Img {...props.data.attachDocTransaction} alt={i18n.t`Attach doc to transaction`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>Enjoy interactive graphical representations of valuation history</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Keep track of your company’s data at any point in time</Trans>
                </FeatureLi>
              </ul>
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
                  To facilitate importing your data to Ledgy, we provide you with the the bulk
                  import feature{' '}
                  <span role="img" aria-label="rocket">
                    🚀
                  </span>
                  <br />
                  <br />
                  Whether it’s stakeholders, shares issues, or option issues, just copy and paste
                  your information into one of our built-in spreadsheets and <i>voilà!</i>
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
