import { LeadFormType, RequesterType } from './formTypes';

export const COMPANY: RequesterType = 'company';
export const INVESTOR: RequesterType = 'investor';

export const NEWSLETTER: LeadFormType = 'newsletter';
export const DEMO_REQUEST: LeadFormType = 'demoRequest';

export const DEER_COMPANY_THRESHOLD = 40;
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
  'Porsche Digital',
  'Founders Factory',
  'Innovaud',
  'Builders',
  'ETH Entrepreneur Club',
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
  'ACE',
  'Giant VC',
  'Bluelion',
  'Entrepreneur First',
  'Techstars',
  'Seedcamp',
  'Hi Bob',
  'Pitchdrive',
  'Startup Banking',
  'ScaleUp Lab',
  'SIRPLUS',
  'Figures',
  'Semper',
  'Pave',
];
