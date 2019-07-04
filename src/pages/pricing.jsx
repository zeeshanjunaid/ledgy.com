// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { Link } from 'gatsby';

import { Title, Li, ChevronRight, appUrl, trackSignup } from '../layouts/utils';

const Detail = props => <small className="d-block text-light mt-1" {...props} />;
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
          <div className="justify-content-center row gap-y">
            <div className="col-lg-4">
              <div className="pricing-3 border rounded pb-4">
                <h3>Standard</h3>
                <h5>
                  <Trans>free</Trans>
                </h5>
                <Detail>&nbsp;</Detail>
                <ul className="text-left mt-6 mb-0">
                  <Li>
                    <strong>
                      <Trans>Cap table management</Trans>
                    </strong>
                  </Li>
                  <Li>
                    <Trans>Reporting</Trans>
                    <Detail>
                      <Trans>Recurring reports, KPIs</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Financing round modeling</Trans>
                    <Detail>
                      <Trans>1 round, 1 scenario</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Access rights</Trans>
                    <Detail>
                      <Trans>2 admins, stakeholder access</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Document storage</Trans>
                    <Detail>
                      <Trans>Up to 50 MB</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Holding confirmations</Trans>
                  </Li>
                  <Li>
                    <Trans>Pooled investments</Trans>
                  </Li>
                  <Li>
                    <Trans>Convertibles</Trans>
                  </Li>
                  <Li>
                    <Trans>Two-factor authentication</Trans>
                  </Li>
                </ul>
                <div className="text-center mb-3">
                  <a
                    href={`${appUrl}/signup`}
                    onClick={trackSignup}
                    className="btn btn-round btn-xl btn-outline-primary"
                  >
                    <Trans>Get started</Trans>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="pricing-3 popular border border-success rounded pb-4 shadow">
                <span className="popular-tag">
                  <Trans>30 days trial</Trans>
                </span>
                <h3>
                  <Trans>Premium</Trans>
                </h3>
                <h5>
                  <Trans>€2</Trans>
                </h5>
                <Detail>
                  <Trans>per stakeholder per month</Trans>
                </Detail>
                <ul className="text-left mt-6 mb-0">
                  <Li>
                    <strong>
                      <Trans>All Standard features</Trans>
                    </strong>
                  </Li>
                  <Li>
                    <Trans>Equity plan management</Trans>
                    <Detail>
                      <Trans>Any vesting schedule</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Financing round modeling</Trans>
                    <Detail>
                      <Trans>Multiple rounds, 3 scenarios</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Access rights</Trans>
                    <Detail>
                      <Trans>4 admins, view-only access</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Document storage</Trans>
                    <Detail>
                      <Trans>Up to 500 MB</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Notifications</Trans>
                    <Detail>
                      <Trans>Vesting, expiry, maturity</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Liquidation preferences</Trans>
                  </Li>
                  <Li>
                    <Trans>Breakpoint & exit analyses</Trans>
                  </Li>
                  <li>&nbsp;</li>
                </ul>
                <div className="text-center mb-3">
                  <a
                    href={`${appUrl}/signup`}
                    onClick={trackSignup}
                    className="btn btn-round btn-xl btn-primary"
                  >
                    <Trans>Try 30 days free</Trans>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="pricing-3 border rounded pb-4">
                <h3>
                  <Trans>Enterprise</Trans>
                </h3>
                <h5>
                  <a href="mailto:sales@ledgy.com">
                    <Trans>Contact us</Trans>
                  </a>
                </h5>
                <Detail>&nbsp;</Detail>
                <ul className="text-left mt-6 mb-0">
                  <Li>
                    <strong>
                      <Trans>All Premium features</Trans>
                    </strong>
                  </Li>
                  <Li>
                    <Trans>Priority support</Trans>
                    <Detail>
                      <Trans>Phone & chat, onboarding</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Financing round modeling</Trans>
                    <Detail>
                      <Trans>Unlimited rounds & scenarios</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Access rights</Trans>
                    <Detail>
                      <Trans>Unlimited admins</Trans>
                    </Detail>
                  </Li>
                  <Li>
                    <Trans>Document storage</Trans>
                    <Detail>
                      <Trans>Unlimited</Trans>
                    </Detail>
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
                  <li>&nbsp;</li>
                  <li>&nbsp;</li>
                </ul>
                <div className="text-center mb-3">
                  <a
                    href="mailto:sales@ledgy.com"
                    className="btn btn-round btn-xl btn-outline-primary"
                  >
                    <Trans>Contact us</Trans>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-muted fs-20">
              <Trans>
                A stakeholder is any holder of shares, (phantom) options, warrants, or convertibles.
                <br />
                It does not include the company treasury or incentive pools.
              </Trans>
            </p>
            <p className=" mt-6">
              <Link href to={`${props.prefix}/features/`}>
                <Trans>Discover all features</Trans>
                <ChevronRight />
              </Link>
            </p>
            <hr className="my-8" />
            <h5>
              <Trans>Does your startup tackle the climate crisis?</Trans>{' '}
              <span role="img" aria-label="earth">
                🌍
              </span>
            </h5>
            <p>
              <Trans>
                You get a <strong>20% discount</strong> on Premium, if your startup provably reduces
                emissions.
                <br />
                <a href="mailto:contact@ledgy.com?subject=Premium Eco-Friendly Discount Application">
                  Write us
                </a>{' '}
                about your impact to see if you qualify.
              </Trans>
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
));
