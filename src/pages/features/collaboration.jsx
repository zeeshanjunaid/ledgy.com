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

          <FeatureList
            textSize="5"
            header={<Trans>Granular access rights</Trans>}
            features={[
              <Trans>
                Stakeholders will only be notified if you explicitely invite them yourself
              </Trans>,
              <Trans>
                <strong>Admin</strong> Full control over the company for your co-founders
              </Trans>,
              <Trans>
                <strong>View</strong> See all cap table info in a read-only mode for due diligences
              </Trans>,
              <Trans>
                <strong>Portfolio</strong> See only the own stake in their{' '}
                <Link href to={`${props.prefix}/features/investors/`}>
                  portfolio
                  <ChevronRight />
                </Link>
              </Trans>
            ]}
            imgSize="7"
            img={<Img {...props.data.accessRights} alt={i18n.t`Stakeholders access rights`} />}
          />

          <Hr />

          <FeatureList
            textSize="5"
            header={<Trans>Due diligence history</Trans>}
            features={[
              <Trans>
                The transaction-based cap table allows browsing through the history and sets it up
                for future due diligences, saving you hours of work and lawyer costs
              </Trans>,
              <Trans>
                Track your valuations and understand the history in terms of percentage and number
                of shares
              </Trans>
            ]}
            imgSize="7"
            img={<Img {...props.data.valuation} alt={i18n.t`Valuation`} />}
            imgFirst
          />

          <Hr />

          <FeatureList
            textSize="5"
            header={<Trans>Data room</Trans>}
            features={[
              <Trans>Secure legal document storage</Trans>,
              <Trans>Prove your transactions by linking their respective legal documents</Trans>,
              <Trans>
                Make linked documents accessible to stakeholders involved in the transaction
              </Trans>,
              <Trans>
                Quickly pull up documents by the information of their linked transactions; for
                example all of a specific stakeholder, share class or date range
              </Trans>
            ]}
            imgSize="7"
            img={<Img {...props.data.documentManagement} alt={i18n.t`Document management`} />}
          />

          <Hr />

          <FeatureList
            textSize="6"
            header={<Trans>Edit log</Trans>}
            features={[
              <Trans>Keep track of who edited what</Trans>,
              <Trans>
                Equity data is too important to be accidentally tweaked in a spreadsheet
              </Trans>
            ]}
            imgSize="5"
            img={<Img {...props.data.editLog} alt={i18n.t`Record of edits`} />}
            imgFirst
          />

          <Hr />

          <FeatureList
            textSize="5"
            header={<Trans>Holding confirmations</Trans>}
            features={[
              <Trans>Download holding confirmations with a single click</Trans>,
              <Trans>
                They will list all assets owned by the stakeholder and optionally include a tax
                value of the shares
              </Trans>
            ]}
            imgSize="7"
            img={<Img {...props.data.holdingConfirmationPdf} alt={i18n.t`Holding confirmation`} />}
          />

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
    editLog: imageSharp(fluid: { originalName: { regex: "/edit-log.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
