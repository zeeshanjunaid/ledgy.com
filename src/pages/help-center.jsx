// @flow

import React from 'react';
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

import { Title } from '../layouts/utils';

const helpLinks = [
  [
    <Trans>Getting Started</Trans>,
    <Trans>Walk through the basics of setting up your Ledgy account</Trans>,
    faHiking
  ],
  [
    <Trans>FAQ</Trans>,
    <Trans>Discover all our features and when to use them</Trans>,
    faQuestionCircle
  ],
  [<Trans>Features</Trans>, <Trans>Discover all our features and when to use them</Trans>, faCogs],
  [
    <Trans>Blog</Trans>,
    <Trans>
      Follow real-world experinces of startups, learn about term sheet negotiations, and much more
    </Trans>,
    faPencilRuler
  ],
  [<Trans>Templates</Trans>, <Trans>Download and use our ESOP template</Trans>, faListAlt],
  [
    <Trans>Webinars</Trans>,
    <Trans>Watch live-recorded videos with educational content for the startup world</Trans>,
    faVideo
  ]
];

const HelpCenter = ({ i18n }: Props) => (
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
            {helpLinks.map(([title, description, icon], i) => (
              // eslint-disable-next-line react/no-array-index-key
              <div className="col-md-4 pb-4" key={`${icon}-${i}`}>
                <div className="top-page-feature-card card border hover-shadow-8 hover-translateY text-center">
                  <div className="d-flex align-items-center justify-content-center pb-2">
                    <FontAwesomeIcon icon={icon} className="m-2 fa-2x" />
                    <span className="font-weight-bold m-2">{title}</span>
                  </div>
                  <div className="d-block">{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </>
);

export default withI18n()(HelpCenter);
