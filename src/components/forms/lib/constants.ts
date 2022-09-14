import { LeadFormType, RequesterType } from './formTypes';

export const COMPANY: RequesterType = 'company';
export const INVESTOR: RequesterType = 'investor';

export const NEWSLETTER: LeadFormType = 'newsletter';
export const DEMO_REQUEST: LeadFormType = 'demoRequest';

export const DEER_COMPANY_BUTTON_TEXT = 'Book a demo';

export const DEER_COMPANY_THRESHOLD = 40;
export const FUND_INVESTMENT_THRESHOLD = 10;

export const LARGE_COMPANY_STAKEHOLDER_VALUE = 5;
export const MEDIUM_COMPANY_STAKEHOLDER_VALUE = 4;
export const SMALL_COMPANY_STAKEHOLDER_VALUE = 3;

export const INVESTMENT_VALUE = 25;

export const SMALL_COMPANY_URL = '/company-demo';
export const INVESTOR_URL = '/investor-demo';
export const meetingRequestUrl = 'https://meetings.hubspot.com/ledgy/salesteam';

export const meetingRequestUrlDACH = 'https://meetings.hubspot.com/ledgy/dach-salesteam';
export const meetingRequestUrlUKIE = 'https://meetings.hubspot.com/ledgy/uki-salesteam';
export const meetingRequestUrlNordics = 'https://meetings.hubspot.com/ledgy/nordbalt-salesteam';
export const meetingRequestUrlRestOfEurope = 'https://meetings.hubspot.com/ledgy/roe-salesteam';
export const meetingRequestUrlRestOfWorld = 'https://meetings.hubspot.com/ledgy/row-salesteam';

export const FORM_STATUSES = Object.freeze<{ [x: string]: FormStatus }>({
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
  'Speedinvest',
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
].sort();
