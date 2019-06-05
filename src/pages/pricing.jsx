// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { Link } from 'gatsby';

import { Title, Li } from '../layouts/utils';

const Detail = props => <small className="d-block text-muted" {...props} />;
const Soon = () => <small className="badge badge-pill badge-primary fs-10">Coming soon</small>;

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
              <div className="pricing-3 border rounded pb-1">
                <h6>&nbsp;</h6>
                <h2>
                  <Trans>Free</Trans>
                </h2>
                <Detail>&nbsp;</Detail>
                <ul className="text-left mt-6 mb-0">
                  <Li>
                    <strong>
                      <Trans>Error-free cap table</Trans>
                    </strong>
                  </Li>
                  <Li>
                    <Trans>Single admin</Trans>
                  </Li>
                  <Li>
                    <Trans>Document storage</Trans>
                    <Detail>
                      <Trans>Up to 100 MB, no sharing</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Financing round modeling</Trans>
                    <Detail>
                      <Trans>1 round, 1 scenario</Trans>
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
              <div className="pricing-3 popular border border-success rounded pb-1 shadow">
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
                    <strong>
                      <Trans>All Free features</Trans>
                    </strong>
                  </Li>
                  <Li>
                    <Trans>Multiple admins</Trans>
                    <Detail>Up to 3</Detail>
                  </Li>
                  <Li>
                    <Trans>Document storage</Trans>
                    <Detail>
                      <Trans>Up to 500 MB + sharing</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Financing round modeling</Trans>
                    <Detail>
                      <Trans>Multiple rounds, 3 scenarios</Trans>
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
                    <Trans>Liquidation preferences</Trans>
                  </Li>
                  <Li>
                    <Trans>Breakpoint + exit analysis</Trans>
                  </Li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="pricing-3 border rounded pb-1">
                <h6>
                  <Trans>Enterprise</Trans>
                </h6>
                <h2>
                  <a href="mailto:contact@ledgy.com">
                    <Trans>Contact us</Trans>
                  </a>
                </h2>
                <Detail>&nbsp;</Detail>
                <ul className="text-left mt-6 mb-0">
                  <Li>
                    <strong>
                      <Trans>All Premium features</Trans>
                    </strong>
                  </Li>
                  <Li>
                    <Trans>Multiple admins</Trans>
                    <Detail>Unlimited</Detail>
                  </Li>
                  <Li>
                    <Trans>Document storage</Trans>
                    <Detail>
                      <Trans>Unlimited + sharing</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Financing round modeling</Trans>
                    <Detail>
                      <Trans>Unlimited rounds + scenarios</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Priority support</Trans>
                  </Li>
                  <Li>
                    <Trans>Guided onboarding</Trans>
                  </Li>
                  <Li>
                    <Trans>
                      Document workflows
                      <Soon />
                    </Trans>
                  </Li>
                  <Li>
                    <Trans>
                      Electronic signatures
                      <Soon />
                    </Trans>
                  </Li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-auto text-center mt-6">
            <div className="mx-auto text-center mt-6">
              <a
                href="#try"
                className="btn btn-block d-sm-inline btn-round btn-xl btn-primary mr-2"
              >
                <Trans>Get started free</Trans>
              </a>
              <Link
                href
                to={`${props.prefix}/features/`}
                className="btn btn-block d-sm-inline btn-round btn-xl btn-outline-primary"
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
