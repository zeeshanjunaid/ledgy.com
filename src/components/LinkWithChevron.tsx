import { Link } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { targetBlank } from '../helpers';
import { DynamicTrans } from './DynamicTrans';
import { formatUrl, isExternalUrl } from './lib';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Content = ({ text, icon }: { text: string; icon: IconProp }) => (
  <div className="d-flex align-items-center">
    <DynamicTrans>{text}</DynamicTrans>
    <FontAwesomeIcon icon={icon} className="ml-2 swinging" style={{ height: '14px' }} />
  </div>
);

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
  <Content text={text} icon={faChevronRight} />;

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
