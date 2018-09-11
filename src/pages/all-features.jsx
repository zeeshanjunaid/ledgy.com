// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';

import AllFeatures from '../components/AllFeatures';
import { Title } from '../layouts/utils';

export default withI18n()(({ i18n }: Props) => (
  <div>
    <Title title={i18n.t`Pricing`} />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">

            <h1><Trans>All Features</Trans></h1>

          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section">
        <div className="container">
          <header className="section-header">
            <p>
              <Trans>
                Ledgy can do a lot for you—and more features are constantly being developed.
                Most current features are listed below. Get in touch if your favorite
                feature is missing, we love to hear feedback.
              </Trans>
            </p>
          </header>

          <AllFeatures />

        </div>
      </section>


    </main>
  </div>
));
