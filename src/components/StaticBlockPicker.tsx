import React from 'react';
import { TeamMembers } from './teamMembers';
import { InvestorsList } from './investorsList';
import { CompanyPricing, CompanyPricingCtas, InvestorPricing } from './pricing';
import { BlogsList } from './BlogsList';
import { UpdatesList } from './UpdatesList';
import { CustomerStoriesList } from './customerStories';
import { WebinarsList } from './WebinarsList';
import { ContactUs } from './ContactUs';

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
    case 'blogsList':
      return <BlogsList prefix={prefix} />;
    case 'updatesList':
      return <UpdatesList prefix={prefix} />;
    case 'customerStoriesList':
      return <CustomerStoriesList prefix={prefix} />;
    case 'webinarsList':
      return <WebinarsList prefix={prefix} />;
    case 'contactUs':
      return <ContactUs />;
    default:
      throw new Error('static block not recognized');
  }
};
