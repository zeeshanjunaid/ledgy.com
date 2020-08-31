// @flow

import React, { useState } from 'react';

import { COMPANY_SIZES, FORM_STATES, demoUrl, scheduleDemoUrl } from '../../helpers';
import { Button } from '../Button';
import { Input } from './Fields';

const { ERROR, IDLE, INVALID_EMAIL, INVALID_FIELDS, LOADING, SUBMITTED } = FORM_STATES;

export const SignupForm = ({ title, buttonText }: { title: string, buttonText: string }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState(IDLE);
  const inputClassName = 'height-42px bg-transparent text-white placeholder-white';
  return (
    <div className="d-flex flex-column align-items-center border border-gray-neutral p-4 ml-md-4 rounded">
      <h4 className="mt-5 mb-4">{title}</h4>
      <form
        method="post"
        // onSubmit={(event) => null}
        noValidate
        className="w-100 p-4 d-flex flex-column align-items-center justify-content-between"
      >
        <Input
          state={name}
          setState={setName}
          placeholder="Full name"
          setFormStatus={setFormStatus}
          name="name"
          wrapperClassName="mb-4"
          className={inputClassName}
        />
        <Input
          state={email}
          setState={setEmail}
          placeholder="Email address"
          setFormStatus={setFormStatus}
          name="email"
          wrapperClassName="mb-4"
          className={inputClassName}
        />
        <Button cta className="w-100 mx-1 mt-4 mb-5 align-self-center btn-xl">
          {buttonText}
        </Button>
      </form>
    </div>
  );
};
