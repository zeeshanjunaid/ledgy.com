import React from 'react';
import { graphql } from 'gatsby';
import { t } from '@lingui/macro';

import { ContentBody, PostLink, PageHeader } from '../components';
import { Title } from '../layouts/utils';

const Updates = ({ data, prefix }: Props) => {
  const title = t`Updates`;
  const description = t`What’s new at Ledgy? Check out our latest updates to stay informed on feature releases, improvements and all things new at Ledgy.`;
  return (
    <div>
      <Title title={title} description={description} />
      <PageHeader title={title} subtitle={description} />

      <ContentBody>
        {data.allContentfulPage.edges.map((edge: UntypedObject) => {
          const { node } = edge;
          const { id, slug, description: postDescription } = node;
          return (
            <PostLink
              key={id}
              to={`updates/${slug}`}
              post={node}
              description={postDescription}
              prefix={prefix}
              showImage={false}
            />
          );
        })}
      </ContentBody>
    </div>
  );
};

export default Updates;

export const updatePageQuery = graphql`
  query {
    ...DefaultCover
    allContentfulPage(
      filter: { namespace: { eq: "/updates/" } }
      sort: { order: DESC, fields: [date] }
    ) {
      edges {
        node {
          id
          slug
          title
          description
          language
          date(formatString: "DD MMM YYYY")
          cover {
            localFile {
              childImageSharp {
                ...CoverImage
              }
            }
          }
        }
      }
    }
  }
`;
