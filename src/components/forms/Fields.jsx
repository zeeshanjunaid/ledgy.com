// @flow
import React, { type Node } from 'react';

import { FORM_STATES } from '../../helpers';

import { type DemoFormStatus } from './lib';

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
  setFormStatus: (DemoFormStatus) => void,
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
        setFormStatus(FORM_STATES.IDLE);
      }}
      value={state}
      name={name}
    />
  </div>
);
