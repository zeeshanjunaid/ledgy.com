import { Link } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { targetBlank } from '../helpers';
import { DynamicTrans } from './DynamicTrans';
import { formatUrl, isExternalUrl } from './lib';

export const LinkWithChevron = ({
  to,
  text,
  prefix,
  className = '',
}: {
  to: string;
  text: string;
  prefix: string;
  className?: string;
}) => {
  const Content = (
    <div className="d-flex align-items-center">
      <DynamicTrans>{text}</DynamicTrans>
      <FontAwesomeIcon icon={faChevronRight} className="ml-2 swinging" style={{ height: '14px' }} />
    </div>
  );

  return isExternalUrl(to) ? (
    <a href={to} {...targetBlank} className={className}>
      {Content}
    </a>
  ) : (
    <Link to={formatUrl(prefix, to)} className={className}>
      {Content}
    </Link>
  );
};
