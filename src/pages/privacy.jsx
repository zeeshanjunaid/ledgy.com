// @flow

import * as React from 'react';
import { Link } from 'gatsby';
import { withI18n, Trans } from '@lingui/react';
import {
  faUsers,
  faPlug,
  faDesktop,
  faShieldAlt,
  faChartPie,
  faChartBar,
  faSignInAlt
} from '@fortawesome/free-solid-svg-icons';

import { PrivacyElement, PrivacyRow } from '../components/Privacy';
import Section from '../components/Section';
import { Title, ChevronRight } from '../layouts/utils';

const Header = ({ i18n }: Props) => (
  <header className="header text-white bg-ledgy">
    <Title
      title={i18n.t`Privacy`}
      description={i18n.t`Privacy made in Europe. Because your cap table data is not for everyone.`}
    />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>
            <Trans>Privacy</Trans>
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
          <p>
            <Trans>
              Privacy made in Europe. Because your cap table data is not for everyone.
              <br />
              <br />
              We understand how sensitive cap table information is for any business. That’s why your
              privacy and your data’s security is crucial to us. We also know that long and
              complicated privacy policies are not very helpful, so we give an overview up-front.
            </Trans>
          </p>

          <p>
            <Trans>
              This is a brief summary. For the details, please read our{' '}
              <Link href to={`${props.prefix}/legal/privacy-policy/`}>
                Privacy Policy
              </Link>
              .
            </Trans>
          </p>
        </Section>

        <Section>
          <h2>
            <Trans>What we may collect and why</Trans>
          </h2>

          <PrivacyRow>
            <PrivacyElement
              icon={faSignInAlt}
              title={i18n.t`User information`}
              body={i18n.t`Name, email, encrypted password and any other details you provide`}
              size="6"
            />
            <PrivacyElement
              icon={faChartBar}
              title={i18n.t`Usage statistics`}
              body={i18n.t`Name, time, and which features you use to understand and improve our service`}
              size="6"
            />
            <PrivacyElement
              icon={faDesktop}
              title={i18n.t`Browser information`}
              body={i18n.t`In case a crash happens, which helps us to fix it as fast as possible`}
              size="6"
            />
            <PrivacyElement
              icon={faChartPie}
              title={i18n.t`Company information`}
              body={i18n.t`Company name, and other company details. To properly use our Service you may enter the share ledger transactions and other cap table details.`}
              size="6"
            />
          </PrivacyRow>
        </Section>

        <Section>
          <h2>
            <Trans>How we protect your information</Trans>
          </h2>
          <PrivacyRow>
            <PrivacyElement
              icon={faShieldAlt}
              title={i18n.t`Security`}
              body={
                <Trans>
                  We live up to highest security standards. We improve them continuously.&nbsp;
                  <Link href to={`${props.prefix}/security/`}>
                    Check out what we do
                    <ChevronRight />
                  </Link>
                </Trans>
              }
              size="9"
            />
            <PrivacyElement
              icon={faDesktop}
              title={i18n.t`User information, usage statistics and browser information`}
              body={i18n.t`We limit access and sharing as much as reasonably possible.`}
              size="6"
            />
            <PrivacyElement
              icon={faChartPie}
              title={i18n.t`Company information`}
              body={i18n.t`Nobody has any access to the company information you provide.`}
              size="6"
            />
          </PrivacyRow>
        </Section>

        <Section>
          <h2>
            <Trans>Who we share your information with</Trans>
          </h2>
          <PrivacyRow>
            <PrivacyElement
              icon={faPlug}
              title={i18n.t`Third Party Contractors`}
              body={
                <Trans>
                  Which we use to run and improve our Service for you. This excludes company
                  information.
                </Trans>
              }
              size="6"
            />
            <PrivacyElement
              icon={faUsers}
              title={i18n.t`Your shareholders`}
              body={i18n.t`If you add them with their email address and they decide to sign up on Ledgy, shareholders can see their stake in your company and its latest valuation.`}
              size="6"
            />
          </PrivacyRow>
        </Section>
      </div>
    </main>
  </React.Fragment>
);

export default withI18n()(IndexPage);
