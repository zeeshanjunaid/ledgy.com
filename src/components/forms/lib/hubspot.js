// @flow

import type { ParsedFormValues } from './formTypes';

const COMPANY_FORM_ID = 'b360c926-ed24-473a-8418-ee1050ddbd06';
const INVESTOR_FORM_ID = 'fcc4153b-79ea-49a1-9672-eb888d210355';
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

export const submitToHubspot = ({ isCompany, email, size }: ParsedFormValues) => {
  const formId = isCompany ? COMPANY_FORM_ID : INVESTOR_FORM_ID;
  const body = encodeBody({
    ...(isCompany ? { numberofemployees: size } : { numberofinvestments: size }),
    email,
  });
  return fetch(`/submit/6881367/${formId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });
};
