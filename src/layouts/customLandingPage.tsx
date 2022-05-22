import React from 'react';
import { graphql } from 'gatsby';

import { dynamicI18n } from '../helpers';
import { Title } from '../layouts/utils';
import { EntryPicker } from '../components';

const CustomLandingPage = ({
  data,
  ...baseProps
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
      <EntryPicker {...baseProps} entries={entries} />
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
        ...ContentfulTopBannerFragment
        ...LargeTestimonialFragment
        ...CompetitorTableFragment
        ...ContentWithChecklistFragment
        ...TitleWithGraphicFragment
        ...FeatureGridFragment
        ...LogoBannerFragment
        ...SelectableCardsWithScreenshotsFragment
        ...CallToAction2021Fragment
        ...ChecklistWithScreenshotFragment
        ...ExploreFragment
        ...TestimonialsCarousel
        ...RegionalComponentPickerFragment
      }
    }
  }
`;
