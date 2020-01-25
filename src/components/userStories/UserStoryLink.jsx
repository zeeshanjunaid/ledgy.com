// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { ChevronRight } from '../../layouts/utils';

export const UserStoryLink = ({
  userStory,
  defaultImage
}: {|
  userStory: UserStory,
  defaultImage: Object
|}) => {
  const to = `user-stories/${userStory.slug}`;
  const image = (
    <Img
      className="fit-cover"
      {...userStory.company.cover ? userStory.company.cover : defaultImage}
    />
  );
  const title = <h5>{userStory.title}</h5>;
  return (
    <div className="card hover-shadow-5 bg-pale-secondary mb-6">
      <div className="row">
        <div className="col-md-3">
          <Link href to={to}>
            {image}
          </Link>
        </div>
        <div className="col-md-9 p-5">
          <div className="row h-100 mr-0">
            <div className="col-md-10">
              <Link href to={to}>
                {title}
              </Link>
            </div>
            <small className="col-md-2 text-md-right text-muted">{userStory.date}</small>
            <div className="col-12">{userStory.subtitle}</div>
            <div className="col-12 mt-auto">
              <Link className="small" href to={to}>
                <Trans>Read more</Trans>
                <ChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
