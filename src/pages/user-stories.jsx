// @flow

import React from 'react';
import { withI18n } from '@lingui/react';
import { graphql } from 'gatsby';

import { ContentHeader, ContentBody } from '../components/Content';
import { UserStoryLink } from '../components/userStories';
import { Title } from '../layouts/utils';

export default withI18n()(({ i18n, data }: Props) => {
  return (
    <div>
      <Title
        title={i18n.t`User Stories`}
        description={i18n.t`Insights on how customers use Ledgy to solve their problems`}
      />

      <ContentHeader title={i18n.t`Ledgy User Stories`} />

      <ContentBody>
        {data.allContentfulUserStory.edges.map(({ node }) => (
          <UserStoryLink key={node.id} userStory={node} />
        ))}
      </ContentBody>
    </div>
  );
});

export const pageQuery = graphql`
  query {
    ...DefaultCover
    allContentfulUserStory(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          slug
          title
          subtitle
          date
          company {
            cover {
              fluid(maxWidth: 150) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
