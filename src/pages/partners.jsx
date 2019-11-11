// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';

import Section from '../components/Section';
import { Title } from '../layouts/utils';

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
      <div className="section">
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

        <Section>
          <i>CTA bar goes here</i>
        </Section>
      </div>
    </main>
  </React.Fragment>
);

export default withI18n()(IndexPage);
