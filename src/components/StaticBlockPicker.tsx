import React from 'react';
import { InvestorsList } from './investorsList/InvestorsList';
import { AboutUs } from './teamMembers';

export const StaticBlockPicker = ({ block, prefix }: StaticBlockProps & { prefix: string }) => {
  if (!block) return null;
  switch (block) {
    case 'teamMembers':
      return <AboutUs prefix={prefix} />;
    case 'investorsList':
      return <InvestorsList />;
    default:
      throw new Error('static block not recognized');
  }
};
