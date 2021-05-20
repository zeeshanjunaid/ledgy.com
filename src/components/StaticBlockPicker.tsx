import React from 'react';
import { TeamMembers } from './teamMembers';
import { InvestorsList } from './investorsList';
import { CompanyPricing, CompanyPricingCtas } from './pricing';

export const StaticBlockPicker = ({ block, prefix }: StaticBlockProps & { prefix: string }) => {
  if (!block) return null;
  switch (block) {
    case 'teamMembers':
      return (
        <div>
          <TeamMembers prefix={prefix} />
          <InvestorsList />
          <CompanyPricing prefix={prefix} />
          <CompanyPricingCtas />
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
