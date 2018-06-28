// @flow

import * as React from 'react';
import Link from 'gatsby-link';
import { withI18n, Trans } from '@lingui/react';

import { PrivacyElement, PrivacyRow } from '../components/Privacy';
import Section from '../components/Section';
import { Title } from '../layouts/utils';

const Header = ({ i18n }: Props) => (
  <header className="header text-white bg-ledgy">
    <Title title={i18n.t`Privacy`} />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1><Trans>Privacy</Trans></h1>
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
              We understand how sensitive cap table information is for any business.
              That’s why your privacy and your data’s security is crucial to us. We also know that
              long and difficult privacy policies are not cool, so we give an overview up-front.
            </Trans>
          </p>
        </Section>

        <Section>
          <h2><Trans>What we may collect and why</Trans></h2>

          <PrivacyRow>
            <PrivacyElement
              icon="fa fa-sign-in"
              title={i18n.t`User information`}
              body={i18n.t`Name, email, encrypted password and any other details you provide`}
              size="6"
            />
            <PrivacyElement
              icon="fa fa-bar-chart"
              title={i18n.t`Usage statistics`}
              body={i18n.t`Name, time, and which features you use to understand and improve our service`}
              size="6"
            />
            <PrivacyElement
              icon="fa fa-desktop"
              title={i18n.t`Browser information`}
              body={i18n.t`In case a crash happens, which helps us to fix it as fast as possible`}
              size="6"
            />
            <PrivacyElement
              icon="fa fa-pie-chart"
              title={i18n.t`Company information`}
              body={i18n.t`Company name, and other company details. To really use our Service you may enter the share ledger transactions and other cap table details. `}
              size="6"
            />
          </PrivacyRow>

        </Section>

        <Section>
          <h2><Trans>How we protect your information</Trans></h2>
          <PrivacyRow>
            <PrivacyElement
              icon="fa fa-shield"
              title={i18n.t`Security`}
              body={
                <Trans>
                  We live up to highest security standards. We improve them continuously.&nbsp;
                  <Link href to={`${props.prefix}/security/`}>Check out what we do  <i className="ti-angle-right fs-10 ml-1" /></Link>
                </Trans>
              }
              size="9"
            />
            <PrivacyElement
              icon="fa fa-desktop"
              title={i18n.t`User information, usage statistics and browser information`}
              body={i18n.t`We limit access and sharing as much as reasonably possible.`}
              size="6"
            />
            <PrivacyElement
              icon="fa fa-pie-chart"
              title={i18n.t`Company information`}
              body={i18n.t`Nobody has any access to the company information you provide. `}
              size="6"
            />
          </PrivacyRow>
        </Section>

        <Section>
          <h2><Trans>Who we share your information with</Trans></h2>
          <PrivacyRow>
            <PrivacyElement
              icon="fa fa-plug"
              title={i18n.t`Third Party Contractors`}
              body={
                <Trans>
                  Which we use to run and improve our Service for you.
                  This excludes company information.&nbsp;
                  <Link href to={`${props.prefix}/privacy#third-parties`}>See which ones below <i className="ti-angle-right fs-10 ml-1" /></Link>
                </Trans>
              }
              size="6"
            />
            <PrivacyElement
              icon="fa fa-users"
              title={i18n.t`Your shareholders`}
              body={i18n.t`If you add them with their email address and they decide to sign up on Ledgy, shareholders can see their own stake in your company and its latest valuation.`}
              size="6"
            />
          </PrivacyRow>
          <hr />
        </Section>

        <Section>
          <h2><Trans>The details</Trans></h2>
          <p>
            <Trans>
              Ledgy AG (“Ledgy”, “we”) is a technology company that provides software as a
              service (“Service”) to you, its customers. This Privacy Policy describes how
              we collect and use personal information (“Personal Data”) for providing our
              Service and operating our website. It also describes your choices and how
              you can get in touch with us.
            </Trans>
          </p>
        </Section>

        <Section>
          <h2><Trans>What we may collect and why</Trans></h2>
          <strong><Trans>When you decide to sign up on Ledgy</Trans></strong>
          <p>
            We may collect user information, usage statistics and browser information
            (“Personal Data”) as outlined above. In order to use our Service at its best
            you may enter the share ledger transactions and other cap table details.
            But please note: We strictly separate Personal Data from company information.
            Nobody has any access to your company information.
          </p>
          <p>
            <Trans>
              We only use this Personal Data to provide you with our Service and improve it.
            </Trans>
          </p>

          <p>
            <Trans>
              From time to time we may send you updates or other information about our Service
              by email. By signing up, you agree to us sending you these emails. You can always
              unsubscribe with the link at the bottom of the emails or by contacting us at the
              details below.
            </Trans>
          </p>

          <p>
            <Trans>
              We may evaluate anonymous statistics from the information you provide.
              For instance, we may monitor the total number of registered companies,
              their average size, average number of shareholders and other related information.
              We may display this information publicly or provide it to others.
              However, Ledgy does not disclose Personal Data other than as described below.
            </Trans>
          </p>

          <strong><Trans>In case you only visit our website</Trans></strong>
          <p>
            <Trans>
              We use Google Analytics and Google Tag Manager on our Website to evaluate
              visitors’ use of our Sites. Google Analytics and Tag Manager use cookies
              to collect standard visitors’ information in an anonymous format and generate
              aggregated reports. The information generated using cookies about your use of
              the website (including IP address) is transmitted to Google. It is not used
              for marketing or advertising by Google. Ledgy will not associate any data
              gathered from this site with any Personal Data from any source associated with you.
              This anonymous data is automatically deleted within 26 months.
            </Trans>
          </p>
        </Section>

        <Section>
          <h2><Trans>How we protect your information</Trans></h2>
          <p>
            We take all technical and organisational measures reasonably necessary to protect
            your data against the unauthorized access, use or destruction.
            We improve these measures continuously.&nbsp;
            <Link href to={`${props.prefix}/security/`}>
              See what we do  <i className="ti-angle-right fs-10 ml-1" />
            </Link>
          </p>
          <p>
            We strictly separate Personal Data and company information.
            We limit access and sharing of Personal Data as much as reasonably possible.
            Nobody has any access to the company information you provide.
            For the purpose of providing you with support, you can choose
            to explicitly grant Ledgy employees access to the company information.
            You can do so through your account and can withdraw it at any time.
          </p>
        </Section>

        <Section>
          <h2><Trans>Who we share your information with</Trans></h2>
          <p>
            <Trans>
              Company information like share ledger transactions are not shared with anyone.
            </Trans>
          </p>
          <p>
            <Trans>
              Ledgy discloses Personal Data only to those of its employees
              and third party contractors that (i) need to know that information
              in order to process it on Ledgy’s behalf or to provide services
              available at Ledgy’s websites (“Third Party Contractors”),
              and (ii) that have agreed not to disclose it to others by law.
            </Trans>
          </p>
          <p>
            <Trans>
              Other than to its employees and Third Party Contractors,
              as described above, Ledgy discloses Personal Data only in
              response to a court order or other governmental request,
              or when Ledgy believes in good faith that disclosure is reasonably
              necessary to protect the property or rights of Ledgy or third parties.
            </Trans>
          </p>

          <strong id="third-parties"><Trans>Third Party Contractors used by Ledgy</Trans></strong>
          <p>
            <Trans>
              We do our best to limit the information shared with third party services.
              Some limited Personal Data is shared with trusted third party services,
              which we use to run our software and improve our Service for you.
              This excludes company information.
            </Trans>
          </p>
          <p>
            <Trans>
              The data shared with these Third Party Contractors might be stored
              outside Switzerland. You agree to those data transfers to Third
              Party Contractors outside of Switzerland, if the data transfer
              is necessary for providing our Services and under the condition,
              that these Third Party Contractors are compliant with GDPR
              (European General Data Protection Regulation).
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>
                <a href="https://mailchimp.com/legal/privacy/">Mailchimp</a>:
                We use Mailchimp to send you updates from time to time, for which Ledgy gives them
                your name and email address.
              </Trans>
            </li>
            <li>
              <Trans>
                <a href="https://sentry.io/privacy/">Sentry</a>:
                In case a problem occurs while you use the Service, Sentry will send us a
                notification. The data shared with Sentry includes the error stack trace
                and general device information available from your browser like its
                version and the operating system. If you choose to, you can transmit
                an explanation of the error through Sentry. Having all this information
                allows us to fix possible problems as fast as possible.
              </Trans>
            </li>
            <li>
              <Trans>
                <a href="https://mixpanel.com/privacy/">Mixpanel</a>:
                We monitor the activity log generated when you are logged in using Mixpanel.
                We do this to understand how our service is used and what can be improved.
                The processed information includes the name, time and which features you used.
              </Trans>
            </li>
            <li>
              <Trans>
                <a href="https://segment.com/docs/legal/privacy/">Segment</a>:
                We manage the integrations described above with Segment.
                Therefore all the information shared with the Third Party Contractors above,
                are also shared with Segment.
              </Trans>
            </li>
            <li>
              <Trans>
                <a href="https://www.freshworks.com/privacy/">Freshchat</a>:
                To offer real-time chat support we use Freshchat.
              </Trans>
            </li>
          </ul>
        </Section>

        <Section>
          <h2><Trans>Business transfers</Trans></h2>
          <p>
            <Trans>
              If Ledgy, or substantially all of its assets, were acquired,
              or in the unlikely event that Ledgy goes out of business or enters bankruptcy,
              user information would be one of the assets that is transferred or acquired by a
              third party. You acknowledge that such transfers may occur, and that any acquirer
              of Ledgy may continue to use your Personal Data as set forth in this Privacy Policy.
            </Trans>
          </p>
        </Section>

        <Section>
          <h2><Trans>Your choices</Trans></h2>
          <p>
            <Trans>
              You may always refuse to supply Personal Data, with the caveat
              that it may prevent your from engaging in certain website-related activities.
              You may correct the Personal Data in your account using our website.
              You may use the export functionality of our Service to retrieve all
              the information (including Personal Data) in a machine-readable format.
              You may always request to delete your Personal Data. To do so, please
              use the contact details below.
            </Trans>
          </p>
        </Section>

        <Section>
          <h2><Trans>Privacy policy changes</Trans></h2>
          <p>
            <Trans>
              Although most changes are likely to be minor, Ledgy may change its
              Privacy Policy from time to time, and in Ledgy’s sole discretion.
              Ledgy will notify you of any changes to its Privacy Policy.
            </Trans>
          </p>
        </Section>

        <Section>
          <h2><Trans>Contact</Trans></h2>
          <p>
            <Trans>
              Please contact us if you have any questions about
              our Privacy Policy, in case you want to delete any Personal Data or
              regarding any other privacy-related manners. You can reach our
              Data Security Officer via <a href="mailto:data@ledgy.com">data@ledgy.com</a> or
              at the following address:
            </Trans>
          </p>
          <p>
            Ledgy AG<br />
            <Trans>Data Security Officer</Trans><br />
            Forchstrasse 60, 8008 Zürich
          </p>
        </Section>

        <Section>
          <strong>Date of this policy</strong>: June 28, 2018
        </Section>

      </div>
    </main>
  </React.Fragment>
);

export default withI18n()(IndexPage);
