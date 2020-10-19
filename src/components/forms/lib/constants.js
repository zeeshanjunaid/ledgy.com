// @flow

import { demoUrl } from '../../../helpers';
import type { RequesterType } from './formTypes';

export const COMPANY: RequesterType = 'company';
export const INVESTOR: RequesterType = 'investor';

export const SMALL_COMPANY_THRESHOLD = 10;
export const DEER_COMPANY_THRESHOLD = 50;
export const FUND_INVESTMENT_THRESHOLD = 10;

export const PREMIUM_EMPLOYEE_VALUE = 2;
export const ENTERPRISE_EMPLOYEE_VALUE = 4;
export const INVESTMENT_VALUE = 15;

export const smallCompanyUrl = demoUrl;
export const deerCompanyUrl = 'https://meetings.hubspot.com/ledgy/equity-management-with-ledgy';
export const investorUrl = 'https://demo.ledgy.com/3whvEG3wR6qMYGnyy/dashboard';
export const fundUrl = 'https://meetings.hubspot.com/ledgy/portfolio-management-with-ledgy';
