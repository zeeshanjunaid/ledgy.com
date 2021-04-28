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
  date,
  isExternal = false,
  showImage = true,
}: {
  title: ReactNode;
  type: 'blog' | 'customer-story';
  description: string | ReactNode;
  image: ReactNode;
  to: string;
  prefix: string;
  date?: string;
  isExternal?: boolean;
  showImage?: boolean;
}) => {
  const formattedTo = formatUrl(prefix, to);
  return (
    <div className={`card card-${type} mb-6`}>
      <div className="row m-0 flex-1">
        {showImage && (
          <div className="col-md-6 col-lg-3">
            {isExternal ? (
              <a href={to} {...targetBlank}>
                {image}
              </a>
            ) : (
              <Link className="d-table h-100 w-100" to={formattedTo}>
                <div className="card-image-wrapper">{image}</div>
              </Link>
            )}
          </div>
        )}
        <div className={`${showImage ? 'col-md-6 col-lg-9' : 'col-12'} px-2 py-4`}>
          <div className="row h-100 m-0">
            <div className="col-lg-10">
              {isExternal ? (
                title
              ) : (
                <Link to={formattedTo} className="text-primary">
                  {title}
                </Link>
              )}
            </div>
            <small className="col-lg-2 text-lg-right text-muted">{date}</small>
            <div className="col-12">{description}</div>
            <div className="col-12 mt-auto">
              <LinkWithChevron
                text={isExternal ? 'Watch now' : 'Read more'}
                to={to}
                prefix={prefix}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
