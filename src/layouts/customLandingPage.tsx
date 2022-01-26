import React from 'react';
import { graphql } from 'gatsby';

import { dynamicI18n } from '../helpers';
import { ComponentPicker } from '../components';
import { Title } from '../layouts/utils';

const CustomLandingPage = ({
  data,
  prefix,
}: Props & {
  data: {
    contentfulCustomLandingPageWithBanner: CustomLandingPageProps;
    allContentfulCustomLandingPageWithBanner: UnknownObject;
  };
}) => {
  const { title, description, entries } = data.contentfulCustomLandingPageWithBanner;

  return (
    <div>
      <Title title={dynamicI18n(title)} description={dynamicI18n(description)} indexable />
      {entries.map((entry) => (
        <ComponentPicker key={entry.id} entry={entry} prefix={prefix} smallPadding />
      ))}
    </div>
  );
};

export default CustomLandingPage;

export const customLandingPageQuery = graphql`
  query ($id: String!) {
    contentfulCustomLandingPageWithBanner(id: { eq: $id }) {
      id
      slug
      title
      description
      entries {
        ... on ContentfulTopBanner {
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
        ...FeatureGridFragment
        ...TestimonialFragment
        ...LogoBannerFragment
        ...SelectableCardsWithScreenshotsFragment
        ...CallToAction2021Fragment
        ...ChecklistWithScreenshotFragment
      }
    }
  }
`;
