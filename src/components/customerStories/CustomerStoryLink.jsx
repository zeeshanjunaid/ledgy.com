// @flow

import React from 'react';
import Img from 'gatsby-image';

import { CardLink } from '../Content';

export const CustomerStoryLink = ({
  customerStory,
  prefix
}: {|
  customerStory: CustomerStory,
  prefix: string
|}) => {
  const { title, subtitle, slug, date, company } = customerStory;
  const to = `${prefix}/customer-stories/${slug}`;
  const image = <Img className="fit-cover" {...company.cover} />;
  const cardTitle = <h5>{title}</h5>;
  return <CardLink title={cardTitle} description={subtitle} date={date} to={to} image={image} />;
};
