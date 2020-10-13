// @flow

import { FORM_STATUSES, isFieldMissing, isValidEmail, track, demoUrl } from '../../../helpers';

const { INVALID_EMAIL, INVALID_FIELDS, LOADING, SUBMITTED, ERROR } = FORM_STATUSES;

export type RequesterType = 'company' | 'investor';

type FormValues = {|
  requesterType: RequesterType,
  email: string,
  size: string,
|};

type ParsedFormValues = {|
  isCompany: boolean,
  email: string,
  size: number,
|};

const smallCompanyUrl = demoUrl;
const deerCompanyUrl = 'https://meetings.hubspot.com/ledgy/equity-management-with-ledgy';
const investorUrl = 'https://meetings.hubspot.com/ledgy/portfolio-management-with-ledgy';

const isSmallCompany = (size: number) => size < 50;

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

export const COMPANY: RequesterType = 'company';
export const INVESTOR: RequesterType = 'investor';

const companyFormId = 'b360c926-ed24-473a-8418-ee1050ddbd06';
const investorFormId = 'fcc4153b-79ea-49a1-9672-eb888d210355';

const EMPLOYEE_VALUE = 4;
const INVESTMENT_VALUE = 15;

const HUBSPOTUTK = 'hubspotutk=';
const getHubspotUserToken = (): string =>
  (document.cookie.split('; ').find((v) => v.startsWith(HUBSPOTUTK)) || '').slice(
    HUBSPOTUTK.length
  );

const encodeBody = (data) =>
  JSON.stringify({
    fields: Object.entries(data).map(([name, value]) => ({ name, value })),
    context: { hutk: getHubspotUserToken() },
  });

const submitToHubspot = ({ isCompany, email, size }: ParsedFormValues) => {
  const formId = isCompany ? companyFormId : investorFormId;
  const body = {
    ...(isCompany ? { numberofemployees: size } : { numberofinvestments: size }),
    email,
  };
  return fetch(`/submit/6881367/${formId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: encodeBody(body),
  });
};

export const handleDemoSubmit = async ({
  values,
  event,
  setFormStatus,
}: {|
  values: FormValues,
  event: SyntheticInputEvent<HTMLInputElement>,
  setFormStatus: (FormStatus) => void,
|}) => {
  event.preventDefault();
  setFormStatus(LOADING);
  const { requesterType, email, size: sizeString } = values;

  if (isFieldMissing({ requesterType, sizeString })) {
    setFormStatus(INVALID_FIELDS);
    return;
  }
  const size = Number(sizeString);

  if (!isValidEmail(email)) {
    setFormStatus(INVALID_EMAIL);
    return;
  }
  const isCompany = requesterType === COMPANY;

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
