import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContentBody, PostLink } from '../components';
import { ButtonGroup } from './utils';

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
            tags
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
  const [tag, setTag] = useState('All topics');
  const updatesTags = ['All topics', 'Product', 'Company', 'Team', 'News'];
  return (
    <div>
      <ContentBody>
        <ButtonGroup buttonTexts={updatesTags} onClick={setTag} tag={tag} />
        {edges.map((edge: UntypedObject) => {
          const { node } = edge;
          const { id, slug, tags, description: postDescription } = node;
          const showUpdate = (!!tags && tags.includes(`Updates_${tag}`)) || tag === 'All topics';

          return showUpdate ? (
            <PostLink
              key={id}
              to={`updates/${slug}`}
              post={node}
              description={postDescription}
              prefix={prefix}
              showImage={false}
            />
          ) : (
            <div />
          );
        })}
      </ContentBody>
    </div>
  );
};
