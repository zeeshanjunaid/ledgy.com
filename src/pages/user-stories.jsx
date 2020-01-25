// @flow

import React from 'react';
import { withI18n } from '@lingui/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ContentHeader, ContentBody, PostLink } from '../components/Content';
import { Title } from '../layouts/utils';

export default withI18n()(({ i18n, data }: Props) => {
  console.log({ i18n, data });
  return (
    <div>
      <Title
        title={i18n.t`User Stories`}
        description={i18n.t`Insights on how customers use Ledgy to solve their problems`}
      />

      <ContentHeader title={i18n.t`Ledgy User Stories`} />

      <ContentBody>
        {data.allContentfulUserStory.edges.map(({ node }) => {
          const { id, title, subtitle } = node;
          return (
            <PostLink
              external
              key={id}
              to={'#'}
              post={node}
              defaultImage={data.ledgy}
              description={subtitle}
            />
          );
        })}
      </ContentBody>
    </div>
  );
});

export const pageQuery = graphql`
  query {
    ...DefaultCover
    allContentfulUserStory(sort: {order: DESC, fields: [date]}) {
      edges {
        node {
          id
          title
          subtitle
          company {
            name
            contactName
            contactTitle
            logo {
              file {
                url
              }
            }
            cover {
              file {
                url
              }
            }
            mainQuote {
              childMdx {
                body
              }
            }
            yearFounded
            funding
            employeeCount
            sector
            location
            stage
          }
        }
      }
    }
  }
`;
