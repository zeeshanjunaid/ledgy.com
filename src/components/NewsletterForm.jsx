// @flow

import React, { Component } from 'react';
import { Trans } from '@lingui/react';
import 'isomorphic-fetch';

import { trackSignup, mixpanelUrl } from '../layouts/utils';

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

export default class extends Component<Props, { email: string, invalid: boolean }> {
  state = { email: '', invalid: false };
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ email: e.target.value, invalid: false });
  };
  handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email } = this.state;
    const valid = this.re.test(email);
    if (valid) {
      const mixpanelJSON = generateBase64EncodedJSON(email, MIXPANEL_TOKEN);
      const url = generateMixpanelUrl(mixpanelJSON);
      console.log(mixpanelUrl);
      console.log(url);
      const response = await fetch(url);
      console.log(response);
      if (response.status === 200) {
        console.log('submitted');
      } else {
        console.log('error');
      }
      // trackSignup('newsletter');
    } else {
      this.setState({ invalid: true });
    }
  };
  render = () => {
    const { i18n } = this.props;
    return (
      <>
        <form method="post" className="input-round py-5" onSubmit={this.handleSubmit} noValidate>
          <div className="form-group input-group bg-white gap-y p-2 mb-0">
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
              id="mc-embedded-subscribe"
              className="btn btn-primary btn-round btn-xl ml-2"
            >
              <Trans>Subscribe</Trans>
            </button>
          </div>
          <small className={`text-danger ${this.state.invalid ? '' : 'invisible'}`}>
            <Trans>Oops. This email address is invalid.</Trans>
          </small>
        </form>
      </>
    );
  };
}
