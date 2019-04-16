// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';

import { Feature } from '../components/Feature';
import AllFeatures from '../components/AllFeatures';
import SecurityRow from '../components/SecurityRow';
import { Title } from '../layouts/utils';

const Hr = () => <hr className="my-3" />;

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
      <section className="section pt-5">
        <div className="container">
          <Feature {...props} name={i18n.t`Employee Participation Plans`} url="esop">
            <Trans>
              Let your employees be part of your company’s success. Set up your vested stock,
              options, phantom options, inverse vesting and ESOP pools in a matter of a few clicks.
              <br />
              Track your vesting schedules in the most efficient of ways and engage your employees
              with full transparency over their participation plans.
            </Trans>
          </Feature>

          <Hr />

          <Feature
            {...props}
            name={i18n.t`Cap Table`}
            title={i18n.t`Trust in Your Cap Table`}
            url="captable"
            left
          >
            <Trans>
              Do you know that many cap tables are incomplete or contain errors? Have you gone
              through the cap table pain, and spent huge amounts of money on lawyers using
              spreadsheets? What if you could automate a legally valid, error-free cap table that
              was easy to use, quick to learn, and allowed you to manage your pooled investments,
              all in one good-looking user interface?
            </Trans>
          </Feature>

          <Hr />

          <Feature {...props} name={i18n.t`Round and Exit Modeling`} url="modeling">
            <Trans>
              What’s the stake percentage of the founders after a VC invests $2,000,000 at a
              valuation of $7,500,000, taking into account the 2 outstanding convertible loans and
              keeping the ESOP pool at 10% while only diluting existing shareholders? How does the
              capped participating liquidation preference that comes with this investment influence
              my exit strategy?
              <br />
              Honestly, we don’t know. But Ledgy does.
            </Trans>
          </Feature>

          <Hr />

          <Feature {...props} name={i18n.t`Investor Relations`} url="relations" left>
            <Trans>
              Oh, it’s tax season again, and 50 holding confirmations are waiting to be sent to your
              stakeholders. This means pasting names into document templates, computing the tax
              value of all shares… <br />
              Don’t worry. Generate and send all relevant documents in a matter of a few clicks on
              Ledgy.
            </Trans>
          </Feature>

          <Hr />

          <Feature
            {...props}
            title={i18n.t`Investor Portfolio`}
            name={i18n.t`the Investor Portfolio`}
            url="portfolio"
          >
            <Trans>
              Are you an investor and want to track your portfolio companies? The founders are busy
              and the numbers they give you are different from your own records?
              <br />
              With their cap table on Ledgy, there’s only a single source of truth. Convince your
              companies, and you will never miss anything regarding your investments.
            </Trans>
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
