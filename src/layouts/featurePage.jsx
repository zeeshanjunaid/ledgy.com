// @flow

import React from 'react';
import { graphql } from 'gatsby';

import { DynamicTrans } from '../components/DynamicTrans';
import { PageHeader } from '../components/PageHeader';
import { Feature } from '../components/Feature';
import { Title } from '../layouts/utils';

export default ({
  data
}: {|
  ...Props,
  data: {|
    contentfulFeaturePage: FeaturePage,
    allContentfulFeaturePage: Object
  |}
|}) => {
  const { title, description, features, startOnRight } = data.contentfulFeaturePage;
  return (
    <div>
      <Title title={title} description={description} />

      <PageHeader
        title={<DynamicTrans>{title}</DynamicTrans>}
        subtitle={<DynamicTrans>{description}</DynamicTrans>}
      />
      {features.map(
        ({ id, title: featureTitle, description: featureDescription, image }, index) => (
          <Feature
            key={id}
            title={featureTitle}
            description={featureDescription}
            imgProps={image.localFile.childImageSharp}
            imgFirst={index % 2 !== Number(startOnRight)}
          />
        )
      )}
    </div>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    contentfulFeaturePage(id: { eq: $id }) {
      id
      slug
      title
      description
      startOnRight
      features {
        id
        title
        description
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
`;
