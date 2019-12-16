// @flow

import { navigate } from 'gatsby';

import {
  demoUrl,
  ERROR,
  EMAIL_REGEX,
  INVALID_EMAIL,
  INVALID_STATE,
  LOADING,
  removeModalFromDOM,
  SMALL_COMPANY_SIZES,
  SUBMITTED
} from '../../helpers';

export const isSmallCompany = (companySize: string) => SMALL_COMPANY_SIZES.includes(companySize);

export type DemoFormStatus =
  | 'idle'
  | 'loading'
  | 'invalid-email'
  | 'invalid-state'
  | 'error'
  | 'submitted';

type State = {|
  companyName: string,
  companySize: any | string,
  email: string,
  name: string
|};

const encodeBody = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

export const handleDemoAccessSubmit = async ({
  event,
  state,
  setFormStatus,
  setRequested
}: {
  event: SyntheticInputEvent<HTMLInputElement>,
  state: State,
  setFormStatus: DemoFormStatus => void,
  setRequested: boolean => void
}) => {
  event.preventDefault();
  setFormStatus(LOADING);
  const { email, companySize } = state;
  const missingField = Object.values(state).some(field => !field);
  if (missingField) {
    setFormStatus(INVALID_STATE);
    return;
  }
  const validEmail = EMAIL_REGEX.test(email);
  if (!validEmail) {
    setFormStatus(INVALID_EMAIL);
    return;
  }
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodeBody({ 'form-name': 'request-demo', ...state })
  });
  if (response.status === 200) {
    setFormStatus(SUBMITTED);
    if (isSmallCompany(companySize)) {
      removeModalFromDOM();
      navigate(demoUrl);
    } else {
      setRequested(true);
    }
  } else {
    setFormStatus(ERROR);
  }
};
