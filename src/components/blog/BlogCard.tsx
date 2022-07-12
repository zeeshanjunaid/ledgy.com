import React, { ReactNode } from 'react';

import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { formatUrl } from '../lib';
import { motion } from 'framer-motion';
import { targetBlank } from '../../helpers';
import { AuthorProps } from '../teamMembers';
import { getMainTag } from './lib';

const BlogPreviewAuthor = ({ author }: { author: AuthorProps }) => {
  return (
    <div className="blog-card-author">
      <div className="blog-card-author--img-wrapper">
        <Img {...author.profileImage} alt={author.name} />
      </div>
      <div className="blog-card-author--name">
        <p>{author.name}</p>
        <span>{author.role}</span>
      </div>
    </div>
  );
};

export const BlogCard = ({
  title,
  description,
  image,
  to,
  prefix,
  isExternal = false,
  showImage = true,
  author,
  tags,
}: Prefix & {
  title: ReactNode;
  description: string | ReactNode;
  image: ReactNode;
  to: string;
  author?: AuthorProps;
  isExternal?: boolean;
  showImage?: boolean;

  tags?: string[];
}) => {
  const tag = getMainTag(tags);

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Link to={formatUrl(prefix, to)} {...(isExternal ? targetBlank : {})}>
        <div className="blog-card">
          <div className="blog-card-wrapper">
            {showImage && <div className="blog-card-image--wrapper">{image}</div>}
            <div className="blog-card-content">
              <div className="blog-card-tags">
                <p>{tag}</p>
              </div>
              <div className="blog-card-title">{title}</div>
              <div className="blog-card-description">{description}</div>
              {author && <BlogPreviewAuthor author={author} />}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
