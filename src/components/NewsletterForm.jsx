// @flow

import React, { Component } from 'react';
import { Trans } from '@lingui/react';
import 'isomorphic-fetch';

import { trackSignup, mixpanelUrl } from '../layouts/utils';

declare type FormStatus = {| status: 'idle' | 'loading' | 'invalid' | 'error' | 'submitted' |};
const IDLE = 'idle';
const LOADING = 'loading';
const INVALID = 'invalid';
const ERROR = 'error';
const SUBMITTED = 'submitted';

const MIXPANEL_TOKEN = '7f124dd9a799a7c687dc38ee554d9876';

const generateBase64EncodedJSON = (email, token) => {
  const mixpanelObject = {
    $token: token,
    $distinct_id: email,
    $set: {
      $first_name: email,
      $email: email
    }
  };
  return btoa(JSON.stringify(mixpanelObject));
};

const generateMixpanelUrl = data => `${mixpanelUrl}/engage/?data=${data}`;

export default class extends Component<Props, { email: string, ...FormStatus }> {
  state = { email: '', status: IDLE };
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ email: e.target.value, status: IDLE });
  };
  handleSubmit = async (e: any) => {
    e.preventDefault();
    this.setState({ status: LOADING });
    const { email } = this.state;
    const valid = this.re.test(email);
    if (valid) {
      const mixpanelJSON = generateBase64EncodedJSON(email, MIXPANEL_TOKEN);
      const url = generateMixpanelUrl(mixpanelJSON);
      try {
        const response = await fetch(url);
        if (response.status === 200) {
          this.setState({ status: SUBMITTED });
        } else {
          this.setState({ status: ERROR });
        }
      } catch (error) {
        this.setState({ status: ERROR });
      }
      // trackSignup('newsletter');
    } else {
      this.setState({ status: INVALID });
    }
  };
  render = () => {
    const { props, state } = this;
    const { status } = state;
    const { i18n } = props;
    const invalid = status === INVALID;
    const error = status === ERROR;
    const loading = status === LOADING;
    return (
      <>
        <form method="post" className="input-round py-5" onSubmit={this.handleSubmit} noValidate>
          <div className="form-group input-group bg-white gap-y p-2 mb-2">
            <input
              type="email"
              name="EMAIL"
              className="form-control"
              placeholder={i18n.t`Enter your email…`}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              name="subscribe"
              className="btn btn-primary btn-round btn-xl ml-2"
              disabled={invalid || error || loading}
            >
              <Trans>Subscribe</Trans>
            </button>
          </div>
          <div style={{ minHeight: '30px' }}>
            <small className="text-danger">
              {invalid && <Trans>Oops. This email address is invalid.</Trans>}
              {error && <Trans>Oops. Something went wrong, please try again.</Trans>}
            </small>
          </div>
        </form>
      </>
    );
  };
}
