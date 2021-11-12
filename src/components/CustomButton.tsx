import React from 'react';

import { DynamicTrans, Button } from './utils';

export const CustomButton = ({
  url,
  text,
  isPrimary,
  isTopBanner,
}: {
  url: string;
  text: string;
  isPrimary: boolean;
  isTopBanner: boolean;
}) => (
  <Button
    href={url}
    className="btn-xl mr-2 my-1 align-self-center"
    inverted={(isTopBanner && !isPrimary) || (!isTopBanner && isPrimary)}
    outline={(isTopBanner && !isPrimary) || (!isTopBanner && !isPrimary)}
  >
    <DynamicTrans>{text}</DynamicTrans>
  </Button>
);
