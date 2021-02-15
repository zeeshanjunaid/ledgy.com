import { graphql } from 'gatsby';
import { Trans } from '@lingui/macro';
import React from 'react';

import { formatUrl } from '../components/lib';
import { ComponentPicker, DemoForm, dynamicI18n, DynamicTrans } from '../components';

import logoInvertedCompact from '../img/logo-inverted-compact.png';
import { targetBlank } from '../helpers';

import { Title } from './utils';
import { RequesterType } from '../components/forms/lib';

const Logo = () => <img width={80} src={logoInvertedCompact} alt="Ledgy" />;

const DecoShapes = () => (
  <>
    <div className="one-pager-deco-shape one-pager-deco-shape--one" />
    <div className="one-pager-deco-shape one-pager-deco-shape--two" />
  </>
);

const DemoPage = (props: Props) => {
  const { data, prefix } = props;
  const [edgesContent] = data.page.edges;
  const {
    content,
    title,
    description,
    formTitle,
    formButtonText,
    requesterType,
  }: {
    content: DemoPageEntryProps[];
    title: string;
    description: string;
    formTitle: string;
    formButtonText: string;
    requesterType?: RequesterType | void;
  } = edgesContent.node;

  return (
    <>
      <Title title={dynamicI18n(title)} description={dynamicI18n(description)} />
      <header className="header d-flex home-banner px-1 text-left bg-primary overflow-hidden">
        <div className="container my-4 my-md-auto position-relative z-index-base">
          <div className="row mt-4 mt-lg-2 pb-4 pb-md-6">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="mt-lg-n4 mb-md-4 mr-md-4">
                <Logo />
                <h1 className="text-white mt-5 mb-2 mb-sm-3">
                  <DynamicTrans>{title}</DynamicTrans>
                </h1>
                <div className="text-lg line-height-lg text-white font-weight-light pb-3">
                  <DynamicTrans>{description}</DynamicTrans>
                </div>
              </div>
            </div>
            <div className="text-dark col-lg-6 d-flex flex-column justify-content-center mt-4 mt-lg-0">
              <DemoForm
                title={dynamicI18n(formTitle)}
                buttonText={dynamicI18n(formButtonText)}
                contentfulRequesterType={requesterType}
              />
            </div>
          </div>
        </div>
        <DecoShapes />
      </header>
      <div className="position-relative bg-white z-index-base">
        {content.map((v, i) => (
          <ComponentPicker entry={v} prefix={prefix} key={`${v.id}-${i}`} />
        ))}
      </div>
      <footer className="footer d-flex align-items-center justify-content-center text-white bg-primary p-2">
        <a
          {...targetBlank}
          className="nav-link mx-1 mx-md-5"
          href={formatUrl(prefix, 'legal/privacy-policy')}
        >
          <Trans>Privacy policy</Trans>
        </a>
        <a
          {...targetBlank}
          className="nav-link mx-1 mx-md-5"
          href={formatUrl(prefix, 'data-protection')}
        >
          <Trans>Data protection</Trans>
        </a>
      </footer>
    </>
  );
};

export default DemoPage;

export const demoQuery = graphql`
  query {
    page: allContentfulDemoPage2021 {
      edges {
        node {
          title
          description
          formTitle
          formButtonText
          requesterType
          content {
            ... on ContentfulFeatureGrid {
              id
              header
              sections {
                icon
                title
                description
              }
            }
            ... on ContentfulTestimonialCards {
              id
              cards {
                signature
                linkText
                linkPath
                text {
                  childMdx {
                    body
                  }
                }
                logo {
                  localFile {
                    childImageSharp {
                      fixed(height: 60) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
            }
            ... on ContentfulContentWithChecklist {
              id
              header
              description
              linkText
              linkUrl
              checklist
            }
            ... on ContentfulTitleWithGraphic {
              id
              title
              motivationText
              description
              graphic {
                localFile {
                  childImageSharp {
                    fixed(height: 300) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
            ... on ContentfulLogoBanner {
              id
              logos {
                title
                description
                localFile {
                  childImageSharp {
                    fixed(width: 130) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
            ... on ContentfulSelectableCardsWithScreenshots {
              id
              title
              content {
                header
                description
                screenshot {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1500, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
            ... on ContentfulCallToAction2021 {
              id
              header
              description
              buttonText
              buttonPath
              externalLinkText
              externalLinkUrl
              icon
              secondaryHeader
              secondaryDescription
              secondaryLinkText
              secondaryLinkPath
            }
            ... on ContentfulChecklistWithScreenshot {
              id
              header
              description
              checklists {
                checklistText
              }
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
