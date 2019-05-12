// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';

import { Feature } from '../components/Feature';
import SecurityRow from '../components/SecurityRow';
import { Title, FeatureLi, Hr } from '../layouts/utils';

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Features`}
      description={i18n.t`All you need in one place: Employee incentives, round and exit modeling, investor relations.`}
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
                  Supports everything from pools to options, phantom options, warrants, vested stock
                  and inverse vesting
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
                  Transaction-based, linked to legal documents, for your future due diligence
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Supports unlimited share classes, pooled investments and automatic numbered shares
                </Trans>
              </FeatureLi>
            </ul>
          </Feature>

          <Hr />

          <Feature {...props} name={i18n.t`Round & Exit Modeling`} url="modeling">
            <ul className="pl-0 pt-2">
              <FeatureLi>
                <Trans>
                  Understand how dilution works by quickly comparing several modeling scenarios
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Flexible yet intuitive round modeling supporting convertibles, fixed employee
                  pools and pro-rata distribution
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
          </Feature>

          <Hr />

          <Feature {...props} name={i18n.t`Investor Relations & Portfolio`} url="investors">
            <ul className="pl-0 pt-2">
              <FeatureLi>
                <Trans>The simplest and most time-efficient way to manage your portfolio</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Get equity and reporting updates from your portfolio in one place, from
                  transaction history to legal documents, valuations, KPIs and reports
                </Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>
                  Help your startups be professional from the start and support them during their
                  fundraising
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
