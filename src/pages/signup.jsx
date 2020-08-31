// @flow

import { Link, graphql } from 'gatsby';
import { withI18n } from '@lingui/react';
import React from 'react';
import { Button } from '../components/Button';

import logoInvertedCompact from '../img/logo-inverted-compact.png';

const Logo = (props: { prefix: string }) => (
  <Link href to={`${props.prefix}/#start`}>
    <img width={100} src={logoInvertedCompact} alt="Ledgy" />
  </Link>
);

const SignupForm = ({ title, buttonText }: { title: string, buttonText: string }) => {
  return (
    <form
      method="post"
      // onSubmit={(event) => null}
      noValidate
    >
      <div>{title}</div>
      <Button>{buttonText}</Button>
    </form>
  );
};

const SignupPage = (props: Props) => {
  const [signupContent] = props.data.allContentfulSignupPage.edges;
  const { title, description, formTitle, formButtonText } = signupContent.node;
  return (
    <header className="header d-flex home-banner px-1 text-left bg-primary">
      <div className="container my-auto position-relative z-index-base">
        <div className="row mt-md-2 pb-4 pb-md-6">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="mt-md-n6 mb-md-4">
              <Logo {...props} />
              <h1 className="text-white mt-5 mt-lg-0 mb-2 mb-sm-3">{title}</h1>
              <div className="text-lg line-height-lg text-white font-weight-light pb-3">
                {description}
              </div>
            </div>
          </div>
          <div className="text-white col-lg-6 d-flex flex-column justify-content-center mt-4 mt-lg-0">
            <SignupForm title={formTitle} buttonText={formButtonText} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default withI18n()(SignupPage);

export const pageQuery = graphql`
  query {
    allContentfulSignupPage {
      edges {
        node {
          title
          description
          formTitle
          formButtonText
        }
      }
    }
  }
`;
