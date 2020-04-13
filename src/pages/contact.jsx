// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';

import { Title } from '../layouts/utils';
import { PageHeader } from '../components/PageHeader';

export default withI18n()(({ i18n }: Props) => (
  <div>
    <Title
      title={i18n.t`Contact`}
      description={i18n.t`Contact the Ledgy team by phone, email, or mailing address to learn more about cap table management, equity plans, and investor relations`}
    />
    <PageHeader
      title={i18n.t`Let’s get in touch`}
      subtitle={i18n.t`Here are the ways you can contact us with any questions you have`}
    />

    <div className="container">
      <div className="bg-gray h-full p-5 imprint">
        <div className="row">
          <div className="col-md-6">
            <h6>Ledgy AG</h6>
            <p>
              Forchstrasse 60
              <br />
              8008 Zürich
              <br />
              <Trans>Switzerland</Trans>
            </p>
            <h6>
              <Trans>VAT number</Trans>
            </h6>
            <p>CHE‑261.454.963 MWST</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column flex-lg-row">
              <div className="col-6 p-0 mb-3">
                <h6>General Inquiries</h6>
                <a href="mailto:contact@ledgy.com">contact@ledgy.com</a>
                <div className="text-nowrap">+41 (0) 44 585 21 23</div>
              </div>
              <div className="col-6 p-0">
                <h6>Sales Inquiries</h6>
                <a href="mailto:contact@ledgy.com">sales@ledgy.com</a>
              </div>
            </div>
            <h6>
              <Trans>Managing directors</Trans>
            </h6>
            <p>
              Yoko Spirig
              <br />
              Ben-Elias Brandt
              <br />
              Timo Horstschäfer
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
));
