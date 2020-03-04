// @flow

import React from 'react';
import { withI18n } from '@lingui/react';
import { graphql } from 'gatsby';

import { ContentBody } from '../components/Content';
import { PageHeader } from '../components/PageHeader';

import { CustomerStoryLink } from '../components/customerStories';
import { Title } from '../layouts/utils';

export default withI18n()(({ i18n, prefix, data }: Props) => {
  const title = i18n.t`Customer Stories`;
  const description = i18n.t`Insights on how customers use Ledgy to solve their problems`;
  return (
    <div>
      <Title title={title} description={description} />
      <PageHeader title={title} subtitle={description} />

      <ContentBody>
        {data.allContentfulCustomerStory.edges.map(({ node }) => (
          <CustomerStoryLink key={node.id} customerStory={node} prefix={prefix} />
        ))}
      </ContentBody>
    </div>
  );
});

export const pageQuery = graphql`
  query {
    ...DefaultCover
    allContentfulCustomerStory(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          slug
          title
          subtitle
          date
          company {
            logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 200) {
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
`;
