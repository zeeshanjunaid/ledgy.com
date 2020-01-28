// @flow

import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export const UserStoryCard = ({ userStory: { slug, company } }: {| userStory: UserStory |}) => {
  const pagePath = `user-stories/${slug}/`;
  const logoImage = <Img className="fit-cover" {...company.logo} />;
  const coverImage = <Img className="fit-cover" {...company.cover} />;
  return (
    <div className="card hover-shadow-5 bg-pale-secondary mb-6 px-5">
      <Link href to={pagePath}>
        <div className="m-5">{logoImage}</div>
        {coverImage}
      </Link>
    </div>
  );
};
