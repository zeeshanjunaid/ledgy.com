import React from 'react';

import { Button, DynamicTrans } from './utils';
import { formatUrl } from './lib';
import { demoPage } from '../helpers';

const DEMO_BUTTON_TEXT = 'Book a Demo';

export const RequestDemoButton = ({
  buttonClassName,
  prefix,
  buttonText = DEMO_BUTTON_TEXT,
}: {
  buttonClassName: string;
  prefix: string;
  buttonText?: string;
}) => (
  <Button href={formatUrl(prefix, demoPage)} className={buttonClassName}>
    <DynamicTrans>{buttonText}</DynamicTrans>
  </Button>
);
