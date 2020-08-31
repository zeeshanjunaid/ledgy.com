// @flow

import React, { useState, type Node } from 'react';
import { faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Trans } from '@lingui/react';

import { COMPANY_SIZES, FORM_STATES, demoUrl, scheduleDemoUrl } from '../../helpers';

import { Button } from '../Button';
import { handleDemoAccessSubmit, type DemoFormStatus, isSmallCompany } from './lib';

const { ERROR, IDLE, INVALID_EMAIL, INVALID_FIELDS, LOADING, SUBMITTED } = FORM_STATES;

const Label = ({ text }: { text: Node }) => <span>{text}</span>;
const Input = ({
  state,
  setState,
  placeholder,
  setFormStatus,
  name,
}: {|
  state: string,
  setState: (string) => void,
  placeholder: string,
  setFormStatus: (DemoFormStatus) => void,
  name: string,
|}) => (
  <div className="form-group input-group bg-white py-2 mb-4">
    <input
      className="form-control"
      placeholder={placeholder}
      onChange={(e) => {
        setState(e.target.value);
        setFormStatus(IDLE);
      }}
      value={state}
      name={name}
    />
  </div>
);

export const RequestDemoForm = () => {
  const [email, setEmail] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [formStatus, setFormStatus] = useState(IDLE);
  const state = { email, companySize };

  const invalidEmail = formStatus === INVALID_EMAIL;
  const invalidFields = formStatus === INVALID_FIELDS;
  const error = formStatus === ERROR;
  const loading = formStatus === LOADING;
  const submitted = formStatus === SUBMITTED;

  return submitted ? (
    <div className="d-flex align-items-center">
      <FontAwesomeIcon icon={faCheckCircle} size="2x" className="text-primary mr-4" />
      <Trans>You are being redirected. If nothing happens,</Trans>
      <a className="ml-1" href={isSmallCompany(companySize) ? demoUrl : scheduleDemoUrl}>
        <Trans> click here</Trans>
      </a>
    </div>
  ) : (
    <form
      method="post"
      id="getDemo"
      onSubmit={(event) => handleDemoAccessSubmit({ event, state, setFormStatus })}
      noValidate
    >
      <Label text={<Trans>Your email</Trans>} />
      <Input
        state={email}
        setState={setEmail}
        placeholder="elon@must.com"
        setFormStatus={setFormStatus}
        name="email"
      />

      <Label text={<Trans>Number of company employees</Trans>} />
      <div className="d-flex mt-2 mb-4">
        <input type="hidden" name="companySize" />
        {COMPANY_SIZES.map((size) => (
          <Button
            key={size}
            onClick={() => {
              setCompanySize(size);
              setFormStatus(IDLE);
            }}
            className={`multi-button border border-muted px-1 py-2 ${
              size === companySize ? 'selected' : ''
            }`}
          >
            {size}
          </Button>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-6">
        <small className="text-danger form-error-message">
          {invalidFields && <Trans>* Please fill in required fields</Trans>}
          {invalidEmail && <Trans>Oops. This email address is invalid.</Trans>}
          {error && <Trans>Something went wrong, please try again.</Trans>}
        </small>
        <Button
          className="btn-xl min-width-120px"
          disabled={invalidFields || invalidEmail || error || loading}
          type="submit"
        >
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} className="fa-lg spin" />
          ) : (
            <Trans>Submit</Trans>
          )}
        </Button>
      </div>
    </form>
  );
};
