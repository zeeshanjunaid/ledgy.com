// @flow

import React, { type Node } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const FullWidthBanner = (props: { children: Node }) => {
  return <section className="section full-width-banner">{props.children}</section>;
};
