// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';

import Section from '../components/Section';
import { Title, targetBlank } from '../layouts/utils';
import { FullWidthBanner } from '../components/FullWidthBanner';

const Header = ({ i18n }: Props) => (
  <header className="header text-white bg-ledgy">
    <Title
      title={i18n.t`Partners`}
      description={i18n.t`Our trusted law firm partners are here to help`}
    />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>
            <Trans>Our trusted law firm partners are here to help</Trans>
          </h1>
        </div>
      </div>
    </div>
  </header>
);

const IndexPage = ({ i18n, ...props }: Props) => (
  <React.Fragment>
    <Header i18n={i18n} {...props} />

    <main className="main-content">
      <div className="section pb-0">
        <Section>
          <h2 className="text-center">
            <Trans>Swiss Law Partners</Trans>
          </h2>
          <i>Logos go here</i>
        </Section>

        <Section>
          <h2 className="text-center">
            <Trans>German Law Partners</Trans>
          </h2>
          <i>Logos go here</i>
        </Section>

        <Section>
          <p className="text-center">
            <Trans>
              Startup law is a unique maze, and getting the advice you need is crucial to avoid
              costly legal mistakes.
            </Trans>
          </p>
          <p className="text-center">
            <Trans>
              Our partners will collaborate with you on Ledgy and also offer special offers to Ledgy
              clients.
            </Trans>
          </p>
        </Section>

        <Section>
          <h2 className="text-center">
            <Trans>The Smoothest Experience for Startups and Lawyers</Trans>
          </h2>
          <i>USPs go here</i>
        </Section>

        <FullWidthBanner>
          <div className="container">
            <div className="row m-0 w-100 justify-content-center align-items-center">
              <h4 className="m-3 text-center">Are you a lawyer wanting to partner with us?</h4>
              <a
                className="cta-button m-3 btn btn-lg btn-round btn-primary align-self-center"
                href="mailto:sales@ledgy.com?subject=Law Firm Collaboration"
                {...targetBlank}
              >
                <Trans>Apply</Trans>
              </a>
            </div>
          </div>
        </FullWidthBanner>
      </div>
    </main>
  </React.Fragment>
);

export default withI18n()(IndexPage);
