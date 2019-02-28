// @flow

import * as React from 'react';
import { Trans } from '@lingui/react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLock, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default (props: Props) => (
  <div className="row gap-y text-center">
    <div className="col-md-6 col-xl-5 offset-xl-1">
      <FontAwesomeIcon icon={faShieldAlt} className="text-primary mb-2" size="3x" />
      <h5>
        <Trans>Privacy</Trans>
      </h5>
      <p>
        <Trans>Privacy made in Europe. Because your cap table data is not for everyone.</Trans>
        <br />
        <Link href to={`${props.prefix}/privacy/`}>
          <Trans>Read more</Trans>
          <FontAwesomeIcon icon={faChevronRight} className="fs-12 ml-2" />
        </Link>
      </p>
    </div>

    <div className="col-md-6 col-xl-5">
      <FontAwesomeIcon icon={faLock} className="text-success mb-2" size="3x" />
      <h5>
        <Trans>Security</Trans>
      </h5>
      <p>
        <Trans>Your data is safe with us. Enjoy the highest security standards.</Trans>
        <br />
        <Link href to={`${props.prefix}/security/`}>
          <Trans>Read more</Trans>
          <FontAwesomeIcon icon={faChevronRight} className="fs-12 ml-2" />
        </Link>
      </p>
    </div>
  </div>
);
