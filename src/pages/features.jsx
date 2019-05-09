// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';

import { Feature } from '../components/Feature';
import AllFeatures from '../components/AllFeatures';
import SecurityRow from '../components/SecurityRow';
import { Title, FeatureLi } from '../layouts/utils';

const Hr = () => <hr className="my-7" />;

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Features`}
      description={i18n.t`Round and exit modeling, employee incentives and a single source of truth—Ledgy serves your needs.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>
                Manage your shares.
                <br />
                Not your spreadsheet.
              </Trans>
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
                <Trans>Vested stock, option plans, phantom options, inverse vesting</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>Easily track vesting schedules</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>Engage your employees and make their plans transparent</Trans>
              </FeatureLi>
            </ul>
          </Feature>

          <Hr />

          <Feature
            {...props}
            name={i18n.t`Cap Table`}
            title={i18n.t`Trust in Your Cap Table`}
            url="captable"
            left
          >
            <ul className="pl-0 pt-2">
              <FeatureLi>
                <Trans>Legally valid, error-free</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>Simple to use and quick to learn</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>Manage pooled investments</Trans>
              </FeatureLi>
            </ul>
          </Feature>

          <Hr />

          <Feature {...props} name={i18n.t`Round and Exit Modeling`} url="modeling">
            <ul className="pl-0 pt-2">
              <FeatureLi>
                <Trans>Quickly simulate a new financing round or an exit</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>Understand how dilution works</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>Effortlessly assess the impact of liquidation preferences</Trans>
              </FeatureLi>
            </ul>
          </Feature>

          <Hr />

          <Feature {...props} name={i18n.t`Investor Relations`} url="relations" left>
            <ul className="pl-0 pt-2">
              <FeatureLi>
                <Trans>Track KPIs and generate reports in a matter of clicks</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>Generate holding confirmations and attach documents to your files</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>Share it all with anyone you need to</Trans>
              </FeatureLi>
            </ul>
          </Feature>

          <Hr />

          <Feature
            {...props}
            title={i18n.t`Investor Portfolio`}
            name={i18n.t`the Investor Portfolio`}
            url="portfolio"
          >
            <ul className="pl-0 pt-2">
              <FeatureLi>
                <Trans>Track all your portfolio companies as an investor</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>See all your investments, history, KPIs, and reports</Trans>
              </FeatureLi>
              <FeatureLi>
                <Trans>Have a centralized platform that serves as a single source of truth</Trans>
              </FeatureLi>
            </ul>
          </Feature>

          <div className="mx-auto text-center my-8">
            <hr />
            <AllFeatures />
          </div>

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
