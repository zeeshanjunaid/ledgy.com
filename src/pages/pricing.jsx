// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Link from 'gatsby-link';

import { Title } from '../layouts/utils';


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title title={i18n.t`Pricing`} />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">

            <h1><Trans>Pricing</Trans></h1>

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
                Ledgy scales with your needs. Free for startups, powerful for grown-ups.
                It’s currently free, nevertheless this probably changes soon.
                If you sign up now, we’ll make sure, that our loyal first users will
                get a good deal.
              </Trans>
            </p>
          </header>


          <div className="row gap-y">


            <div className="col-lg-4">
              <div className="pricing-3 border rounded">
                <h6><Trans>3 Dude(tte)s in a Garage</Trans></h6>
                <h2 className="price"><Trans>$0</Trans></h2>
                <ul className="text-left">
                  <li><Trans>All cap table features</Trans></li>
                  <li><Trans>Up to 25 shareholders</Trans></li>
                </ul>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="pricing-3 popular border rounded">
                <span className="popular-tag"><Trans>coming soon</Trans></span>
                <h6><Trans>Fast-growing Startup</Trans></h6>
                <h2 className="price"><Trans>$2</Trans></h2>
                <ul className="text-left">
                  <li><Trans>All cap table features</Trans></li>
                  <li><Trans>Up to 50 shareholders</Trans></li>
                  <li><Trans>Free cap table import</Trans></li>
                </ul>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="pricing-3 popular border rounded">
                <span className="popular-tag"><Trans>coming soon</Trans></span>
                <h6><Trans>Unicorn</Trans></h6>
                <h2 className="price"><Trans>$3</Trans></h2>
                <ul className="text-left">
                  <li><Trans>All cap table features</Trans></li>
                  <li><Trans>Unlimited shareholders</Trans></li>
                  <li><Trans>Free cap table import</Trans></li>
                  <li><Trans>Premium support</Trans></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="mx-auto text-center mt-8">
            <Link href to={`${props.prefix}/featurelist/`} className="btn btn-block d-sm-inline btn-round btn-xl btn-outline-primary mt-6" >
              <Trans>See all cap table features</Trans>
            </Link>
          </div>

        </div>
      </section>


    </main>
  </div>
));
