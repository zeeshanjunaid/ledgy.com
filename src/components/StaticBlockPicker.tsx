import React from 'react';
import { getTeamData, TeamMembers } from './teamMembers';
import { InvestorsList } from './investorsList';
import { CompanyPricing, CompanyPricingCTAs, InvestorPricing } from './pricing';
import { UpdatesList } from './UpdatesList';
import { CustomerStoriesList } from './customerStories';
import { WebinarsList } from './WebinarsList';
import { JobBoard } from './JobBoard';
import { ContactUs } from './ContactUs';
import { Ledgistats } from './Ledgistats';
import { Marketplaces } from './marketplace/marketplaces';
import { PartnershipLogos } from './PartnershipLogos';
import { BlogsList } from './blog';
import { InterviewSteps, WorkBenefits, CareerFAQs } from './careers';
import { GlassDoor } from './GlassDoor';
import { LogosGridSection } from './LogosGridSection';

export const StaticBlockPicker = ({
  block,
  prefix,
  region,
}: StaticBlockProps & Prefix & Region) => {
  const team = getTeamData();
  if (!block) return null;
  switch (block) {
    case 'teamMembers':
      return <TeamMembers team={team} />;
    case 'investorsList':
      return <InvestorsList />;
    case 'companyPricing':
      return <CompanyPricing prefix={prefix} region={region} />;
    case 'companyPricingCtas':
      return <CompanyPricingCTAs />;
    case 'investorPricing':
      return <InvestorPricing prefix={prefix} />;
    case 'blogsList':
      return <BlogsList prefix={prefix} team={team} />;
    case 'updatesList':
      return <UpdatesList prefix={prefix} />;
    case 'customerStoriesList':
      return <CustomerStoriesList prefix={prefix} />;
    case 'webinarsList':
      return <WebinarsList prefix={prefix} />;
    case 'jobBoard':
      return <JobBoard prefix={prefix} />;
    case 'ledgistats':
      return <Ledgistats />;
    case 'marketplace':
      return <Marketplaces prefix={prefix} />;
    case 'contactUs':
      return <ContactUs />;
    case 'partnershipCta':
      return <PartnershipLogos />;
    case 'workBenefits':
      return <WorkBenefits />;
    case 'interviewSteps':
      return <InterviewSteps />;
    case 'careerFAQs':
      return <CareerFAQs />;
    case 'glassDoor':
      return <GlassDoor />;
    case 'integrationsLogos':
      return <LogosGridSection />;

    default:
      return <> </>;
  }
};
