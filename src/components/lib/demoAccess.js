// @flow

import {
  demoUrl,
  isValidEmail,
  removeModalFromDOM,
  SMALL_COMPANY_SIZES,
  FORM_STATES,
  isFieldMissing,
  NETLIFY_DEMO_FORM_NAME,
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
  companyName: string,
  companySize: string,
  email: string,
  name: string
|};

export const isSmallCompany = (companySize: string) => SMALL_COMPANY_SIZES.includes(companySize);

const redirectToDemo = () => {
  if (window) {
    window.location = demoUrl;
  }
};

const encodeBody = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const fetchNetlify = (state: State) =>
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodeBody({ 'form-name': NETLIFY_DEMO_FORM_NAME, ...state })
  });

export const handleDemoAccessSubmit = async ({
  event,
  state,
  setFormStatus,
  setDemoRequested
}: {
  event: SyntheticInputEvent<HTMLInputElement>,
  state: State,
  setFormStatus: DemoFormStatus => void,
  setDemoRequested: boolean => void
}) => {
  event.preventDefault();
  setFormStatus(LOADING);
  const { email, companySize } = state;

  if (isFieldMissing(state)) {
    setFormStatus(INVALID_FIELDS);
    return;
  }
  if (!isValidEmail(email)) {
    setFormStatus(INVALID_EMAIL);
    return;
  }

  const response = await fetchNetlify(state);
  if (response.status !== 200) {
    setFormStatus(ERROR);
    return;
  }
  track('submitDemoRequest');
  setFormStatus(SUBMITTED);
  if (!isSmallCompany(companySize)) {
    setDemoRequested(true);
    return;
  }
  removeModalFromDOM();
  redirectToDemo();
};
