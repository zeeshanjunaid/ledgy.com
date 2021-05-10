import React from 'react';
import { graphql } from 'gatsby';

import { dynamicI18n } from '../helpers';
import { ComponentPicker } from '../components';
import { Helmet } from 'react-helmet';

const isTopBanner = (entry: MainPageEntryProps): entry is TopBannerProps =>
  entry.__typename === 'ContentfulTopBanner';

const isTopPageComponent = (entry: MainPageEntryProps) =>
  isTopBanner(entry) || entry.__typename === 'ContentfulLogoBanner';

const IndexPage = (props: Props) => {
  const { data, prefix } = props;
  const [content] = data.page.edges;
  const { entries, title }: { entries: MainPageEntryProps[]; title: string } = content.node;

  const topBanner = entries.find(isTopBanner);
  const { mainHeader } = topBanner || {};
  const topPageComponents = entries.filter(isTopPageComponent);
  const restOfComponents = entries.filter((entry) => !isTopPageComponent(entry));

  return (
    <main className="main-wrapper-1">
      {!!mainHeader && (
        <Helmet>
          <title>{`Ledgy: ${dynamicI18n(title || mainHeader)}`}</title>
        </Helmet>
      )}
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

export default IndexPage;

export const FeatureGridFragment = graphql`
  fragment FeatureGridFramgent on ContentfulFeatureGrid {
    id
    header
    sections {
      icon
      title
      description
    }
  }
`;
export const TestimonialCardsFragment = graphql`
  fragment TestimonialCardsFragment on ContentfulTestimonialCards {
    id
    cards {
      signature
      linkText
      linkUrl
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
`;

export const ContentWithChecklistFragment = graphql`
  fragment ContentWithChecklistFragment on ContentfulContentWithChecklist {
    id
    header
    description
    linkText
    linkUrl
    checklist
  }
`;

export const TitleWithGraphicFragment = graphql`
  fragment TitleWithGraphicFragment on ContentfulTitleWithGraphic {
    id
    title
    motivationText
    description
    graphic {
      localFile {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export const LogoBannerFragment = graphql`
  fragment LogoBannerFragment on ContentfulLogoBanner {
    id
    description
    logos {
      title
      localFile {
        childImageSharp {
          fixed(width: 130) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;

export const SelectableCardsWithScreenshotsFragment = graphql`
  fragment SelectableCardsWithScreenshotsFragment on ContentfulSelectableCardsWithScreenshots {
    id
    header
    content {
      title
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
`;

export const CallToAction2021Fragment = graphql`
  fragment CallToAction2021Fragment on ContentfulCallToAction2021 {
    id
    header
    description
    buttonText
    buttonUrl
    linkText
    linkUrl
    icon
    secondaryHeader
    secondaryDescription
    secondaryLinkText
    secondaryLinkUrl
  }
`;

export const ChecklistWithScreenshotFragment = graphql`
  fragment ChecklistWithScreenshotFragment on ContentfulChecklistWithScreenshot {
    id
    header
    description
    longDescription {
      childMdx {
        body
      }
    }
    checklist
    smallImage
    inverted
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
`;

export const LongTextFragment = graphql`
  fragment LongTextFragment on ContentfulLongText {
    id
    isWide
    longTextContent {
      childMdx {
        body
      }
    }
  }
`;

export const indexPageQuery = graphql`
  query {
    page: allContentfulFrontPage2021 {
      edges {
        node {
          title
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
            ...FeatureGridFramgent
            ...TestimonialCardsFragment
            ...ContentWithChecklistFragment
            ...TitleWithGraphicFragment
            ...LogoBannerFragment
            ...SelectableCardsWithScreenshotsFragment
            ...CallToAction2021Fragment
            ...ChecklistWithScreenshotFragment
          }
        }
      }
    }
  }
`;
