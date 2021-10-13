import React from 'react';

import { Image } from '../utils';

export const IntegrationSummary = ({
  company,
}: {
  company: { website: string; logo: ImageProps };
}) => {
  const { website, logo } = company;
  return (
    <div className="company-summary rounded-md bg-white sticky-top p-2 p-sm-4 p-md-2 p-lg-4">
      <Image
        image={logo}
        className="company-summary-logo font-weight-light fit-cover mx-auto my-4"
      />
      <div className="container">
        <div className="company-summary-contact mb-2">
          <div className="row mx-auto">
            <strong>contactName</strong>
          </div>
          <div className="row mx-auto">contactTitle</div>
          <div>{website}</div>
        </div>
      </div>
    </div>
  );
};
