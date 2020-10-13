// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import { Link } from 'gatsby';

import { Button } from './Button';
import { track } from '../helpers';

export const RequestDemoButton = ({
  buttonClassName,
  prefix,
}: {|
  buttonClassName: string,
  prefix: string,
|}) => (
  <>
    <Link href to={`${prefix}/demo/main`}>
      <Button cta onClick={() => track('click.get-demo')} className={buttonClassName}>
        <Trans>Get a Demo</Trans>
      </Button>
    </Link>
  </>
);
