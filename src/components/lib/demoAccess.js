// @flow

import {
  demoUrl,
  isValidEmail,
  SMALL_COMPANY_SIZES,
  FORM_STATES,
  isFieldMissing,
  track
} from '../../helpers';

const { ERROR, INVALID_EMAIL, INVALID_FIELDS, LOADING, SUBMITTED } = FORM_STATES;

export type DemoFormStatus =
  | 'idle'
  | 'loading'
  | 'invalid-email'
  | 'invalid-fields'
  | 'error'
  | 'submitted';

type State = {|
  companySize: string,
  email: string
|};

export const isSmallCompany = (companySize: string) => SMALL_COMPANY_SIZES.includes(companySize);

const redirectToDemo = () => {
  if (window) {
    window.location = demoUrl;
  }
};

const HUBSPOTUTK = 'hubspotutk=';
const getHubspotUserToken = (): string =>
  (document.cookie.split('; ').find(v => v.startsWith(HUBSPOTUTK)) || '').slice(HUBSPOTUTK.length);

const encodeBody = data =>
  JSON.stringify({
    fields: Object.entries(data).map(([name, value]) => ({ name, value })),
    context: { hutk: getHubspotUserToken() }
  });

const fetchHubspot = ({ email, companySize }: State) =>
  fetch('/getDemo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: encodeBody({ email, companysize: companySize })
  });

export const handleDemoAccessSubmit = async ({
  event,
  state,
  setFormStatus,
  setDemoRequested,
  toggle
}: {|
  event: SyntheticInputEvent<HTMLInputElement>,
  state: State,
  setFormStatus: DemoFormStatus => void,
  setDemoRequested: boolean => void,
  toggle: () => void
|}) => {
  event.preventDefault();
  setFormStatus(LOADING);
  const { email, companySize } = state;

  if (isFieldMissing({ email, companySize })) {
    setFormStatus(INVALID_FIELDS);
    return;
  }
  if (!isValidEmail(email)) {
    setFormStatus(INVALID_EMAIL);
    return;
  }

  const response = await fetchHubspot(state);
  if (response.status !== 200) {
    setFormStatus(ERROR);
    return;
  }
  track('getDemo.submit');

  setFormStatus(SUBMITTED);
  if (!isSmallCompany(companySize)) {
    track('identify.martina');
    setDemoRequested(true);
    return;
  }
  toggle();
  redirectToDemo();
};
