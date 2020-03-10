// @flow

import React from 'react';

import { PageHeader } from '../components/PageHeader';
import { supportUrl, targetBlank } from '../helpers';

export default () => (
  <>
    <PageHeader title="Subscription confirmed" />
    <div className="container">
      <div className="bg-gray h-full p-5 imprint">
        <div className="row justify-content-center">
          <div className="d-flex flex-column align-items-center text-center w-md-75">
            <p>
              Thank you for your interest in Ledgy{' '}
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </p>
            <p>You can cancel your subscription through any of our newsletter emails.</p>
            <div className="d-flex flex-column flex-md-row mt-2">
              <a
                className="btn btn-round btn-outline-primary btn-xl mr-md-1 mb-3 mb-md-0"
                href={supportUrl}
                {...targetBlank}
              >
                Continue exploring
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
