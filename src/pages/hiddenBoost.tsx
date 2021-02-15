import React from 'react';
import { graphql } from 'gatsby';
import { ComponentPicker } from '../components';

const isTopPageComponent = (__typename: string) =>
  __typename === 'ContentfulTopBanner' || __typename === 'ContentfulLogoBanner';

const HiddenBoostPage = (props: Props) => {
  const { data, prefix } = props;
  const [content] = data.page.edges;
  const { entries }: { entries: MainPageEntryProps[] } = content.node;

  const topPageComponents = entries.filter((entry) => isTopPageComponent(entry.__typename));
  const restOfComponents = entries.filter((entry) => !isTopPageComponent(entry.__typename));

  return (
    <main className="main-wrapper-1">
      <div className="main-wrapper-2">
        <div className="top-page-wrapper d-flex flex-column justify-content-between">
          <span />
          {topPageComponents.map((entry, i) => (
            <ComponentPicker entry={entry} prefix={prefix} key={`${entry.id}-${i}`} smallPadding />
          ))}
        </div>
        {restOfComponents.map((entry, i) => (
          <ComponentPicker entry={entry} prefix={prefix} key={`${entry.id}-${i}`} />
        ))}
      </div>
    </main>
  );
};

export default HiddenBoostPage;

export const hiddenBoostQuery = graphql`
  query {
    page: allContentfulFrontPage2021 {
      edges {
        node {
          entries {
            ... on ContentfulTopBanner {
              id
              mainHeader
              description
              firstButtonText
              firstButtonUrl
              secondButtonText
              secondButtonUrl
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
