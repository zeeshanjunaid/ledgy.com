<<<<<<< HEAD
import { ComponentPicker } from '../components';
import React from 'react';
import { Title } from '../layouts/utils';
import { dynamicI18n } from '../helpers';
import { graphql } from 'gatsby';
=======
import React from 'react';
import { graphql } from 'gatsby';

import { dynamicI18n } from '../helpers';
import { Title } from '../layouts/utils';
import { EntryPicker } from '../components';
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3

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
<<<<<<< HEAD
        # ...TestimonialFragment
=======
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
        ...LogoBannerFragment
        ...SelectableCardsWithScreenshotsFragment
        ...CallToAction2021Fragment
        ...ChecklistWithScreenshotFragment
        ...ExploreFragment
        ...TestimonialsCarousel
<<<<<<< HEAD
=======
        ...RegionalComponentPickerFragment
>>>>>>> 5ab8cd542b59d1981d1bc5ebef7164c40d8078c3
      }
    }
  }
`;
