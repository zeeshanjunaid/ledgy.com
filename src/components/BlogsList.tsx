import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContentBody, PostLink } from '../components';
import { ButtonGroup } from './utils';

const getBlogs = () =>
  useStaticQuery(graphql`
    query {
      ...DefaultCover
      allContentfulPage(
        filter: { namespace: { eq: "/blog/" } }
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

export const BlogsList = ({ prefix }: { prefix: string }) => {
  const blogs = getBlogs();
  const { edges } = blogs.allContentfulPage;
  const buttonNames = ['All topics', 'Companies', 'Investors', 'Equity', 'Funding'];
  return (
    <ContentBody>
      <ButtonGroup buttonNames={buttonNames} />
      {edges.map((edge: UntypedObject) => {
        const { node } = edge;
        const { id, slug, description: postDescription } = node;
        return (
          <PostLink
            key={id}
            to={`blog/${slug}`}
            post={node}
            description={postDescription}
            prefix={prefix}
          />
        );
      })}
    </ContentBody>
  );
};
