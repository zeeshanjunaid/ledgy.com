import React from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/macro';

import { appUrl, track, demoPage } from '../../helpers';

import { Button } from '../Button';
import { removeOverlay } from '../lib';

export const NavbarButtons = ({
  className = '',
  isLightBg,
  isMobile = false,
  prefix,
}: {
  prefix: string;
  isLightBg: boolean;
  className?: string;
  isMobile?: boolean;
}) => (
  <div className={`d-flex align-items-center ${className}`}>
    <Button
      inverted={isLightBg}
      outline={!isMobile}
      href={`${appUrl}/login`}
      className="px-3 py-1"
      onClick={() => track('click.login')}
    >
      <Trans>Log In</Trans>
    </Button>
    <Link to={`${prefix}${demoPage}`} onClick={removeOverlay}>
      <Button inverted={!isLightBg} outline={isMobile} className="ml-2 px-3 py-1">
        <Trans>Book a Demo</Trans>
      </Button>
    </Link>
  </div>
);
