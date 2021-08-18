import React from 'react';
import { graphql } from 'gatsby';

import { dynamicI18n } from '../helpers';
import { ComponentPicker, TitleWithGraphic } from '../components';
import { Title } from '../layouts/utils';

const FeaturePage = ({
  data,
  prefix,
}: Props & {
  data: {
    contentfulFeaturePage2021: FeaturePageProps;
    allContentfulFeaturePage2021: UnknownObject;
  };
}) => {
  const { title, header, description, graphic, motivationText, entries, buttons } =
    data.contentfulFeaturePage2021;

  return (
    <div>
      <Title title={dynamicI18n(title || header)} description={dynamicI18n(description)} />
      <TitleWithGraphic
        id={header}
        title={header}
        description={description}
        graphic={graphic}
        motivationText={motivationText}
        buttons={buttons}
        prefix={prefix}
        __typename={'ContentfulTitleWithGraphic'}
        isTopBanner
      />
      {entries.map((entry) => (
        <ComponentPicker key={entry.id} entry={entry} prefix={prefix} />
      ))}
    </div>
  );
};

export default FeaturePage;

export const featurePageQuery = graphql`
  query ($id: String!) {
    contentfulFeaturePage2021(id: { eq: $id }) {
      id
      slug
      title
      header
      description
      motivationText
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
      entries {
        ...FeatureGridFragment
        ...TestimonialCardsFragment
        ...ContentWithChecklistFragment
        ...TitleWithGraphicFragment
        ...LogoBannerFragment
        ...SelectableCardsWithScreenshotsFragment
        ...CallToAction2021Fragment
        ...ChecklistWithScreenshotFragment
        ...LongTextFragment
        ...StaticBlockFragment
      }
    }
  }
`;
