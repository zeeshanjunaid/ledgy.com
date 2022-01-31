import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { LinkWithChevron } from '../utils';
import { ClosingButton } from '../PublicityBanner';

const topUpdateBannerQuery = graphql`
  {
    allContentfulTopUpdateBanner {
      edges {
        node {
          text
          linkTo
          visible
        }
      }
    }
  }
`;

export const TopUpdateBanner = ({ prefix }: { prefix: string }) => {
  const result = useStaticQuery(topUpdateBannerQuery);

  const [banner]: TopUpdateBanner[] = result.allContentfulTopUpdateBanner.edges;

  if (!banner) return null;
  const { text, linkTo, visible } = banner.node;
  if (!visible) return null;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const hide = () => {
    setShow(false);
  };

  return show ? (
    <div className="topBanner p-2">
      <div className="close-cont">
        <ClosingButton hide={hide} classNames={'close--button-blue'} />
      </div>
      <div className="d-inline-block">
        <LinkWithChevron
          prefix={prefix}
          text={text}
          className="d-inline-block text-blue"
          to={linkTo}
        />
      </div>
    </div>
  ) : null;
};