// @flow

import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export const CustomerStoryCard = ({
  customerStory: { slug, company },
  prefix
}: {|
  customerStory: CustomerStory,
  prefix: string
|}) => {
  const pagePath = `${prefix}/customer-stories/${slug}/`;
  const logoImage = <Img className="fit-cover" {...company.logo.localFile.childImageSharp} />;
  const coverImage = <Img className="fit-cover" {...company.cover.localFile.childImageSharp} />;
  return (
    <Link href to={pagePath}>
      <div className="card mb-4 px-4 py-1">
        <div className="m-2">{logoImage}</div>
        {coverImage}
      </div>
    </Link>
  );
};
