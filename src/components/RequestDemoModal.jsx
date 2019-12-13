// @flow

import React, { useState, type Node } from 'react';
import { Trans } from '@lingui/react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IDLE, LOADING, INVALID, ERROR } from '../helpers';

import Modal from './Modal';

const companySizes = ['1–10', '11–50', '51–100', '101–250', '251+'];

const Label = ({ text }: { text: Node }) => <span>{text}</span>;
const Input = ({
  state,
  setState,
  placeholder
}: {
  state: string,
  setState: string => void,
  placeholder: string
}) => (
  <div className="form-group input-group bg-white p-2 mt-2 mb-4">
    <input
      className="form-control"
      placeholder={placeholder}
      onChange={e => setState(e.target.value)}
      value={state}
    />
  </div>
);

const handleSubmit = e => {
  e.preventDefault();
};

const RequestDemoForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companySize, setCompanySize] = useState(companySizes[0]);
  const [formStatus, setFormStatus] = useState(IDLE);
  const invalid = formStatus === INVALID;
  const error = formStatus === ERROR;
  const loading = formStatus === LOADING;
  return (
    <form
      method="post"
      className="input-round py-4"
      onSubmit={handleSubmit}
      noValidate
      data-netlify="true"
    >
      <Label text={<Trans>Your name</Trans>} />
      <Input state={name} setState={setName} placeholder="Elon Must" />

      <Label text={<Trans>Your email</Trans>} />
      <Input state={email} setState={setEmail} placeholder="elon@must.com" />

      <Label text={<Trans>Name of your company</Trans>} />
      <Input state={companyName} setState={setCompanyName} placeholder="SpaceY" />

      <Label text={<Trans>Number of employees</Trans>} />
      <div className="d-flex mt-2 mb-4">
        {companySizes.map(size => (
          <button
            type="button"
            key={size}
            onClick={() => setCompanySize(size)}
            className={`btn multi-button border border-muted px-1 py-4 ${
              size === companySize ? 'bg-primary text-white' : ''
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <small className="text-danger form-error-message">
          {invalid && <Trans>Oops. This email address is invalid.</Trans>}
          {error && <Trans>Oops. Something went wrong, please try again.</Trans>}
        </small>
        <button
          type="submit"
          className="btn btn-primary btn-round btn-xl mt-6"
          disabled={invalid || error || loading}
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
