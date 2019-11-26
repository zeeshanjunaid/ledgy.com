// @flow

import React, { type Node } from 'react';

export const CircleBadge = ({ children }: {| children: Node | Array<Node> |}) => (
  <div className="circle-badge mr-2 d-inline-flex align-items-center justify-content-center">
    {children}
  </div>
);
