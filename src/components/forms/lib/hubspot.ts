import { ParsedFormValues } from './formTypes';

const DEMO_FORM_ID = 'b360c926-ed24-473a-8418-ee1050ddbd06';
const HUBSPOT_UTK = 'hubspotutk';
const GOOGLE_CID = '_ga';

const getCookieValue = (name: string) =>
  (document.cookie.split('; ').find((v) => v.startsWith(name)) || '').slice(name.length + 1);

const getHubspotUserToken = () => getCookieValue(HUBSPOT_UTK);
const getGoogleAnalyticsClientId = () => getCookieValue(GOOGLE_CID).slice(6);

const DEMO_REQUEST = 'demoRequest';

declare type EncodeBodyData = {
  demorequestdate: string;
  pipelinevalue: number;
  email: string;
  google_analytics_client_id: string;
  numberofemployees?: number;
  numberofinvestments?: number;
  lead_form_source: typeof DEMO_REQUEST;
};

const encodeBody = (data: EncodeBodyData) =>
  JSON.stringify({
    fields: Object.entries(data).map(([name, value]) => ({ name, value })),
    context: { hutk: getHubspotUserToken() },
  });

const getHubSpotDate = (date: Date): string => date.toISOString().slice(0, 10);

export const submitToHubspot = ({ isCompany, email, size, value }: ParsedFormValues) => {
  const body = encodeBody({
    ...(isCompany ? { numberofemployees: size } : { numberofinvestments: size }),
    demorequestdate: getHubSpotDate(new Date()),
    pipelinevalue: value,
    email,
    google_analytics_client_id: getGoogleAnalyticsClientId(),
    lead_form_source: DEMO_REQUEST,
  });
  return fetch(`/submit/6881367/${DEMO_FORM_ID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });
};
