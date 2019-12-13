// @flow

import React, { useState, type Node } from 'react';
import { Trans } from '@lingui/react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigate } from 'gatsby';

import {
  IDLE,
  LOADING,
  INVALID,
  ERROR,
  EMAIL_REGEX,
  SUBMITTED,
  removeModalFromDOM,
  demoUrl
} from '../helpers';

import Modal from './Modal';

const COMPANY_SIZES = ['1–10', '11–50', '51–100', '101–250', '251+'];
const SMALL_COMPANY_SIZES = COMPANY_SIZES.slice(0, 2);
const INVALID_EMAIL = `${INVALID}-email`;
const INVALID_STATE = `${INVALID}-state`;
const isSmallCompany = companySize => SMALL_COMPANY_SIZES.includes(companySize);

declare type FormStatus = {|
  status: 'idle' | 'loading' | 'invalid-email' | 'invalid-state' | 'error'
|};

const Label = ({ text }: { text: Node }) => <span>{text}</span>;
const Input = ({
  state,
  setState,
  placeholder,
  setFormStatus
}: {|
  state: string,
  setState: string => void,
  placeholder: string,
  setFormStatus: string => void
|}) => (
  <div className="form-group input-group bg-white p-2 mt-2 mb-4">
    <input
      className="form-control"
      placeholder={placeholder}
      onChange={e => {
        setState(e.target.value);
        setFormStatus(IDLE);
      }}
      value={state}
    />
  </div>
);

const encodeBody = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const handleSubmit = async (e, state, setFormStatus) => {
  e.preventDefault();
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
    removeModalFromDOM();
    if (isSmallCompany(companySize)) {
      navigate(demoUrl);
    } else {
      setFormStatus(SUBMITTED);
    }
  } else {
    setFormStatus(ERROR);
  }
};

const RequestDemoForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [formStatus, setFormStatus] = useState(IDLE);
  const state = { name, email, companyName, companySize };

  const invalidEmail = formStatus === INVALID_EMAIL;
  const invalidState = formStatus === INVALID_STATE;
  const error = formStatus === ERROR;
  const loading = formStatus === LOADING;
  const submitted = formStatus === SUBMITTED;

  return submitted ? (
    <div>We’ll be in touch shortly</div>
  ) : (
    <form
      method="post"
      className="input-round py-4"
      onSubmit={e => handleSubmit(e, state, setFormStatus)}
      noValidate
      data-netlify="true"
    >
      <Label text={<Trans>Your name</Trans>} />
      <Input
        state={name}
        setState={setName}
        placeholder="Elon Must"
        setFormStatus={setFormStatus}
      />

      <Label text={<Trans>Your email</Trans>} />
      <Input
        state={email}
        setState={setEmail}
        placeholder="elon@must.com"
        setFormStatus={setFormStatus}
      />

      <Label text={<Trans>Name of your company</Trans>} />
      <Input
        state={companyName}
        setState={setCompanyName}
        placeholder="SpaceY"
        setFormStatus={setFormStatus}
      />

      <Label text={<Trans>Number of employees</Trans>} />
      <div className="d-flex mt-2 mb-4">
        {COMPANY_SIZES.map(size => (
          <button
            type="button"
            key={size}
            onClick={() => {
              setCompanySize(size);
              setFormStatus(IDLE);
            }}
            className={`btn multi-button border border-muted px-1 py-4 ${
              size === companySize ? 'bg-primary text-white' : ''
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      <div className="d-flex justify-content-between align-items-center mt-6">
        <small className="text-danger form-error-message">
          {invalidState && <Trans>Please fill out all fields</Trans>}
          {invalidEmail && <Trans>Oops. This email address is invalid.</Trans>}
          {error && <Trans>Something went wrong, please try again.</Trans>}
        </small>
        <button
          type="submit"
          className="btn btn-primary btn-round btn-xl"
          disabled={invalidState || invalidEmail || error || loading}
          style={{ minWidth: '120px' }}
        >
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} className="fa-lg spin" />
          ) : (
            <Trans>Submit</Trans>
          )}
        </button>
      </div>
    </form>
  );
};

export const RequestDemoModal = () => (
  <Modal
    id="demo-access"
    titleClassNames="text-white"
    title={<Trans>Request a demo</Trans>}
    buttonText={<Trans>Get a Demo</Trans>}
    buttonClassName="btn-outline-light d-sm-inline btn-xl mx-1"
    hideFooter
  >
    <p className="text-dark m-0">
      <Trans>Please fill out the information below to get a demo</Trans>
    </p>
    <RequestDemoForm />
  </Modal>
);
