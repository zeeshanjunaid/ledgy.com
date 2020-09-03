// @flow
import React, { type Node } from 'react';
import { Trans } from '@lingui/react';

import { FORM_STATUSES } from '../../helpers';

export const Label = ({ text }: { text: Node }) => <span>{text}</span>;

export const Input = ({
  state,
  setState,
  placeholder,
  setFormStatus,
  name,
  wrapperClassName,
  className = '',
}: {|
  state: string,
  setState: (string) => void,
  placeholder: string,
  setFormStatus: (FormStatus) => void,
  name: string,
  wrapperClassName: string,
  className?: string,
|}) => (
  <div className={`input-group ${wrapperClassName}`}>
    <input
      className={`form-control ${className}`}
      placeholder={placeholder}
      onChange={(e) => {
        setState(e.target.value);
        setFormStatus(FORM_STATUSES.IDLE);
      }}
      value={state}
      name={name}
    />
  </div>
);

export const InvalidFieldHints = ({
  formStatus,
  className = '',
}: {
  formStatus: FormStatus,
  className?: string,
}) => {
  const { INVALID_FIELDS, INVALID_REQUIRED_FIELDS, INVALID_EMAIL, ERROR } = FORM_STATUSES;
  return (
    <small className={`text-danger form-error-message ${className}`} style={{ minHeight: '25px' }}>
      {formStatus === INVALID_FIELDS && <Trans>Please fill in all fields</Trans>}
      {formStatus === INVALID_REQUIRED_FIELDS && <Trans>* Please fill in required fields</Trans>}
      {formStatus === INVALID_EMAIL && <Trans>Oops. This email address is invalid.</Trans>}
      {formStatus === ERROR && <Trans>Something went wrong, please try again.</Trans>}
    </small>
  );
};
