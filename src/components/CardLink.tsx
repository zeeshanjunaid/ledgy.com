import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { targetBlank } from '../helpers';

import { LinkWithChevron } from './utils';
import { formatUrl } from './lib';

export const CardLink = ({
  title,
  type,
  description,
  image,
  to,
  prefix,
  isExternal = false,
  showImage = true,
}: Prefix & {
  title: ReactNode;
  type: 'blog' | 'customer-story';
  description: string | ReactNode;
  image: ReactNode;
  to: string;
  isExternal?: boolean;
  showImage?: boolean;
}) => (
  <Link to={formatUrl(prefix, to)} {...(isExternal ? targetBlank : {})}>
    <div className={`card card-${type} mb-6 col-lg-6 col-xl-4 d-inline-block`}>
      <div className="row m-0 flex-1">
        {showImage && (
          <div className="col-12">
            <div className="card-image-wrapper">{image}</div>
          </div>
        )}
        <div className="col-12' pt-4 content">
          <div className="row h-100 m-0 ">
            <div className="col-12">
              <h5 className="text-primary">{title}</h5>
            </div>
            <p className="col-12 text-muted font-weight-light">{description}</p>
            <div className="col-12 content-footer py-2">
              <LinkWithChevron
                text={isExternal ? 'Watch now' : 'Read more'}
                to={to}
                prefix={prefix}
              ></LinkWithChevron>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);
