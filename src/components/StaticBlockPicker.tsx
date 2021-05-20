import React from 'react';
import { TeamMembers } from './teamMembers';
import { InvestorsList } from './investorsList';
import { CompanyPricing, CompanyPricingCtas, InvestorPricing } from './pricing';

export const StaticBlockPicker = ({ block, prefix }: StaticBlockProps & { prefix: string }) => {
  if (!block) return null;
  switch (block) {
    case 'teamMembers':
      return <TeamMembers prefix={prefix} />;
    case 'investorsList':
      return <InvestorsList />;
    case 'companyPricing':
      return <CompanyPricing prefix={prefix} />;
    case 'companyPricingCtas':
      return <CompanyPricingCtas />;
    case 'investorPricing':
      return <InvestorPricing prefix={prefix} />;
    default:
      throw new Error('static block not recognized');
  }
};
