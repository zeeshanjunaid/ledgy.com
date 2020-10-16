// @flow

import React, { useState } from 'react';
import { Trans } from '@lingui/react';

import { FORM_STATUSES, appUrl } from '../../helpers';
import { Button } from '../Button';
import { Input, InvalidFieldHints } from './Fields';
import { handleDemoSubmit, type RequesterType, COMPANY, INVESTOR } from './lib';

const { IDLE } = FORM_STATUSES;

const REQUESTER_TYPES = [COMPANY, INVESTOR];

export const DemoForm = ({
  title,
  buttonText,
  contentfulRequesterType,
  i18n,
}: {|
  title: string,
  buttonText: string,
  contentfulRequesterType: RequesterType | void,
  i18n: I18n,
|}) => {
  const [requesterType, setRequesterType] = useState(contentfulRequesterType || COMPANY);
  const [email, setEmail] = useState('');
  const [size, setSize] = useState('');
  const [formStatus, setFormStatus] = useState(IDLE);
  const inputClassName = 'height-42px bg-transparent text-white placeholder-white';
  const values = { requesterType, email, size };
  const isCompany = requesterType === COMPANY;

  return (
    <div className="d-flex flex-column align-items-center border border-gray-neutral p-2 p-sm-4 ml-lg-4 mt-lg-4 rounded">
      <h4 className="mt-5 mb-4">{title}</h4>
      <form
        method="post"
        onSubmit={(event) => handleDemoSubmit({ values, event, setFormStatus })}
        noValidate
        className="w-100 p-2 p-sm-4 d-flex flex-column align-items-center justify-content-between"
      >
        {!contentfulRequesterType && (
          <div className="d-flex mt-2 mb-4 w-100">
            <input type="hidden" name="type" />
            {REQUESTER_TYPES.map((type) => (
              <Button
                key={type}
                onClick={() => {
                  setRequesterType(type);
                  setSize('');
                  setFormStatus(IDLE);
                }}
                className={`multi-button border border-muted px-1 py-2 ${
                  type === requesterType ? 'selected' : ''
                }`}
              >
                {isCompany ? i18n.t`Company` : i18n.t`Investor`}
              </Button>
            ))}
          </div>
        )}
        <Input
          state={email}
          setState={setEmail}
          placeholder={i18n.t`Email address`}
          setFormStatus={setFormStatus}
          name="email"
          wrapperClassName="mb-4"
          className={inputClassName}
        />
        <Input
          state={size}
          setState={setSize}
          placeholder={
            isCompany ? i18n.t`Number of company employees` : i18n.t`Number of portfolio companies`
          }
          setFormStatus={setFormStatus}
          name="size"
          wrapperClassName="mb-4"
          className={inputClassName}
          type="number"
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
          <Trans>Already have an account?</Trans>{' '}
          <a className="hover-brigthen" href={`${appUrl}/login`}>
            <Trans>Log in</Trans>
          </a>
        </span>
        <InvalidFieldHints formStatus={formStatus} />
      </form>
    </div>
  );
};
