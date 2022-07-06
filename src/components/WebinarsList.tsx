import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { ContentBody, PostLink } from '../components';
import { AnimatePresence, motion } from 'framer-motion';

const getWebinars = () =>
  useStaticQuery(graphql`
    query {
      ...DefaultCover
      allContentfulWebinar(sort: { order: DESC, fields: [date] }) {
        edges {
          node {
            id
            title
            date(formatString: "DD MMM YYYY")
            youtube
            description {
              childMdx {
                body
              }
            }
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

export const WebinarsList = ({ prefix }: Prefix) => {
  const webinars = getWebinars();
  const { edges } = webinars.allContentfulWebinar;
  return (
    <ContentBody>
      <motion.div className="post-grid">
        <AnimatePresence>
          {edges.map((edge: { node: WebinarProps }) => {
            const { node } = edge;
            const { id, youtube, description } = node;
            return (
              <PostLink
                key={id}
                to={youtube}
                post={node}
                description={<MDXRenderer>{description.childMdx.body}</MDXRenderer>}
                prefix={prefix}
                isExternal
              />
            );
          })}
        </AnimatePresence>
      </motion.div>
    </ContentBody>
  );
};
