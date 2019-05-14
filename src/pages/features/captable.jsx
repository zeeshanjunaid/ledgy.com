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

          <FeatureList
            textSize="5"
            header={<Trans>All transaction types</Trans>}
            features={[
              <Trans>
                It’s transaction based setting it up for future due diligences, saving you hours of
                work and lawyer costs
              </Trans>,
              <Trans>
                Supports issuance, transfer, convertibles, stock split, valuations, treasury shares,
                unlimited share classes and more
              </Trans>,
              <Trans>
                Analyze it by stakeholder, share class, stakeholder group and view it with all,
                outstanding or diluted shares
              </Trans>
            ]}
            imgSize="7"
            img={
              <Img {...props.data.availableShares} alt={i18n.t`Available shares for transfer`} />
            }
            imgFirst
          />

          <Hr />

          <FeatureList
            textSize="5"
            header={<Trans>Numbered shares</Trans>}
            features={[
              <Trans>
                In some countries numbering shares is necessary, and it can be a real pain
              </Trans>,
              <Trans>
                Auto-assign share numbers for all your transactions; Ledgy will determine the next
                available ones
              </Trans>,
              <Trans>
                Numbers are checked for consistency, giving you the peace of mind that none go
                missing or are assigned twice
              </Trans>
            ]}
            imgSize="7"
            img={<Img {...props.data.shareNumbers} alt={i18n.t`Share number checking`} />}
          />

          <Hr />

          <FeatureList
            textSize="5"
            header={<Trans>Pooled investments</Trans>}
            features={[
              <Trans>
                Pooled investments are common in many countries, Ledgy helps you keep them organized
              </Trans>,
              <Trans>View the cap table in legal or economic terms</Trans>,
              <Trans>
                They work with numbered shares and you can even run exit modeling with all economic
                stakeholders
              </Trans>
            ]}
            imgSize="7"
            img={<Img {...props.data.pooledInvestment} alt={i18n.t`Pooled investment`} />}
            imgFirst
          />

          <Hr />

          <FeatureList
            textSize="5"
            header={<Trans>Attach documents</Trans>}
            features={[
              <Trans>Prove your transactions with their respective legal documents</Trans>,
              <Trans>Share the documents attached with the stakeholders of this transaction</Trans>,
              <Trans>
                Quickly pull up legal documents by the information of their linked transactions
              </Trans>
            ]}
            imgSize="7"
            img={
              <Img {...props.data.attachDocTransaction} alt={i18n.t`Attach doc to transaction`} />
            }
            link={
              <Link href to={`${props.prefix}/features/collaboration/`}>
                Learn more about document management
                <ChevronRight />
              </Link>
            }
          />

          <Hr />

          <FeatureList
            textSize="4"
            header={<Trans>Spreadsheet importer</Trans>}
            features={[
              <Trans>Speed up your onboarding process with the bulk import feature</Trans>,
              <Trans>As easy as copying and pasting stakeholders, shares issues, or options</Trans>
            ]}
            imgSize="8"
            img={<Img {...props.data.bulkEntry} alt={i18n.t`Bulk entry`} />}
            imgFirst
          />

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
