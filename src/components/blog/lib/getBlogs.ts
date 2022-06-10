import { useStaticQuery, graphql } from 'gatsby';

export const getBlogs = () =>
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
            tags
            slug
            title
            description
            author
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
