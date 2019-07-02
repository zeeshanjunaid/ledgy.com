// @flow

import * as React from 'react';
import { Trans } from '@lingui/react';
import 'isomorphic-fetch';

export default class extends React.Component<
  Props,
  {
    email: string,
    invalid: boolean
  }
> {
  state = { email: '', invalid: false };
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ email: e.target.value, invalid: false });
  };
  handleSubmit = (e: any) => {
    const valid = this.re.test(this.state.email);
    if (!valid) {
      e.preventDefault();
      this.setState({ invalid: true });
    }
  };
  render = () => {
    const { i18n } = this.props;
    return (
      <>
        <form
          action="https://gmail.us3.list-manage.com/subscribe/post?u=9270e3d8bb9a6ef73633717af&amp;id=1c0ab18e1a"
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
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="btn btn-primary btn-round btn-xl"
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
