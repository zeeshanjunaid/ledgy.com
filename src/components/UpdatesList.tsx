import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContentBody, PostLink } from '../components';

const getUpdates = () =>
  useStaticQuery(graphql`
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
  `);

export const UpdatesList = ({ prefix }: { prefix: string }) => {
  const updates = getUpdates();
  const { edges } = updates.allContentfulPage;
  return (
    <div>
      <ContentBody>
        {edges.map((edge: UntypedObject) => {
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
