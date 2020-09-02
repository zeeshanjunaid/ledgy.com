// @flow

import React, { useState } from 'react';

import { FORM_STATUSES, appUrl } from '../../helpers';
import { Button } from '../Button';
import { Input, InvalidFieldHints } from './Fields';
import { handleSignupForm } from './lib';

const { IDLE } = FORM_STATUSES;

export const SignupForm = ({ title, buttonText }: { title: string, buttonText: string }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState(IDLE);
  const inputClassName = 'height-42px bg-transparent text-white placeholder-white';

  return (
    <div className="d-flex flex-column align-items-center border border-gray-neutral p-2 p-sm-4 ml-lg-4 mt-lg-4 rounded">
      <h4 className="mt-5 mb-4">{title}</h4>
      <form
        method="post"
        onSubmit={(event) => handleSignupForm({ name, email, event, setFormStatus })}
        noValidate
        className="w-100 p-2 p-sm-4 d-flex flex-column align-items-center justify-content-between"
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
        <Button
          disabled={formStatus !== IDLE}
          type="submit"
          cta
          className="w-100 mx-1 mt-4 mb-4 align-self-center btn-xl"
        >
          {buttonText}
        </Button>
        <span className="text-sm mb-3">
          Already have an account?{' '}
          <a className="hover-brigthen" href={`${appUrl}/login`}>
            Log in
          </a>
        </span>
        <InvalidFieldHints formStatus={formStatus} />
      </form>
    </div>
  );
};
