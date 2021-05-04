import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Button } from './utils';
import { ClosingButton, bannerClassName } from './PublicityBanner';

import { hasAcceptedCookies, loadMarketingTools } from '../helpers';

const ConfirmCookieButton = ({
  hide,
  acceptCookies,
}: {
  hide: () => void;
  acceptCookies: () => void;
}) => (
  <Button
    className={'my-sm-0 my-2 mr-2 btn-md'}
    onClick={() => {
      hide();
      acceptCookies();
    }}
  >
    Ok
  </Button>
);

const Banner = ({
  content,
  hide,
  acceptCookies,
}: {
  content: Mdx;
  hide: () => void;
  acceptCookies: () => void;
}) => (
  <div className={bannerClassName}>
    <div className="m-4 row">
      <div className="col-10 pl-xl-6 pl-2">
        <MDXRenderer>{content.childMdx.body}</MDXRenderer>
      </div>
      <div className="col-2 d-flex align-items-center justify-content-center">
        <ConfirmCookieButton hide={hide} acceptCookies={acceptCookies} />
      </div>
    </div>
    <ClosingButton hide={hide} />
  </div>
);

const cookieBannerQuery = graphql`
  {
    allContentfulCookieBanner {
      edges {
        node {
          content {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`;

export const CookieBanner = ({ segmentDestinations }: { segmentDestinations: string[] }) => {
  const result = useStaticQuery(cookieBannerQuery);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (hasAcceptedCookies()) {
      setTimeout(() => {
        loadMarketingTools(segmentDestinations);
      }, 1414);
    } else {
      setShow(true);
    }
  }, []);

  const [banner] = result.allContentfulCookieBanner.edges;
  if (!banner) return null;

  const { content } = banner.node;
  const acceptCookies = () => {
    loadMarketingTools(segmentDestinations);
    setShow(false);
  };

  return show ? (
    <Banner content={content} hide={() => setShow(false)} acceptCookies={acceptCookies} />
  ) : null;
};
