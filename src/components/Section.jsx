// @flow

import * as React from 'react';

export default ({ children }: {children: React.Element<any>}) => (
  <div className="container mb-6">
    <div className="col-md-9 mx-auto">
      {children}
    </div>
  </div>
);
