// @flow

import { navigate } from 'gatsby';

import {
  demoUrl,
  isValidEmail,
  removeModalFromDOM,
  SMALL_COMPANY_SIZES,
  FORM_STATES,
  isFieldMissing
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
  companySize: any | string,
  email: string,
  name: string
|};

export const isSmallCompany = (companySize: string) => SMALL_COMPANY_SIZES.includes(companySize);

const encodeBody = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const fetchNetlify = (state: State) =>
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodeBody({ 'form-name': 'request-demo', ...state })
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
  setFormStatus(SUBMITTED);
  if (isSmallCompany(companySize)) {
    removeModalFromDOM();
    navigate(demoUrl);
  } else {
    setDemoRequested(true);
  }
};
