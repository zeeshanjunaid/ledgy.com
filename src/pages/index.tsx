import React from 'react';
import { graphql } from 'gatsby';

import { dynamicI18n } from '../helpers';
import { EntryPicker } from '../components';
import { Helmet } from 'react-helmet';

const isTopBanner = (entry: MainPageEntryProps): entry is TopBannerProps =>
  entry.__typename === 'ContentfulTopBanner';

const isTopPageComponent = (entry: MainPageEntryProps) =>
  isTopBanner(entry) || entry.__typename === 'ContentfulLogoBanner';

const IndexPage = (props: Props) => {
  const { data, ...baseProps } = props;
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
          <EntryPicker entries={topPageComponents} {...baseProps}></EntryPicker>
        </div>
        <EntryPicker entries={restOfComponents} {...baseProps}></EntryPicker>
      </div>
    </main>
  );
};

export default IndexPage;

export const FeatureGridFragment = graphql`
  fragment FeatureGridFragment on ContentfulFeatureGrid {
    id
    __typename
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
    __typename
    cards {
      signature
      linkText
      linkUrl
      text {
        text
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
    __typename
    header
    description
    linkText
    linkUrl
    checklist
  }
`;

export const LargeTestimonialFragment = graphql`
  fragment LargeTestimonialFragment on ContentfulLargeTestimonial {
    id
    __typename
    name
    company
    showInfo
    quote {
      childMdx {
        body
      }
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
`;

export const ContentfulTopBannerFragment = graphql`
  fragment ContentfulTopBannerFragment on ContentfulTopBanner {
    id
    __typename
    mainHeader
    description
    firstButtonText
    firstButtonUrl
    secondButtonText
    secondButtonUrl
    type
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

export const RegionalComponentPickerFragment = graphql`
  fragment RegionalComponentPickerFragment on ContentfulRegionalComponentPicker {
    id
    __typename
    entries {
      global {
        ...LogoBannerFragment
        ...FeatureGridFragment
      }
      uk {
        ...LogoBannerFragment
        ...FeatureGridFragment
      }
      de {
        ...LogoBannerFragment
        ...FeatureGridFragment
      }
      fr {
        ...LogoBannerFragment
        ...FeatureGridFragment
      }
    }
  }
`;

export const TitleWithGraphicFragment = graphql`
  fragment TitleWithGraphicFragment on ContentfulTitleWithGraphic {
    id
    __typename
    title
    motivationText
    description
    buttons {
      ...ButtonFragment
    }
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
    __typename
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
    __typename
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
    __typename
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

export const CompetitorTableFragment = graphql`
  fragment CompetitorTableFragment on ContentfulCompetitorTable {
    id
    header
    competitorName
    __typename
    tableSection {
      id
      __typename
      name
      title
      rows {
        id
        __typename
        text
        ledgyStatus
        competitorStatus
        isComingSoonOnLedgy
      }
    }
  }
`;

export const ExploreFragment = graphql`
  fragment ExploreFragment on ContentfulExplore {
    id
    __typename
    title
    textRight
    sections {
      id
      columnName
      title
      text
      image {
        localFile {
          childImageSharp {
            fluid(maxHeight: 1200, maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      link {
        text
        url
      }
    }
  }
`;

export const TestimonialsCarousel = graphql`
  fragment TestimonialsCarousel on ContentfulTestimonialCarousel {
    id
    __typename
    title
    testimonials {
      id
      logo {
        localFile {
          childImageSharp {
            fixed(width: 130) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      quote
      customerName
      customerRole
      primaryColor
      secondaryColor
      outcomeNumber
      outcomeText
      link {
        text
        url
      }
    }
  }
`;

export const ChecklistWithScreenshotFragment = graphql`
  fragment ChecklistWithScreenshotFragment on ContentfulChecklistWithScreenshot {
    id
    __typename
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
    __typename
    isWide
    longTextContent {
      childMdx {
        body
      }
    }
  }
`;

export const StaticBlockFragment = graphql`
  fragment StaticBlockFragment on ContentfulStaticBlock {
    id
    __typename
    block
  }
`;

export const ButtonFragment = graphql`
  fragment ButtonFragment on ContentfulButton {
    id
    __typename
    text
    url
  }
`;

export const GreenhouseJobFragment = graphql`
  fragment GreenhouseJobFragment on GreenhouseJob {
    id
    gh_Id
    title
    content
    location {
      name
    }
  }
`;

export const LedgistaGif = graphql`
  fragment LedgistaGif on ContentfulLedgista {
    gif {
      file {
        url
      }
    }
  }
`;

export const LedgistaProfileImage = graphql`
  fragment LedgistaProfileImage on ContentfulLedgista {
    profileImage {
      fluid(sizes: "(max-width: 245px) 100vw, 245px") {
        srcSet
        src
        sizes
        aspectRatio
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
            ...ContentfulTopBannerFragment
            ...FeatureGridFragment
            ...TestimonialCardsFragment
            ...ContentWithChecklistFragment
            ...TitleWithGraphicFragment
            ...LogoBannerFragment
            ...SelectableCardsWithScreenshotsFragment
            ...CallToAction2021Fragment
            ...CompetitorTableFragment
            ...ChecklistWithScreenshotFragment
            ...LargeTestimonialFragment
            ...ExploreFragment
            ...TestimonialsCarousel
          }
        }
      }
    }
  }
`;
