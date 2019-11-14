// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ChevronRight } from '../layouts/utils';

export default (props: { icon: string, title: string, subtitle: Node, url: string }) => {
  const { icon, title, subtitle, url } = props;
  return (
    <>
      <FontAwesomeIcon icon={icon} className="text-primary mb-2" size="2x" />
      <h5>
        <Trans>{title}</Trans>
      </h5>
      <>
        <Trans>{subtitle}</Trans>
        <br />
        <Link href to={url}>
          <Trans>Read more</Trans>
          <ChevronRight />
        </Link>
      </>
    </>
  );
};
