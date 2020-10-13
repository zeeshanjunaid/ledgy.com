// @flow

import { FORM_STATUSES, isFieldMissing, isValidEmail } from '../../../helpers';

const { INVALID_EMAIL, INVALID_FIELDS, LOADING, SUBMITTED } = FORM_STATUSES;

// REMOVE AFTER DELETING FUNCTIONALITY IN APP
// const redirectToApp = ({ name, email }: { name: string, email: string }) => {
//   const data = encodeFormData({ name, email });
//   const url = `${appUrl}/signup/${data}?utm_source=landing_signup`;
//   if (window) {
//     window.location = url;
//   }
// };

export const handleDemoSubmit = ({
  values,
  event,
  setFormStatus,
}: {|
  values: {| requesterType: string, email: string, size: string |},
  event: SyntheticInputEvent<HTMLInputElement>,
  setFormStatus: (FormStatus) => void,
|}) => {
  event.preventDefault();
  setFormStatus(LOADING);
  const { requesterType, email, size } = values;

  if (isFieldMissing({ requesterType, size })) {
    setFormStatus(INVALID_FIELDS);
    return;
  }

  if (!isValidEmail(email)) {
    setFormStatus(INVALID_EMAIL);
    return;
  }

  setFormStatus(SUBMITTED);
};
