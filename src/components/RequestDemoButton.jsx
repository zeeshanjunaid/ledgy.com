// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import { Link } from 'gatsby';

import { Button } from './Button';

export const RequestDemoButton = ({
  buttonClassName,
  prefix,
}: {|
  buttonClassName: string,
  prefix: string,
|}) => (
  <>
    <Link href to={`${prefix}/demo/ledgy`}>
      <Button cta className={buttonClassName}>
        <Trans>Get a Demo</Trans>
      </Button>
    </Link>
  </>
);
