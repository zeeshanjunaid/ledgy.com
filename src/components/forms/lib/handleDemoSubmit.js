// @flow

import { FORM_STATUSES, isFieldMissing, isValidEmail, track } from '../../../helpers';

import type { FormValues, ParsedFormValues } from './formTypes';
import { submitToHubspot } from './hubspot';
import {
  COMPANY,
  deerCompanyUrl,
  EMPLOYEE_VALUE,
  INVESTMENT_VALUE,
  investorUrl,
  SMALL_COMPANY_THRESHOLD,
  smallCompanyUrl,
} from './constants';

const { INVALID_EMAIL, INVALID_FIELDS, LOADING, SUBMITTED, ERROR } = FORM_STATUSES;

const isSmallCompany = (size: number) => size < SMALL_COMPANY_THRESHOLD;

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
    track('getDemo.submit.company', { value: size * EMPLOYEE_VALUE });
  } else {
    track('getDemo.submit.investor', { value: size * INVESTMENT_VALUE });
  }

  redirect(parsedFormValues);
  setFormStatus(SUBMITTED);
};
