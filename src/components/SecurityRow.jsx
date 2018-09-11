// @flow

import * as React from 'react';
import { Trans } from '@lingui/react';
import Link from 'gatsby-link';

export default (props: Props) => (
  <div className="row gap-y text-center">

    <div className="col-md-6 offset-xl-2 col-xl-4">
      <i className="text-primary fa fa-shield fa-3x mb-2" />
      <h5><Trans>Privacy</Trans></h5>
      <p>
        <Trans>
          Cap table data is sensitive.
          That’s why we genuinely care about your privacy.
        </Trans>
        <br />
        <Link href to={`${props.prefix}/privacy/`}><Trans>Read more</Trans>  <i className="ti-angle-right fs-10 ml-1" /></Link>
      </p>
    </div>

    <div className="col-md-6 col-xl-4">
      <i className="text-success fa fa-lock fa-3x mb-2" />
      <h5><Trans>Security</Trans></h5>
      <p>
        <Trans>
          Your data is safe with us. Enjoy the highest security standards.
        </Trans>
        <br />
        <Link href to={`${props.prefix}/security/`}><Trans>Read more</Trans>  <i className="ti-angle-right fs-10 ml-1" /></Link>
      </p>
    </div>
  </div>
);
