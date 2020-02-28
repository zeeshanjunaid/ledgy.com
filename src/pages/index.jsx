// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';

import { HomePageHeader } from '../components/HomePageHeader';
import { MainProblemLayout } from '../components/MainProblemLayout';
import { ExternalLogoRow } from '../components/ExternalLogoRow';
import { SellingProp } from '../components/SellingProp';

const DecoShapes = () => (
  <>
    <div className="top-deco-shape top-deco-shape--one" />
    <div className="top-deco-shape top-deco-shape--two" />
  </>
);

const IndexPage = (props: Props) => (
  <main className="position-relative overflow-hidden">
    <DecoShapes />
    <HomePageHeader {...props} />
    <MainProblemLayout
      title={
        <Trans>
          <u>Manual</u> Excel-based processes just <u>don’t work</u> for a growing company
        </Trans>
      }
      subtitle={
        <Trans>
          When companies scale, their equity plan management becomes a full-time job, cap tables
          start being very error-prone, which increases legal and accounting costs
          disproportionally. Signing processes and creating specific data reports start slowing
          finance and HR down a lot.
        </Trans>
      }
      imgProps={{ ...props.data.excel }}
    />

    {props.data.page.entries.map(({ __typename, ...entry }, index) => {
      if (__typename === 'ContentfulExternalLogos') {
        return <ExternalLogoRow {...entry} />;
      }
      if (__typename === 'ContentfulSellingProposition') {
        return <SellingProp {...entry} imgFirst={index % 2 === 0} />;
      }
      return null;
    })}
  </main>
);

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    tablet: imageSharp(fluid: { originalName: { regex: "/tablet-dashboard.png/" } }) {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    companies: contentfulExternalLogos(contentful_id: { eq: "3DEHgp3WUysqgzByviFgPS" }) {
      title
      logos {
        title
        localFile {
          childImageSharp {
            fixed(width: 120) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    media: contentfulExternalLogos(contentful_id: { eq: "3QqTAXNEDjrDpDtxrtodpP" }) {
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
    page: contentfulIndexPage(contentful_id: { eq: "jjbelvJa8nRqbGqYrr5wi" }) {
      entries {
        ... on ContentfulExternalLogos {
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
      }
    }
    excel: imageSharp(fluid: { originalName: { regex: "/excel-illustration/" } }) {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    scalable: imageSharp(fluid: { originalName: { regex: "/scalable/" } }) {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    talent: imageSharp(fluid: { originalName: { regex: "/talent/" } }) {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    security: imageSharp(fluid: { originalName: { regex: "/security/" } }) {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    trust: imageSharp(fluid: { originalName: { regex: "/trust/" } }) {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;
