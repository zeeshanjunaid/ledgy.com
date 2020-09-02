// @flow
import { FORM_STATUSES, isFieldMissing, isValidEmail, appUrl } from '../../../helpers';

const { INVALID_EMAIL, INVALID_FIELDS, LOADING, SUBMITTED } = FORM_STATUSES;

const encodeFormData = ({ name, email }: { name: string, email: string }): string => {
  const data = JSON.stringify([name, email]);
  return encodeURIComponent(`${Buffer.from(data).toString('base64')}`);
};

const decodeFormData = (data: string) => {
  const decoded = decodeURIComponent(data);
  const [name, email] = JSON.parse(atob(decoded));
  return {
    name,
    email,
  };
};

const redirectToApp = ({ name, email }: { name: string, email: string }) => {
  const data = encodeFormData({ name, email });
  if (window) {
    window.location = `${appUrl}/signup/${data}?utm_source=landing_signup`;
  }
};

export const handleSignupForm = ({
  name,
  email,
  event,
  setFormStatus,
}: {
  name: string,
  email: string,
  event: SyntheticInputEvent<HTMLInputElement>,
  setFormStatus: (FormStatus) => void,
}) => {
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
