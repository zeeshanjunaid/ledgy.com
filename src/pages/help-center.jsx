// @flow

import React from 'react';
import { Link } from 'gatsby';
import { withI18n, Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faHiking,
  faQuestionCircle,
  faCogs,
  faPencilRuler,
  faListAlt,
  faVideo
} from '@fortawesome/free-solid-svg-icons';

import { Title, Hr, targetBlank } from '../layouts/utils';

const helpLinks = [
  [
    <Trans>Getting Started</Trans>,
    <Trans>Walk through the basics of setting up your Ledgy account</Trans>,
    'help/getting-started',
    faHiking
  ],
  [
    <Trans>FAQ</Trans>,
    <Trans>Discover all our features and when to use them</Trans>,
    'help/faq',
    faQuestionCircle
  ],
  [
    <Trans>Features</Trans>,
    <Trans>Discover all our features and when to use them</Trans>,
    'features',
    faCogs
  ],
  [
    <Trans>Blog</Trans>,
    <Trans>
      Follow real-world experinces of startups, learn about term sheet negotiations, and much more
    </Trans>,
    'blog',
    faPencilRuler
  ],
  [
    <Trans>Templates</Trans>,
    <Trans>Download and use our ESOP template</Trans>,
    'help/employee-participation-guide',
    faListAlt
  ],
  [
    <Trans>Webinars</Trans>,
    <Trans>Watch live-recorded videos with educational content for the startup world</Trans>,
    'webinars',
    faVideo
  ]
];

const HelpCenter = ({ i18n, prefix }: Props) => (
  <>
    <header className="header text-white bg-ledgy">
      <Title
        title={i18n.t`Help center`}
        description={i18n.t`Let Ledgy's help center guide you on every single aspect of your company's equity management`}
      />

      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>How can we help?</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main className="main-content">
      <section className="section">
        <div className="container">
          <div className="row">
            {helpLinks.map(([title, description, to, icon]) => (
              <div className="col-md-6 col-lg-4 pb-4" key={to} style={{ minHeight: '220px' }}>
                <Link href to={`${prefix}/${to}/`}>
                  <div className="top-page-feature-card card border hover-shadow-8 hover-translateY text-center">
                    <div className="d-flex align-items-center justify-content-center pb-2">
                      <FontAwesomeIcon icon={icon} className="m-2 fa-2x" />
                      <h5 className="text-primary m-2">{title}</h5>
                    </div>
                    <p className="d-block">{description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <Hr />
          <div className="container text-center py-md-4">
            <h4 className="mb-5">
              <Trans>Popular content</Trans>
            </h4>
            <p>
              <a
                href="https://www.youtube.com/watch?v=JbiAK2SVwHA&list=PLltwxYxG5b6fCAqvomPFc-E049R1HXzNl"
                {...targetBlank}
              >
                <Trans>Employee Participation Plans: Webinar by Ledgy and Kellerhals Carrard</Trans>
              </a>
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=7oh_fDsDDYs" {...targetBlank}>
                <Trans>The Power of Round Modeling: Webinar by Ledgy</Trans>
              </a>
            </p>
            <p>
              <Link href to={`${prefix}/blog/pre-and-post-money-option-pools`}>
                <Trans>Basics of Pre- and Post-Money Option Pools</Trans>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default withI18n()(HelpCenter);
