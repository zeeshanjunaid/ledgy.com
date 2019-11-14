// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ChevronRight } from '../layouts/utils';

export const ReadMore = (props: { icon: string, title: Node, subtitle: Node, url: string }) => {
  const { icon, title, subtitle, url } = props;
  return (
    <>
      <FontAwesomeIcon icon={icon} className="text-primary mb-2" size="2x" />
      <h5>{title}</h5>
      <>
        {subtitle}
        <br />
        <Link href to={url}>
          <Trans>Read more</Trans>
          <ChevronRight />
        </Link>
      </>
    </>
  );
};
