import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BlogFilters } from './BlogFilters';
import { BlogFeatured } from './BlogFeatured';
import { ContentBody, PostLink } from '../Content';
import { ALL_TOPICS, BLOG_TAGS } from '../../helpers';
import { getBlogs } from './lib';
import { replaceAll } from '../lib';
import { AuthorProps } from '../teamMembers';

export const BlogsList = ({
  prefix,
  team,
}: Prefix & {
  team: {
    [key: string]: AuthorProps;
  };
}) => {
  const blogs = getBlogs();

  const { edges }: { edges: { node: BlogProps }[] } = blogs.allContentfulPage;
  const firstBlog = edges[0].node;
  const remainigBlogs = edges.slice(1);
  const [tag, setTag] = useState(ALL_TOPICS);
  if (!remainigBlogs) return <></>;

  return (
    <div className="bg-gray-light">
      <ContentBody>
        <BlogFeatured blog={firstBlog} team={team} />
        <BlogFilters buttonTexts={BLOG_TAGS} onClick={setTag} tag={tag} />
        <motion.div className="post-grid">
          <AnimatePresence>
            {remainigBlogs.map(({ node: blog }) => {
              const { id, slug, tags, description, author } = blog;
              const showBlog =
                (!!tags &&
                  tags.includes(
                    `Blog_${replaceAll({ string: tag, search: ' ', replacement: '_' })}`
                  )) ||
                tag === ALL_TOPICS;
              return (
                showBlog && (
                  <PostLink
                    key={id}
                    to={`blog/${slug}`}
                    post={blog}
                    description={description}
                    prefix={prefix}
                    author={author}
                    tags={tags}
                    team={team}
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
