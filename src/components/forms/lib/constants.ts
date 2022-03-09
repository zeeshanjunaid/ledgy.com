import { RequesterType } from './formTypes';

export const COMPANY: RequesterType = 'company';
export const INVESTOR: RequesterType = 'investor';

export const DEER_COMPANY_THRESHOLD = 60;
export const FUND_INVESTMENT_THRESHOLD = 10;

export const EMPLOYEE_VALUE = 4;
export const INVESTMENT_VALUE = 25;

export const smallCompanyUrl = '/company-demo';
export const investorUrl = '/investor-demo';
export const meetingRequestUrl = 'https://meetings.hubspot.com/ledgy/salesteam';

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
