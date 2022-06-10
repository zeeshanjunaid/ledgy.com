import { ALL_TOPICS, BLOG_TAGS } from "../helpers";
import { AnimatePresence, motion } from "framer-motion";
import { ContentBody, PostLink } from "../components";
import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { BlogFilters } from "./BlogFilters";
import { FeaturedPost } from "./FeaturedPost";

// import { ButtonGroup } from "./utils";

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
            tags
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

export const BlogsList = ({ prefix }: Prefix) => {
  const blogs = getBlogs();

  const { edges } = blogs.allContentfulPage;
  const [tag, setTag] = useState(ALL_TOPICS);
  return (
    <ContentBody>
      <FeaturedPost />
      {/* <ButtonGroup buttonTexts={BLOG_TAGS} onClick={setTag} tag={tag} /> */}
      <BlogFilters buttonTexts={BLOG_TAGS} onClick={setTag} tag={tag} />
      <motion.div className="blog__grid">
        <AnimatePresence>
          {edges.map((edge: UntypedObject) => {
            const { node } = edge;
            const { id, slug, tags, description: postDescription } = node;
            const showBlog =
              (!!tags && tags.includes(`Blog_${tag}`)) || tag === ALL_TOPICS;
            return (
              showBlog && (
                <PostLink
                  key={id}
                  to={`blog/${slug}`}
                  post={node}
                  description={postDescription}
                  prefix={prefix}
                />
              )
            );
          })}
        </AnimatePresence>
      </motion.div>
    </ContentBody>
  );
};
