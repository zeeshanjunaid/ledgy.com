// @flow

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <header className="header bg-ledgy loader-banner">
    <div className="h-100 d-flex text-white justify-content-center align-items-center">
      <FontAwesomeIcon icon={faCircleNotch} size="4x" spin />
    </div>
  </header>
);
