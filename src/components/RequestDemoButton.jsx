// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import { Link } from 'gatsby';

import { Button } from './Button';

export const RequestDemoButton = ({
  buttonClassName,
  prefix,
  location,
}: {|
  buttonClassName: string,
  prefix: string,
  location?: LocationProps,
|}) => {
  const isDemoPage = !!location && location.pathname.includes('demo');
  const ButtonText = <Trans>Get a Demo</Trans>;

  return isDemoPage ? (
    <Button
      cta
      className={buttonClassName}
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }
    >
      {ButtonText}
    </Button>
  ) : (
    <>
      <Link href to={`${prefix}/demo/ledgy`}>
        <Button cta className={buttonClassName}>
          {ButtonText}
        </Button>
      </Link>
    </>
  );
};
