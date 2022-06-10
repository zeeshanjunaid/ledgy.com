import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImageFluidProps } from 'gatsby-image';

import { dynamicI18n } from '../helpers';
import {
  PublishDate,
  Author,
  LongText,
  PageHeader,
  CalculatorHeader,
  EntryPicker,
} from '../components';
import { Title } from '../layouts/utils';

const CALCULATOR_SLUG = 'calculator';

const ContentfulPage = ({
  data,
  ...baseProps
}: Props & {
  data: {
    contentfulPage: ContentfulPageProps;
    site: { siteMetadata: { siteUrl: string } };
    calculator: GatsbyImageFluidProps;
  };
}) => {
  if (!data) return null;

  const { slug, title, description, content, author, date, cover, entries } = data.contentfulPage;
  const { siteUrl } = data.site.siteMetadata;
  const showCalculatorHeader = slug === CALCULATOR_SLUG;
  const { childImageSharp } = cover?.localFile || {};
  const src =
    childImageSharp && 'fixed' in childImageSharp && 'src' in childImageSharp.fixed
      ? childImageSharp.fixed.src
      : '';
  const thumbnailUrl = cover && cover.localFile && src ? `${siteUrl}${src}` : '';

  return (
    <div>
      <Title
        title={dynamicI18n(title)}
        description={dynamicI18n(description)}
        thumbnailUrl={thumbnailUrl}
      />
      {showCalculatorHeader ? (
        <CalculatorHeader data={data} />
      ) : (
        <PageHeader title={dynamicI18n(title)} subtitle={dynamicI18n(description)} textCenter />
      )}
      <div className="container container-small">
        <LongText {...baseProps} content={content} />
        <PublishDate date={date} />
        {author && <Author {...baseProps} name={author} />}
      </div>
      {!!entries && <EntryPicker entries={entries} {...baseProps} />}
    </div>
  );
};

export default ContentfulPage;

export const contentfulPageQuery = graphql`
  query ($id: String!) {
    contentfulPage(id: { eq: $id }) {
      id
      slug
      title
      description
      language
      date(formatString: "DD MMM YYYY")
      author
      content {
        childMdx {
          body
        }
      }
      cover {
        localFile {
          childImageSharp {
            fixed(width: 1024, height: 536) {
              src
            }
          }
        }
      }
      entries {
        ...ContentfulTopBannerFragment
        ...LargeTestimonialFragment
        ...FeatureGridFragment
        ...RegionalComponentPickerFragment
        ...TestimonialCardsFragment
        ...ContentWithChecklistFragment
        ...TitleWithGraphicFragment
        ...LogoBannerFragment
        ...SelectableCardsWithScreenshotsFragment
        ...CallToAction2021Fragment
        ...ChecklistWithScreenshotFragment
        ...LongTextFragment
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    calculator: imageSharp(fluid: { originalName: { regex: "/calculator.png/" } }) {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;
