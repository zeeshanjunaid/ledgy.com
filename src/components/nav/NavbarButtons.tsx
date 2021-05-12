import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/macro';

import { appUrl, demoPage, hasLedgyAccount } from '../../helpers';

import { Button } from '../utils';
import { removeOverlay } from '../lib';

const LOGIN = 'login';
const SIGNUP = 'signup';

const SignupLoginButton = ({ isMobile }: { isMobile: boolean }) => {
  const [buttonType, setButtonType] = useState(null as string | null);
  useEffect(() => {
    const hasAccount = hasLedgyAccount();
    setButtonType(hasAccount ? LOGIN : SIGNUP);
  });

  return (
    <Button
      inverted
      outline={!isMobile}
      href={appUrl}
      className={`px-3 py-1 ${buttonType ? 'visible' : 'invisible'}`}
    >
      {buttonType === LOGIN ? <Trans>Log In</Trans> : <Trans>Sign Up</Trans>}
    </Button>
  );
};

export const NavbarButtons = ({
  className = '',
  isMobile = false,
  prefix,
}: {
  prefix: string;
  className?: string;
  isMobile?: boolean;
}) => {
  return (
    <div className={`d-flex align-items-center ${className}`}>
      <SignupLoginButton isMobile={isMobile} />
      <Link to={`${prefix}${demoPage}`} onClick={removeOverlay}>
        <Button outline={isMobile} className="ml-2 px-3 py-1">
          <Trans>Book a Demo</Trans>
        </Button>
      </Link>
    </div>
  );
};
