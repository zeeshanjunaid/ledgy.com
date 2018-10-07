// @flow

import * as React from 'react';
import { Trans } from '@lingui/react';
import { Link } from 'gatsby';

export default (props: Props) => (
  <div className="row gap-y text-center">

    <div className="col-md-6 col-xl-5 offset-xl-1">
      <i className="text-primary fas fa-shield-alt fa-3x mb-2" />
      <h5><Trans>Privacy</Trans></h5>
      <p>
        <Trans>
          Privacy made in Europe. Because your cap table data is not for everyone.
        </Trans>
        <br />
        <Link href to={`${props.prefix}/privacy/`}><Trans>Read more</Trans><i className="fas fa-chevron-right fs-12 ml-2" /></Link>
      </p>
    </div>

    <div className="col-md-6 col-xl-5">
      <i className="text-success fas fa-lock fa-3x mb-2" />
      <h5><Trans>Security</Trans></h5>
      <p>
        <Trans>
          Your data is safe with us. Enjoy the highest security standards.
        </Trans>
        <br />
        <Link href to={`${props.prefix}/security/`}><Trans>Read more</Trans><i className="fas fa-chevron-right fs-12 ml-2" /></Link>
      </p>
    </div>
  </div>
);
