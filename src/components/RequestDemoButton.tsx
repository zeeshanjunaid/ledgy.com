import React from 'react';

import { Button, DynamicTrans } from './utils';
import { formatUrl } from './lib';
import { demoPage, DEMO_BUTTON, trackClick } from '../helpers';

const DEMO_BUTTON_TEXT = 'Book a Demo';

export const RequestDemoButton = ({
  buttonClassName,
  prefix,
  buttonText = DEMO_BUTTON_TEXT,
  utm,
}: Prefix & { buttonClassName: string; buttonText?: string; utm?: string }) => {
  const href = formatUrl(prefix, demoPage + (utm ? `?utm_btn=${utm}` : ''));
  return (
    <Button
      href={href}
      className={buttonClassName}
      onClick={() => trackClick(DEMO_BUTTON, { text: buttonText, url: href })}
    >
      <DynamicTrans>{buttonText}</DynamicTrans>
    </Button>
  );
};
