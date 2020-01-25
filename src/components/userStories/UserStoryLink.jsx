// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { ChevronRight } from '../../layouts/utils';
import { CardLink } from '../Content';

export const UserStoryLink = ({ userStory }: {| userStory: UserStory |}) => {
  const { title, subtitle, slug, date, company } = userStory;
  const to = `user-stories/${slug}`;
  const image = (
    <Img className="fit-cover" {...company.cover} />
  );
  const cardTitle = <h5>{title}</h5>;
  return (
    <CardLink
      title={cardTitle}
      description={subtitle}
      date={date}
      to={to}
      image={image}
    />
  );
};
