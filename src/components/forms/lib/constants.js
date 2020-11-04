// @flow

import { demoUrl } from '../../../helpers';
import type { RequesterType } from './formTypes';

export const COMPANY: RequesterType = 'company';
export const INVESTOR: RequesterType = 'investor';

export const DEER_COMPANY_THRESHOLD = 60;
export const FUND_INVESTMENT_THRESHOLD = 20;

export const EMPLOYEE_VALUE = 4;
export const INVESTMENT_VALUE = 15;

export const smallCompanyUrl = demoUrl;
export const deerCompanyUrl = 'https://meetings.hubspot.com/ledgy/equity-management-with-ledgy';
export const investorUrl = 'https://demo.ledgy.com/3whvEG3wR6qMYGnyy/dashboard';
export const fundUrl = 'https://meetings.hubspot.com/ledgy/portfolio-management-with-ledgy';
