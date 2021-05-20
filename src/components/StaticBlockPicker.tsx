import React from 'react';
import { InvestorsList } from './investorsList/InvestorsList';
import { TeamMembers } from './teamMembers';

export const StaticBlockPicker = ({ block, prefix }: StaticBlockProps & { prefix: string }) => {
  if (!block) return null;
  switch (block) {
    case 'teamMembers':
      return (
        <div>
          <TeamMembers prefix={prefix} />
          <InvestorsList />
        </div>
      );
    case 'investorsList':
      return <InvestorsList />;
    case 'companyPricing':
      return <div />;
    case 'companyPricingCtas':
      return <div />;
    case 'investorPricing':
      return <div />;
    default:
      throw new Error('static block not recognized');
  }
};
