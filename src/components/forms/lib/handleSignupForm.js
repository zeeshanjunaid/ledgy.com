// @flow

import { FORM_STATUSES, isFieldMissing, isValidEmail, appUrl } from '../../../helpers';

const { INVALID_EMAIL, INVALID_FIELDS, LOADING, SUBMITTED } = FORM_STATUSES;

const encodeFormData = ({ name, email }: { name: string, email: string }): string => {
  const data = JSON.stringify([name, email]);
  return encodeURIComponent(data);
};

const redirectToApp = ({ name, email }: { name: string, email: string }) => {
  const data = encodeFormData({ name, email });
  const url = `${appUrl}/signup/${data}?utm_source=landing_signup`;
  if (window) {
    window.location = url;
  }
};

export const handleSignupForm = ({
  name,
  email,
  event,
  setFormStatus,
}: {|
  name: string,
  email: string,
  event: SyntheticInputEvent<HTMLInputElement>,
  setFormStatus: (FormStatus) => void,
|}) => {
  event.preventDefault();
  setFormStatus(LOADING);

  if (isFieldMissing({ name })) {
    setFormStatus(INVALID_FIELDS);
    return;
  }

  if (!isValidEmail(email)) {
    setFormStatus(INVALID_EMAIL);
    return;
  }

  redirectToApp({ name, email });
  setFormStatus(SUBMITTED);
};
