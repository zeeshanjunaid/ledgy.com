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
      title={i18n.t`Collaboration & Due Diligence`}
      section={i18n.t`Features`}
      description={i18n.t`Save painful work inserting numbers into templates. Automated documents and reports at your fingertips.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Collaboration and Due Diligence</Trans>
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
                <Trans>Granular access rights, you control it</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Data room, audit trail and read-only access for investors saves you costly due
                  diligence tools
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Save time in future due diligences by attaching legal documents to their
                  transactions, making them searchable by the transaction information
                </Trans>
              </FeatureLi>
            </ul>
          </header>

          <div className="row gap-y">
            <div className="col-md-12 mx-auto mb-7" data-aos="fade-up">
              <Img {...props.data.accessRights} alt={i18n.t`Stakeholders access rights`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center my-8 pb-2">
            <div className="col-md-5 mr-auto">
              <h2>
                <Trans>Granular access rights</Trans>
              </h2>

              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>
                    Stakeholders will only be notified if you explicitely invite them yourself
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    <strong>Admin</strong> Full control over the company for your co-founders
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    <strong>View</strong> See all cap table info in a read-only mode for due
                    diligences
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    <strong>Portfolio</strong> See only the own stake in their{' '}
                    <Link href to={`${props.prefix}/features/investors/`}>
                      portfolio
                      <ChevronRight />
                    </Link>
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7" data-aos="fade-left">
              <Img {...props.data.accessRights} alt={i18n.t`Stakeholders access rights`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center my-8 pb-2">
            <div className="col-md-5 ml-auto">
              <h2>
                <Trans>Due diligence history</Trans>
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
                    Track your valuations and understand the history in terms of percentage and
                    number of shares
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 order-md-first" data-aos="fade-right">
              <Img {...props.data.valuation} alt={i18n.t`Valuation`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center pb-7">
            <div className="col-md-5 ml-auto">
              <h2>
                <Trans>Data room</Trans>
              </h2>
              <ul className="pl-0 pt-3">
                <FeatureLi>
                  <Trans>Secure legal document storage</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Prove your transactions by linking their respective legal documents</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Make linked documents accessible to stakeholders involved in the transaction
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Quickly pull up documents by the information of their linked transactions, for
                    example all of a specific stakeholder, share class or date range
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7" data-aos="fade-left">
              <Img {...props.data.documentManagement} alt={i18n.t`Document management`} />
            </div>
          </div>

          <Hr />

          <div className="row align-items-center pb-7">
            <div className="col-md-5 ml-auto">
              <h2>
                <Trans>Holding confirmations</Trans>
              </h2>
              <ul className="pl-0 pt-3">
                <FeatureLi>
                  <Trans>Download holding confirmations with a single click</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    They will list all assets owned by the stakeholder and optionally include a tax
                    value of the shares
                  </Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 order-md-first" data-aos="fade-right">
              <Img {...props.data.holdingConfirmationPdf} alt={i18n.t`Holding confirmation`} />
            </div>
          </div>

          <FeatureLinks {...props} i18n={i18n} page="collaboration" />
        </div>
      </section>
    </main>
  </div>
));

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...FeaturesFragment

    shareRegisterPdf: imageSharp(fluid: { originalName: { regex: "/share-register-pdf.png/" } }) {
      fluid(maxWidth: 2400) {
        ...GatsbyImageSharpFluid
      }
    }
    accessRights: imageSharp(fluid: { originalName: { regex: "/access-rights.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    downloadHoldingConfirmation: imageSharp(
      fluid: { originalName: { regex: "/download-holding-confirmation.png/" } }
    ) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    holdingConfirmationPdf: imageSharp(
      fluid: { originalName: { regex: "/holding-confirmation-pdf.png/" } }
    ) {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
    documentManagement: imageSharp(
      fluid: { originalName: { regex: "/document-management.png/" } }
    ) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    dashboardShares: imageSharp(fluid: { originalName: { regex: "/dashboard-shares.png/" } }) {
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
