import React from 'react';

import { CustomFade } from './utils';

export const PageHeader = ({
  title,
  subtitle = '',
  textCenter = false,
}: {
  title: string;
  subtitle?: string;
  textCenter?: boolean;
}) => {
  return (
    <header className="header-custom bg-lightest text-gray-dark d-flex flex-column justify-content-center mb-4 mb-md-5 mb-lg-7">
      <CustomFade translate="-100px, 0">
        <div className={`container my-4 my-lg-6 my-xl-7 ${textCenter ? 'text-center' : ''}`}>
          <h1>{title}</h1>
          {subtitle && <p className="text-lg">{subtitle}</p>}
        </div>
      </CustomFade>
    </header>
  );
};
