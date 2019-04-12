// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../../components/Feature';
import { Title } from '../../layouts/utils';

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
                  With Ledgy, maintaining professional relationships with your stakeholders has
                  never been more straightforward. All it takes is a few clicks to start reducing
                  your amount of paperwork and integrate all of your documents on Ledgy.
                  <br />
                  <br />
                  Share and download reports incuding your cap table with the non-diluted and
                  fully-diluted stake of each shareholder (if you have options or phantom stock),
                  your convertibles and ESOPs, and the transaction history, which tracks every
                  change ever made to your cap table. You can even configure them to include
                  signature fields for your board of directors.
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

          <header className="section-header text-left mb-7">
            <h2>
              <Trans>Easy-to-set access rights</Trans>
            </h2>
          </header>

          <div className="row align-items-center mb-8">
            <div className="col-md-4 mr-auto">
              <p>
                <Trans>
                  Maintain the hierarchy of your company by setting your access rights on the{' '}
                  <i>Stakeholders</i> page. Admins will have full control over the company, viewers
                  will be able to see all cap table info in a read-only mode, and personal will see
                  their own stake and percentage on their portfolio once transactions have been
                  commited. Keep everyone happy and let them see what they need to.
                </Trans>
              </p>
            </div>

            <div className="col-md-7" data-aos="fade-left">
              <Img {...props.data.accessRights} alt={i18n.t`Stakeholders access rights`} />
            </div>
          </div>

          <hr className="my-8" />

          <header className="section-header text-right mb-7">
            <h2>
              <Trans>Effort-free holding confirmations</Trans>
            </h2>
          </header>

          <div className="row align-items-center mb-8">
            <div className="col-md-6 ml-auto">
              <p>
                <Trans>
                  Remember that day last year during tax season when you had to send holding
                  confirmations to each stakeholder, filling out boring Word templates by hand?
                  <br />
                  <br />
                  We’ve got the solution for you. Ledgy automatically creates holding confirmations
                  for all of your stakeholders, so they can log in to their account and download
                  them.
                  <br />
                  <br />
                  Reduce hours of tedious work to nothing. Hooray!
                </Trans>
              </p>
            </div>

            <div className="col-md-5 order-md-first" data-aos="fade-left">
              <Img
                {...props.data.downloadHoldingConfirmation}
                alt={i18n.t`Dialog for holding confirmation`}
              />
            </div>
          </div>

          <div>
            <header className="section-header text-left">
              <p>
                <Trans>
                  The holding confirmation lists all assets that a shareholder owns. You can
                  optionally include a tax value of the shares. Employees will be able to see their
                  stock ownership plans and how many of their total shares they already have vested.
                  <br />
                  Make your shareholders feel good, they will reward you.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-8 mx-auto mb-7" data-aos="fade-right">
                <Img {...props.data.holdingConfirmationPdf} alt={i18n.t`Holding confirmation`} />
              </div>
            </div>
          </div>

          <hr className="my-8" />

          <div>
            <header className="section-header text-left">
              <h2>
                <Trans>Share documents with your investors</Trans>
              </h2>
              <p>
                <Trans>
                  Every transaction in your cap table usually comes with a pile of additional
                  documents, like contracts. Get rid of complicated folder structures and attach
                  them directly to your transactions. Ledgy gives you an overview of all documents
                  that you uploaded and their corresponding transactions. Also in your transaction
                  history, you can select any transaction and see all connected documents at a
                  glance.
                  <br />
                  <br />
                  You can also share your documents by sending a simple link to your shareholders.
                  This eliminates confusion about different versions of documents, as it is often
                  the case when sending documents via email.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-left">
                <Img {...props.data.documentManagement} alt={i18n.t`Document management`} />
              </div>
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
