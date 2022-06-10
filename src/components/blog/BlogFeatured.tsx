import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { getTeamData } from '../teamMembers';
import { BlogProps, getMainTag } from './lib';

const FeaturedAuthor = ({ name }: { name: string }) => {
  const team = getTeamData();
  const author = team[name];
  return (
    <div className="featured-post-author">
      <div className="featured-post-author--img">
        <Img {...author.profileImage} alt={author.name} />
      </div>
      <div className="featured-post-author--name">
        <p>{author.name}</p>
        <span>{author.role}</span>
      </div>
    </div>
  );
};

export const BlogFeatured = ({ blog }: { blog: BlogProps }) => {
  if (!blog) return <></>;
  const { description: postDescription, title, author, cover, slug, tags } = blog;
  const { childImageSharp } = cover?.localFile || {};
  const image = childImageSharp ? <Img className="fit-cover" {...childImageSharp} /> : null;

  const tag = getMainTag(tags);

  return (
    <Link to={`${slug}`}>
      <div className="featured-post">
        <div className="featured-post-wrapper">
          <div className="featured-post-img border rounded">{image}</div>
          <div className="featured-post-content">
            <div className="featured-post-tags">
              <p>{tag}</p>
            </div>
            <div className="featured-post-title">
              <h5>{title}</h5>
            </div>
            <div className="featured-post-description">{postDescription}</div>
            {author && <FeaturedAuthor name={author} />}
          </div>
        </div>
      </div>
    </Link>
  );
};
