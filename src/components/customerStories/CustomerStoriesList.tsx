import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { ContentBody, PostLink } from '../../components';
import { AnimatePresence, motion } from 'framer-motion';

const getCustomerStories = () =>
  useStaticQuery(graphql`
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
            isOurStory
            company {
              logo {
                localFile {
                  childImageSharp {
                    fluid(maxHeight: 200) {
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
  `);

export const CustomerStoriesList = ({ prefix }: Prefix) => {
  const customerStories = getCustomerStories();
  const { edges } = customerStories.allContentfulCustomerStory;

  return (
    <ContentBody>
      <motion.div className="post-grid">
        <AnimatePresence>
          {edges.map((edge: { node: CustomerStoryProps }, index: number) => {
            const { node: post } = edge;
            const { subtitle, slug } = post;
            const to = `customer-stories/${slug}`;
            if (!post.isOurStory) {
              return (
                <PostLink
                  to={to}
                  post={post}
                  description={subtitle}
                  prefix={prefix}
                  showImage
                  key={index}
                />
              );
            }
          })}
        </AnimatePresence>
      </motion.div>
    </ContentBody>
  );
};
