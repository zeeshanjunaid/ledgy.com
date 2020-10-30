// @flow

import { FORM_STATUSES, isFieldMissing, isValidEmail, track } from '../../../helpers';

import type { FormValues, ParsedFormValues } from './formTypes';
import { submitToHubspot } from './hubspot';
import {
  deerCompanyUrl,
  investorUrl,
  fundUrl,
  COMPANY,
  PREMIUM_EMPLOYEE_VALUE,
  ENTERPRISE_EMPLOYEE_VALUE,
  INVESTMENT_VALUE,
  SMALL_COMPANY_THRESHOLD,
  DEER_COMPANY_THRESHOLD,
  FUND_INVESTMENT_THRESHOLD,
  smallCompanyUrl,
} from './constants';

const { INVALID_EMAIL, INVALID_FIELDS, LOADING, SUBMITTED, FETCH_ERROR } = FORM_STATUSES;

const isDeerCompany = (size: number) => size >= DEER_COMPANY_THRESHOLD;
const isSmallCompany = (size: number) =>
  size >= SMALL_COMPANY_THRESHOLD && size < DEER_COMPANY_THRESHOLD;
const isFund = (size: number) => size >= FUND_INVESTMENT_THRESHOLD;

const getEmployeeValue = (size: number) => {
  if (isDeerCompany(size)) return size * ENTERPRISE_EMPLOYEE_VALUE;
  if (isSmallCompany(size)) return size * PREMIUM_EMPLOYEE_VALUE;
  return 0;
};
const getInvestmentValue = (size: number) => {
  if (isFund(size)) return size * INVESTMENT_VALUE;
  return 0;
};

const getPipelineValue = (size: number, isCompany: boolean) =>
  isCompany ? getEmployeeValue(size) : getInvestmentValue(size);

const getUrl = ({ isCompany, size }: ParsedFormValues) => {
  if (!isCompany) {
    return isFund(size) ? fundUrl : investorUrl;
  }
  return isDeerCompany(size) ? deerCompanyUrl : smallCompanyUrl;
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
  const value = getPipelineValue(size, isCompany);
  const parsedFormValues = { isCompany, email, size, value };

  const response = await submitToHubspot(parsedFormValues);
  if (response.status !== 200) {
    setTimeout(() => {
      setFormStatus(FETCH_ERROR);
    }, 1000);
    throw new Error(response.statusText);
  }

  const eventName = `getDemo.submit.${requesterType}`;
  track(eventName, { value });

  redirect(parsedFormValues);
  setFormStatus(SUBMITTED);
};
