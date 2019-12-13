// @flow

import React from 'react';
import { trackSignupGoogleAnalytics } from '../layouts/utils';
import { targetBlank } from '../helpers';

export const ProductHuntButton = ({
  productHuntLink,
  trackSignupKey,
  postId,
  altText
}: {
  productHuntLink: string,
  trackSignupKey: string,
  postId: string,
  altText: string
}) => (
  <a
    className="btn btn-block d-sm-inline btn-xl mx-1 shadow-none"
    href={productHuntLink}
    {...targetBlank}
    onClick={() => trackSignupGoogleAnalytics(trackSignupKey)}
  >
    <img
      src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${postId}&theme=light`}
      alt={altText}
      className="product-hunt-logo"
    />
  </a>
);
