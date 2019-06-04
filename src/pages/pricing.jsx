// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { Link } from 'gatsby';

import { Title, Li } from '../layouts/utils';

const Detail = props => <small className="d-block text-muted" {...props} />;

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Pricing`}
      description={i18n.t`Ledgy scales with your needs. Free for startups, powerful for grown-ups.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Pricing</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main className="main-content">
      <section className="section">
        <div className="container">
          <header className="section-header">
            <p>
              <Trans>
                Ledgy scales with your needs. Free for startups, powerful for grown-ups.
              </Trans>
            </p>
          </header>

          <div className="justify-content-center row gap-y">
            <div className="col-lg-4">
              <div className="pricing-3 popular border rounded pb-1">
                <h6>&nbsp;</h6>
                <h2>
                  <Trans>Free</Trans>
                </h2>
                <small className="text-muted">&nbsp;</small>
                <ul className="text-left mt-6 mb-0">
                  <Li>
                    <Trans>Error-free cap table</Trans>
                  </Li>
                  <Li>
                    <Trans>Round modeling</Trans>
                    <Detail>
                      <Trans>1 financing round, no exit</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Document storage</Trans>
                    <Detail>
                      <Trans>Up to 100 MB, no sharing</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Multiple admins</Trans>
                    <Detail>
                      <Trans>Up to 3</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>KPI tracking</Trans>
                  </Li>
                  <Li>
                    <Trans>Recurring reports</Trans>
                  </Li>
                  <Li>
                    <Trans>Pooled investments</Trans>
                  </Li>
                  <Li>
                    <Trans>Import & export</Trans>
                  </Li>
                  <Li>
                    <Trans>Two-factor authentication</Trans>
                  </Li>
                  <Li>
                    <Trans>Holding confirmations</Trans>
                  </Li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="pricing-3 popular border rounded pb-1">
                <span className="popular-tag">
                  <Trans>14 days trial</Trans>
                </span>
                <h6>
                  <Trans>Premium</Trans>
                </h6>
                <h2>
                  <Trans>€2</Trans>
                </h2>
                <Detail>
                  <Trans>per stakeholder & month</Trans>
                </Detail>
                <ul className="text-left mt-6 mb-0">
                  <Li>
                    <Trans>All Free features</Trans>
                  </Li>
                  <Li>
                    <Trans>Round modeling</Trans>
                    <Detail>
                      <Trans>Multiple rounds + exit</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Document storage</Trans>
                    <Detail>
                      <Trans>Unlimited + sharing</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Multiple admins</Trans>
                    <Detail>
                      <Trans>Unlimited</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Employee incentives</Trans>
                  </Li>
                  <Li>
                    <Trans>Complex vesting plans</Trans>
                  </Li>
                  <Li>
                    <Trans>Email notifications</Trans>
                  </Li>
                  <Li>
                    <Trans>Modeling scenarios</Trans>
                  </Li>
                  <Li>
                    <Trans>Liquidation preferences </Trans>
                  </Li>
                  <Li>
                    <Trans>Breakpoint analysis</Trans>
                  </Li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-auto text-center mt-6">
            <Trans>
              Interested in our enterprise offer?
              <br />
              <a href="mailto:contact@ledgy.com">Drop us an email</a> or use the chat right on this
              page.
            </Trans>
            <br />
            <br />
            <div className="mx-auto text-center">
              <Link
                href
                to={`${props.prefix}/features/`}
                className="btn btn-block d-sm-inline btn-round btn-xl btn-outline-primary mt-6"
              >
                <Trans>Discover all features</Trans>
              </Link>
            </div>
            <hr className="my-8" />
            <h5>
              <Trans>Offer for eco-friendly startups</Trans>{' '}
              <span role="img" aria-label="earth">
                🌍
              </span>
            </h5>
            <p>
              <Trans>
                Are you part of a sustainability or clean-tech startup? <br />
                If so,{' '}
                <a href="mailto:contact@ledgy.com?subject=Premium Eco-Friendly Discount Application">
                  tell us what you do
                </a>{' '}
                to see if you qualify for a <strong>50% discount</strong> on Ledgy Premium.
              </Trans>
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
));
