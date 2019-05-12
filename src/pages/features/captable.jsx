// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Feature';
import { Title, FeatureLi, Hr, ChevronRight } from '../../layouts/utils';

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
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    Intuitive, legally valid and error-free cap table from the beginning
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Transaction-based supporting any type like issuance, transfer, convertibles,
                    stock split, share destruction, valuations
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Featuring unlimited share classes, treasury shares, pooled investments and
                    automatic share numbering
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Get started in minutes with the copy-paste spreadsheet importer</Trans>
                </FeatureLi>
              </ul>
            </header>

            <div className="row gap-y">
              <div className="col-md-9 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.createCaptable} alt={i18n.t`Create a cap table`} />
              </div>
            </div>
          </div>

          <Hr />

          <div className="row align-items-center my-8 pb-2">
            <div className="col-md-5 ml-auto">
              <h2>
                <Trans>All transaction types</Trans>
              </h2>
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    The transaction based cap table allows browsing through the history and sets it
                    up for future due diligences, saving you hours of work and lawyer costs
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Supports issuance, destruction, transfer, class conversion, convertibles, stock
                    split, valuations, treasury shares and unlimited share classes
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Analyze your cap table by stakeholder, share class, stakeholder group and view
                    it with all, only outstanding or diluted shares
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 order-md-first" data-aos="fade-right">
              <Img {...props.data.availableShares} alt={i18n.t`Available shares for transfer`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center my-8 pb-2">
            <div className="col-md-5 mr-auto">
              <h2>
                <Trans>Numbered shares</Trans>
              </h2>
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    In some countries numbering shares is necessary, but this can be a real pain
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Auto-assign share numbers for all your transactions, Ledgy determines the next
                    available ones
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    They are checked for consistency, giving you the peace of mind that none go
                    missing or are assigned twice
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7" data-aos="fade-left">
              <Img {...props.data.shareNumbers} alt={i18n.t`Share number checking`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center my-8 pb-2">
            <div className="col-md-5 ml-auto">
              <h2>
                <Trans>Pooled investments</Trans>
              </h2>
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    Pooled investments are common in many countries, Ledgy helps you keep them
                    organized
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>View the cap table in legal or economic terms</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Works with numbered shares and you can even run exit modeling with all economic
                    stakeholders
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 order-md-first" data-aos="fade-right">
              <Img {...props.data.pooledInvestment} alt={i18n.t`Pooled investment`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center my-8 pb-2">
            <div className="col-md-5 ml-auto">
              <h2>
                <Trans>Attach documents</Trans>
              </h2>
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>Prove your transactions with their respective legal documents</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Share the documents attached with the stakeholders of this transaction
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Quickly pull up legal documents by the information of their linked transactions,
                    for example all legal documents of a specific stakeholder, share class or date
                    range
                  </Trans>
                </FeatureLi>
              </ul>
              <Link href to={`${props.prefix}/features/collaboration/`}>
                Learn more about due diligence
                <ChevronRight />
              </Link>
            </div>

            <div className="col-md-7" data-aos="fade-left">
              <Img {...props.data.attachDocTransaction} alt={i18n.t`Attach doc to transaction`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <h2>
                <Trans>Spreadsheet importer</Trans>
              </h2>
              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>Speed up your onboarding process with the bulk import feature</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    As easy as copying and pasting stakeholders, shares issues, or options
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-8 order-md-first" data-aos="fade-right">
              <Img {...props.data.bulkEntry} alt={i18n.t`Bulk entry`} />
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
    shareNumbers: imageSharp(fluid: { originalName: { regex: "/share-numbers.png/" } }) {
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
  }
`;
