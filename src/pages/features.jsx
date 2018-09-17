// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Link from 'gatsby-link';

import { Feature } from '../components/Features';
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

            <h1><Trans>Manage your shares.<br />Not your Excel.</Trans></h1>

          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section pt-5">
        <div className="container">

          <Feature
            {...props}
            name={i18n.t`Consistency`}
            title={i18n.t`A Trusted Single Source of Truth`}
            url="consistency"
          >
            <Trans>
              Did you know that many cap tables are incomplete or contain errors?
              Tracking the ownership history with Excel or Word can quickly lead to inconsistencies.
              Set up your shares with Ledgy and be sure that all data is consistent at any time.
              Give your key stakeholders access and collaborate on a single source of truth.
            </Trans>
          </Feature>

          <Hr />

          <Feature
            {...props}
            name={i18n.t`Funding Round and Exit Modeling`}
            url="round-modeling"
            left
          >
            <Trans>
              What’s the stake percentage of the founders after a VC
              invests $2,000,000 at a valuation of $7,500,000 taking into account
              the 2 outstanding convertible loans and keeping the ESOP pool at 10%
              while only diluting existing shareholders?<br />
              Honestly, we don’t know. But Ledgy does.<br />
              Exit modeling is coming soon!
            </Trans>
          </Feature>

          <Hr />

          <Feature
            {...props}
            name={i18n.t`Employee Incentive Plans`}
            url="esop"
          >
            <Trans>
              Let your employees be part of your company’s success.
              Ledgy supports vested stock, options, phantom options, inverse vesting and
              ESOP pools.<br />
              Employees can even log in to Ledgy and track their vested shares in real-time.
            </Trans>
          </Feature>

          <Hr />

          <Feature
            {...props}
            name={i18n.t`Reporting & Documents`}
            url="reporting"
            left
          >
            <Trans>
              Oh, it’s tax season again, and 50 holding confirmations are
              waiting to be sent to your shareholders.
              This means pasting names into document templates,
              computing the tax value of all shares… <br />
              Don’t worry. Generate and send all relevant documents with a single click on Ledgy.
            </Trans>
          </Feature>

          <Hr />

          <Feature
            {...props}
            title={i18n.t`Investor Portfolio`}
            name={i18n.t`the Investor Portfolio`}
            url="investors"
          >
            <Trans>
              Are you an investor and want to track your portfolio companies?
              The founders are busy and the numbers they give you are different
              from your own records?<br />
              With their cap table on Ledgy, there’s only a single source of truth.
              Convince your companies, and you will never miss anything regarding your investments.
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
  query FeaturesPageQuery {
    ...FeaturesFragment
  }
`;
