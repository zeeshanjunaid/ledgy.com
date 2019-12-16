// @flow

import React, { Component } from 'react';
import { Trans } from '@lingui/react';
import 'isomorphic-fetch';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigate } from 'gatsby';

import { isValidEmail, removeModalFromDOM, IDLE, LOADING, INVALID, ERROR } from '../helpers';

import { signupOnMixpanel, trackOnMixpanel } from './lib';

declare type FormStatus = {| status: 'idle' | 'loading' | 'invalid' | 'error' |};

export default class extends Component<
  {| ...Props, trackingEvent: string |},
  { email: string, ...FormStatus }
> {
  state = { email: '', status: IDLE };
  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ email: e.target.value, status: IDLE });
  };
  handleSubmit = async (e: any) => {
    e.preventDefault();
    this.setState({ status: LOADING });
    const { email } = this.state;
    if (isValidEmail(email)) {
      try {
        const signupResponse = await signupOnMixpanel(email);
        if (signupResponse.status === 200) {
          trackOnMixpanel(email, this.props.trackingEvent);
          this.setState({ email: '', status: IDLE });
          removeModalFromDOM();
          navigate('/subscribed');
        } else {
          this.setState({ status: ERROR });
        }
      } catch (error) {
        this.setState({ status: ERROR });
      }
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
        <form method="post" className="input-round py-4" onSubmit={this.handleSubmit} noValidate>
          <div className="form-group input-group bg-white p-2 my-4 position-relative">
            <input
              type="email"
              name="EMAIL"
              className="form-control"
              placeholder={i18n.t`Enter your email…`}
              onChange={this.handleChange}
              value={this.state.email}
            />
            <button
              type="submit"
              name="subscribe"
              className="btn btn-primary btn-round btn-xl ml-2"
              disabled={invalid || error || loading}
              style={{ minWidth: '110px' }}
            >
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} className="fa-lg spin" />
              ) : (
                <Trans>Subscribe</Trans>
              )}
            </button>
            <small className="text-danger position-absolute form-error-message">
              {invalid && <Trans>Oops. This email address is invalid.</Trans>}
              {error && <Trans>Oops. Something went wrong, please try again.</Trans>}
            </small>
          </div>
        </form>
      </>
    );
  };
}
