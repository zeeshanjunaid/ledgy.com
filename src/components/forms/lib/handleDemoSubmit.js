// @flow

import { FORM_STATUSES, isFieldMissing, isValidEmail, track } from '../../../helpers';

import type { FormValues, ParsedFormValues } from './formTypes';
import { submitToHubspot } from './hubspot';
import {
  COMPANY,
  deerCompanyUrl,
  PREMIUM_EMPLOYEE_VALUE,
  ENTERPRISE_EMPLOYEE_VALUE,
  INVESTMENT_VALUE,
  investorUrl,
  SMALL_COMPANY_THRESHOLD,
  DEER_COMPANY_THRESHOLD,
  smallCompanyUrl,
} from './constants';

const { INVALID_EMAIL, INVALID_FIELDS, LOADING, SUBMITTED, ERROR } = FORM_STATUSES;

const isDeerCompany = (size: number) => size >= DEER_COMPANY_THRESHOLD;
const isSmallCompany = (size: number) =>
  size >= SMALL_COMPANY_THRESHOLD && size < DEER_COMPANY_THRESHOLD;

const getEmployeeValue = (size: number) => {
  if (isDeerCompany(size)) return size * ENTERPRISE_EMPLOYEE_VALUE;
  if (isSmallCompany(size)) return size * PREMIUM_EMPLOYEE_VALUE;
  return 0;
};
const getInvestmentValue = (size: number) => size * INVESTMENT_VALUE;

const getUrl = (values: ParsedFormValues) => {
  if (!values.isCompany) {
    return investorUrl;
  }
  return isSmallCompany(values.size) ? smallCompanyUrl : deerCompanyUrl;
};

const redirect = (values: ParsedFormValues) => {
  if (window) {
    window.location = getUrl(values);
  }
};

export const handleDemoSubmit = async ({
  values,
  event,
  setFormStatus,
}: {|
  values: FormValues,
  event: SyntheticInputEvent<HTMLInputElement>,
  setFormStatus: (FormStatus) => void,
|}): Promise<void> => {
  event.preventDefault();
  setFormStatus(LOADING);
  const { requesterType, email, size: sizeString } = values;

  if (isFieldMissing({ requesterType, sizeString })) {
    setFormStatus(INVALID_FIELDS);
    return;
  }

  if (!isValidEmail(email)) {
    setFormStatus(INVALID_EMAIL);
    return;
  }

  const isCompany = requesterType === COMPANY;
  const size = Number(sizeString);
  const parsedFormValues = { isCompany, email, size };

  const response = await submitToHubspot(parsedFormValues);
  if (response.status !== 200) {
    setFormStatus(ERROR);
    throw new Error(response.statusText);
  }

  if (isCompany) {
    track('getDemo.submit.company', { value: getEmployeeValue(size) });
  } else {
    track('getDemo.submit.investor', { value: getInvestmentValue(size) });
  }

  redirect(parsedFormValues);
  setFormStatus(SUBMITTED);
};
