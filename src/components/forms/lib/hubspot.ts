import { ParsedFormValues } from './formTypes';

const DEMO_FORM_ID = 'b360c926-ed24-473a-8418-ee1050ddbd06';
const HUBSPOTUTK = 'hubspotutk=';

const getHubspotUserToken = (): string =>
  (document.cookie.split('; ').find((v) => v.startsWith(HUBSPOTUTK)) || '').slice(
    HUBSPOTUTK.length
  );

declare type EncodeBodyData = {
  demorequestdate: string;
  unverified_pipeline_value: number;
  email: string;
  numberofemployees?: number;
  numberofinvestments?: number;
};

const encodeBody = (data: EncodeBodyData) =>
  JSON.stringify({
    fields: Object.entries(data).map(([name, value]) => ({ name, value })),
    context: { hutk: getHubspotUserToken() },
  });

const padDate = (number: number): string => String(number).padStart(2, '0');

const getHubSpotDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${padDate(month)}-${padDate(day)}`;
};

export const submitToHubspot = ({ isCompany, email, size, value }: ParsedFormValues) => {
  const body = encodeBody({
    ...(isCompany ? { numberofemployees: size } : { numberofinvestments: size }),
    demorequestdate: getHubSpotDate(new Date()),
    unverified_pipeline_value: value,
    email,
  });
  return fetch(`/submit/6881367/${DEMO_FORM_ID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });
};
