import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BlogFilters } from './BlogFilters';
import { BlogFeatured } from './BlogFeatured';
import { ContentBody, PostLink } from '../Content';
import { ALL_TOPICS, BLOG_TAGS } from '../../helpers';
import { getBlogs } from './lib';

export const BlogsList = ({ prefix }: Prefix) => {
  const blogs = getBlogs();

  const { edges }: { edges: { node: BlogProps }[] } = blogs.allContentfulPage;
  const firstBlog = edges[0].node;
  const remainigBlogs = edges.slice(1);
  const [tag, setTag] = useState(ALL_TOPICS);
  if (!remainigBlogs) return <></>;

  return (
    <div className="bg-gray-light">
      <ContentBody>
        <BlogFeatured blog={firstBlog} />
        <BlogFilters buttonTexts={BLOG_TAGS} onClick={setTag} tag={tag} />
        <motion.div className="blog-grid">
          <AnimatePresence>
            {remainigBlogs.map(({ node: blog }) => {
              const { id, slug, tags, description: postDescription, author } = blog;
              const showBlog = (!!tags && tags.includes(`Blog_${tag}`)) || tag === ALL_TOPICS;
              return (
                showBlog && (
                  <PostLink
                    key={id}
                    to={`blog/${slug}`}
                    post={blog}
                    description={postDescription}
                    prefix={prefix}
                    author={author}
                    tags={tags}
                  />
                )
              );
            })}
          </AnimatePresence>
        </motion.div>
      </ContentBody>
    </div>
  );
};
