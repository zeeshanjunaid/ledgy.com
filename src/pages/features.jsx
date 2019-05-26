// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';

import { Feature, FeatureLi } from '../components/Feature';
import SecurityRow from '../components/SecurityRow';
import { Title, Hr } from '../layouts/utils';

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Features`}
      description={i18n.t`All you need in one place: Employee participation plan management, round and exit modeling, due diligence tools and investor relations.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>All you need in one place</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>

    <main className="main-content">
      <section className="section pt-7">
        <div className="container">
          <Feature {...props} name={i18n.t`Employee Participation Plans`} url="esop">
            <ul className="pl-0 pt-2">
              <FeatureLi>
                <Trans>Save hours of work by getting rid of manual spreadsheet processes</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Supports everything from pools to options, phantom options, warrants, vested
                  stock, and inverse vesting
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>Keep track of any vesting schedule</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Get notified of important vesting and expiry events and engage your employees by
                  inviting them to track their stake on Ledgy
                </Trans>
              </FeatureLi>
            </ul>
          </Feature>

          <Hr />

          <Feature {...props} name={i18n.t`Cap Table Management`} url="captable" left>
            <ul className="pl-0 pt-2">
              <FeatureLi>
                <Trans>Intuitive, legally valid and error-free cap table from the beginning</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Transaction-based supporting any type like issuance, transfer, convertibles, stock
                  split, share destruction, valuations
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Featuring unlimited share classes, treasury shares, pooled investments, and
                  automatic share numbering
                </Trans>
              </FeatureLi>
            </ul>
          </Feature>

          <Hr />

          <Feature {...props} name={i18n.t`Round & Exit Modeling`} url="modeling">
            <ul className="pl-0 pt-2">
              <FeatureLi>
                <Trans>
                  Understand how dilution works by quickly comparing different modeling scenarios
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Flexible yet intuitive round modeling supporting convertibles, fixed employee
                  pools, and pro-rata distribution
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Assess the impact of liquidation preferences with waterfall analysis and
                  breakpoint charts
                </Trans>
              </FeatureLi>
            </ul>
          </Feature>

          <Hr />

          <Feature {...props} name={i18n.t`Collaboration & Due Diligence`} url="collaboration" left>
            <ul className="pl-0 pt-2">
              <FeatureLi>
                <Trans>Granular access rights, you control them</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Data room, audit trail and read-only access for investors save you costly due
                  diligence tools
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Save time in future due diligence by attaching legal documents to their
                  transactions, making them searchable by the transaction information
                </Trans>
              </FeatureLi>
            </ul>
          </Feature>

          <Hr />

          <Feature {...props} name={i18n.t`Investor Relations & Portfolio`} url="investors">
            <ul className="pl-0 pt-2">
              <FeatureLi>
                <Trans>Be professional towards your investors as a startup</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Track KPIs, write recurring reports and share them with your investors
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  The simplest and most time-efficient way to manage the portfolio as an investor
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Get equity and reporting updates from your portfolio in one place, from
                  transaction history to legal documents, valuations, KPIs and reports
                </Trans>
              </FeatureLi>
            </ul>
          </Feature>

          <Hr />

          <SecurityRow {...props} />
        </div>
      </section>

      <p className="col-md-6 offset-md-5 text-right text-lighter small-2">
        <Trans>Illustrations by</Trans> <a href="https://www.freepik.com/alekksall">Alekksall</a>
      </p>
    </main>
  </div>
));

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...FeaturesFragment
  }
`;
