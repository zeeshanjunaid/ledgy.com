// @flow

import React from 'react';
import { faShieldAlt, faLock } from '@fortawesome/free-solid-svg-icons';

import ReadMore from './ReadMore';

export default (props: Props) => (
  <div className="row gap-y text-center my-5">
    <div className="col-md-6 col-xl-5 offset-xl-1">
      <ReadMore
        icon={faShieldAlt}
        title="Privacy made in Switzerland"
        subtitle="Because your equity data is not for everyone"
        url={`${props.prefix}/privacy/`}
      />
    </div>

    <div className="col-md-6 col-xl-5">
      <ReadMore
        icon={faLock}
        title="Your data is safe with us"
        subtitle="Enjoy the highest security standards"
        url={`${props.prefix}/security/`}
      />
    </div>
  </div>
);
