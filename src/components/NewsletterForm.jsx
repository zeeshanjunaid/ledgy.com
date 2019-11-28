// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import 'isomorphic-fetch';

import { trackSignup } from '../layouts/utils';

export default class extends React.Component<Props, { email: string, invalid: boolean }> {
  state = { email: '', invalid: false };
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ email: e.target.value, invalid: false });
  };
  handleSubmit = (e: any) => {
    const valid = this.re.test(this.state.email);
    if (valid) {
      trackSignup('newsletter');
    } else {
      e.preventDefault();
      this.setState({ invalid: true });
    }
  };
  render = () => {
    const { i18n } = this.props;
    return (
      <>
        <form
          action="https://ledgy.us16.list-manage.com/subscribe/post?u=d6181c123b4d20b2104c4652f&amp;id=c9cfbb11a6"
          method="post"
          className="input-round py-5"
          onSubmit={this.handleSubmit}
          noValidate
        >
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
