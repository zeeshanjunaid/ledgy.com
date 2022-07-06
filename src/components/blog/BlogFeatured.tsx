import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { AuthorProps } from '../teamMembers';
import { getMainTag } from './lib';

const FeaturedAuthor = ({
  name,
  team,
}: {
  name: string;
  team: {
    [key: string]: AuthorProps;
  };
}) => {
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

export const BlogFeatured = ({
  blog,
  team,
}: {
  blog: BlogProps;
  team: {
    [key: string]: AuthorProps;
  };
}) => {
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
            {author && <FeaturedAuthor name={author} team={team} />}
          </div>
        </div>
      </div>
    </Link>
  );
};
