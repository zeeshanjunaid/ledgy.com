// @flow

import React from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/react';
import { appUrl } from '../layouts/utils';

export default () => (
  <>
    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Subscription confirmed</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main className="main-content">
      <div className="section">
        <div className="container">
          <div className="bg-gray h-full p-5 imprint">
            <div className="row justify-content-center">
              <div className="d-flex flex-column align-items-center text-center w-md-75">
                <p>Your subscription to our newsletter is now active.</p>
                <p>
                  You will receive approximately one email per month. If you want to cancel your
                  subscription, you will be able to do so on the newsletter emails.
                </p>
                <p>
                  Thank you for your interest in Ledgy{' '}
                  <span role="img" aria-label="rocket">
                    🚀
                  </span>
                </p>
                <div className="d-flex flex-column flex-md-row mt-2">
                  <Link
                    className="btn btn-round btn-outline-primary btn-xl mr-md-1 mb-3 mb-md-0"
                    href
                    to="/"
                  >
                    <Trans>Continue to site</Trans>
                  </Link>
                  <a className="btn btn-round btn-primary btn-xl ml-md-1" href={appUrl}>
                    <Trans>Go to Ledgy app</Trans>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);
