// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import { Link } from 'gatsby';

import { ChevronRight } from '../layouts/utils';
import { targetBlank } from '../helpers';

export const CardLink = ({
  title,
  description,
  image,
  to,
  date,
  external = false
}: {|
  title: Node,
  description: string | Node,
  image: Node,
  to: string,
  date?: string,
  external?: boolean
|}) => (
  <div className="card hover-shadow-5 bg-pale-secondary mb-6">
    <div className="row">
      <div className="col-md-3">
        {external ? (
          <a href={to} {...targetBlank}>
            {image}
          </a>
        ) : (
          <Link href to={to}>
            {image}
          </Link>
        )}
      </div>
      <div className="col-md-9 p-5">
        <div className="row h-100 mr-0">
          <div className="col-md-10">
            {external ? (
              title
            ) : (
              <Link href to={to}>
                {title}
              </Link>
            )}
          </div>
          <small className="col-md-2 text-md-right text-muted">{date}</small>
          <div className="col-12">{description}</div>
          <div className="col-12 mt-auto">
            {external ? (
              <a href={to} {...targetBlank}>
                <Trans>Watch now</Trans>
                <ChevronRight />
              </a>
            ) : (
              <Link className="small" href to={to}>
                <Trans>Read more</Trans>
                <ChevronRight />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
