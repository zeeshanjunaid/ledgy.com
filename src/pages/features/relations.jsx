// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Feature';
import { Title, FeatureLi } from '../../layouts/utils';

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Investor Relations`}
      section={i18n.t`Features`}
      description={i18n.t`Save painful work inserting numbers into templates. Automated documents and reports at your fingertips.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Investor Relations</Trans>
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
                <Trans>Keep everyone up to date</Trans>
              </h2>
              <p>
                <Trans>
                  Keep your investors up to date at all times with Ledgy’s integrated document
                  system.
                </Trans>
              </p>
              <p>
                <Trans>
                  Add your KPIs, generate recurring Reports, attach documents, and share it all with
                  your investors.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-12 mx-auto mb-7" data-aos="fade-up">
                <Img
                  {...props.data.shareRegisterPdf}
                  alt={i18n.t`PDF export of the share register`}
                />
              </div>
            </div>
          </div>

          <hr className="my-8" />

          <div className="row align-items-center pb-7">
            <div className="col-md-5 mr-auto">
              <h2>
                <Trans>Easy-to-set access rights</Trans>
              </h2>

              <ul className="pl-0 pt-2">
                <FeatureLi>
                  <Trans>Control the access level of your stakeholders on Ledgy</Trans>
                  <ul className="pt-2">
                    <li>
                      <Trans>
                        <strong>Admin</strong> Full control over the company
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        <strong>View</strong> See all cap table info in a read-only mode
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        <strong>Portfolio</strong> See only their stake and percentage in their
                        portfolio
                      </Trans>
                    </li>
                  </ul>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7" data-aos="fade-left">
              <Img {...props.data.accessRights} alt={i18n.t`Stakeholders access rights`} />
            </div>
          </div>

          <div className="row align-items-center pb-7">
            <div className="col-md-5 ml-auto">
              <h2>
                <Trans>Effort-free holding confirmations</Trans>
              </h2>
              <ul className="pl-0 pt-3">
                <FeatureLi>
                  <Trans>
                    Automatically create holding confirmations for all of your stakeholders
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    They will list all assets owned by the stakeholder and optionally include a tax
                    value of the shares
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Your stakeholders will just need to log in and download them!</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7 order-md-first" data-aos="fade-right">
              <Img {...props.data.holdingConfirmationPdf} alt={i18n.t`Holding confirmation`} />
            </div>
          </div>

          <div className="row align-items-center pb-7">
            <div className="col-md-5 ml-auto">
              <h2>
                <Trans>Document sharing with investors</Trans>
              </h2>
              <ul className="pl-0 pt-3">
                <FeatureLi>
                  <Trans>Attach your documents directly to their corresponding transactions</Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>
                    Quickly glance over your list of documents and associated transactions
                  </Trans>
                </FeatureLi>
                <FeatureLi>
                  <Trans>Share them with your selected stakeholders in a single click</Trans>
                </FeatureLi>
              </ul>
            </div>

            <div className="col-md-7" data-aos="fade-right">
              <Img {...props.data.documentManagement} alt={i18n.t`Document management`} />
            </div>
          </div>

          <FeatureLinks {...props} i18n={i18n} page="relations" />
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
  }
`;
