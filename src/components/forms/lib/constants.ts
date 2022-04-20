import { LeadFormType, RequesterType } from './formTypes';

export const COMPANY: RequesterType = 'company';
export const INVESTOR: RequesterType = 'investor';

export const NEWSLETTER: LeadFormType = 'newsletter';
export const DEMO_REQUEST: LeadFormType = 'demoRequest';

export const DEER_COMPANY_THRESHOLD = 60;
export const FUND_INVESTMENT_THRESHOLD = 10;

export const EMPLOYEE_VALUE = 4;
export const INVESTMENT_VALUE = 25;

export const smallCompanyUrl = '/company-demo';
export const investorUrl = '/investor-demo';
export const meetingRequestUrl = 'https://meetings.hubspot.com/ledgy/salesteam';

export const meetingRequestUrlDACH = 'https://meetings.hubspot.com/ledgy/dach-salesteam?embed=true';
export const meetingRequestUrlUKIE = 'https://meetings.hubspot.com/ledgy/uki-salesteam?embed=true';
export const meetingRequestUrlNordics =
  'https://meetings.hubspot.com/ledgy/nordbalt-salesteam?embed=true';
export const meetingRequestUrlRestOfEurope =
  'https://meetings.hubspot.com/ledgy/roe-salesteam?embed=true';
export const meetingRequestUrlRestOfWorld =
  'https://meetings.hubspot.com/ledgy/row-salesteam?embed=true';

export const FORM_STATUSES = Object.freeze({
  IDLE: 'idle',
  LOADING: 'loading',
  FETCH_ERROR: 'fetch-error',
  SUBMITTED: 'submitted',
  INVALID_EMAIL: 'invalid-email',
  INVALID_FIELDS: 'invalid-fields',
  INVALID_SIZE: 'invalid-size',
  INVALID_REQUIRED_FIELDS: 'invalid-required-fields',
});

export const PARTNERS = [
  'Semper',
  'Pave',
  'Antler',
  'Porsche Digital',
  'Founders Factory',
  'Kiuas',
  'Innovaud',
  'Builders',
  'ETH Entrepreneur Club',
  'GFC',
  'Eurazeo',
  'Spicehaus',
  'EquityPitcher',
  '10x Founders',
  '20VC',
  'embedded / capital',
  'Oxx',
  'New Forge',
  'TA Ventures',
  'Verve Ventures',
  'btov',
  'Wingman Ventures',
  'High-Tech Gründerfonds',
  'Getty.org',
  '2bx',
  'ACE',
  'Kindred Capital',
  'Giant VC',
  'Creandum',
  'Connect Ventures',
  'Sequoia Capital',
  'Visionaries Club',
  'Headline',
  'Inventure Awake',
  'SuperSeed',
  'Hedosophia',
  'Bluelion',
  'Entrepreneur First',
  'Techstars - Partnership Agreement',
  'Seedcamp',
  'Hi Bob',
  'Stripe',
  'Pitchdrive',
  'Startup Banking',
  'ScaleUp Lab',
  'SIRPLUS',
  'RocketX Group',
  'Deel',
  'Figures',
  'Remote',
  'Speedinvest',
];
