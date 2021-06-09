import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContentBody, PostLink } from '../components';

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
  return (
    <ContentBody>
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
