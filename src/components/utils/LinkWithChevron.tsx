import { Link } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { formatUrl, isExternalUrl } from './../lib';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { targetBlank } from '../../helpers';
import { DynamicTrans } from './DynamicTrans';

const TextAndIcon = ({ text, icon }: { text: string; icon: IconProp }) => (
  <div className="d-flex align-items-center pr-2">
    <DynamicTrans>{text}</DynamicTrans>
    <FontAwesomeIcon icon={icon} className="ml-2 swinging" style={{ height: '14px' }} />
  </div>
);

export const LinkWithChevron = ({
  to,
  text,
  prefix,
  className = '',
}: Prefix & { to: string; text: string; className?: string }) => {
  const Content = <TextAndIcon text={text} icon={faChevronRight} />;

  return (
    <div className={`${className} textcolumn-link pr-5`}>
      {isExternalUrl(to) ? (
        <a href={to} {...targetBlank}>
          {Content}
        </a>
      ) : (
        <Link to={formatUrl(prefix, to)}>{Content}</Link>
      )}
    </div>
  );
};
