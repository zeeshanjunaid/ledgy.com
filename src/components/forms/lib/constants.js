// @flow

import { demoUrl } from '../../../helpers';
import type { RequesterType } from './formTypes';

export const COMPANY: RequesterType = 'company';
export const INVESTOR: RequesterType = 'investor';

export const SMALL_COMPANY_THRESHOLD = 10;
export const DEER_COMPANY_THRESHOLD = 50;

export const PREMIUM_EMPLOYEE_VALUE = 2;
export const ENTERPRISE_EMPLOYEE_VALUE = 4;
export const INVESTMENT_VALUE = 15;

export const smallCompanyUrl = demoUrl;
export const deerCompanyUrl = 'https://meetings.hubspot.com/ledgy/equity-management-with-ledgy';
export const investorUrl = 'https://meetings.hubspot.com/ledgy/portfolio-management-with-ledgy';
