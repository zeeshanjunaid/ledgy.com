// @flow

import { Link, graphql } from 'gatsby';
import { withI18n } from '@lingui/react';
import React from 'react';

import { Title } from './utils';
import { GetDemoForm } from '../components/forms';
import { ExternalLogoRow } from '../components/ExternalLogoRow';
import { SellingProp } from '../components/SellingProp';
import { CTABanner } from '../components/CTABanner';
import logoInvertedCompact from '../img/logo-inverted-compact.png';

const Logo = (props: { prefix: string }) => (
  <Link href to={`${props.prefix}/#start`}>
    <img width={80} src={logoInvertedCompact} alt="Ledgy" />
  </Link>
);

const Quote = (quoteProps: {| quote: string, name: string |}) => (
  <div className="container text-center py-7 line-height-lg">
    <h3 className="mb-3">“{quoteProps.quote}”</h3>
    <h6>— {quoteProps.name}</h6>
  </div>
);

const DecoShapes = () => (
  <>
    <div className="one-pager-deco-shape one-pager-deco-shape--one" />
    <div className="one-pager-deco-shape one-pager-deco-shape--two" />
  </>
);

const SignupPage = (props: LayoutProps) => {
  const { data, prefix, location } = props;
  const {
    title,
    description,
    formTitle,
    formButtonText,
    content,
    type,
  } = data.contentfulSignupPage;

  return (
    <>
      <Title title={title} description={description} />
      <header className="header d-flex home-banner px-1 text-left bg-primary overflow-hidden">
        <div className="container my-4 my-md-auto position-relative z-index-base">
          <div className="row mt-4 mt-lg-2 pb-4 pb-md-6">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="mt-lg-n4 mb-md-4 mr-md-4">
                <Logo {...props} />
                <h1 className="text-white mt-5 mb-2 mb-sm-3">{title}</h1>
                <div className="text-lg line-height-lg text-white font-weight-light pb-3">
                  {description}
                </div>
              </div>
            </div>
            <div className="text-white col-lg-6 d-flex flex-column justify-content-center mt-4 mt-lg-0">
              <GetDemoForm
                title={formTitle}
                buttonText={formButtonText}
                contentfulRequesterType={type}
              />
            </div>
          </div>
        </div>
        <DecoShapes />
      </header>
      <div className="position-relative bg-white z-index-base">
        {content.map(({ __typename, id, ...entry }, i) => {
          if (__typename === 'ContentfulQuote') {
            return <Quote key={id} {...entry} />;
          }
          if (__typename === 'ContentfulExternalLogos') {
            return <ExternalLogoRow key={id} {...entry} />;
          }
          if (__typename === 'ContentfulSellingProposition') {
            return <SellingProp key={id} {...entry} prefix={prefix} imgFirst={i % 2 === 0} />;
          }
          return null;
        })}
        <CTABanner location={location} {...props} />
      </div>
    </>
  );
};

export default withI18n()(SignupPage);

export const pageQuery = graphql`
  query($id: String!) {
    contentfulSignupPage(id: { eq: $id }) {
      id
      slug
      title
      description
      formTitle
      formButtonText
      content {
        ... on ContentfulExternalLogos {
          id
          title
          logos {
            title
            description
            localFile {
              childImageSharp {
                fixed(width: 120) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        ... on ContentfulSellingProposition {
          id
          title
          description
          link
          linkTo
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        ... on ContentfulQuote {
          id
          quote
          name
        }
      }
    }
  }
`;
