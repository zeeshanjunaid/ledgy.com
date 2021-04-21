import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Button } from './utils';
import { ClosingButton, bannerClassName } from './PublicityBanner';

import { hasAcceptedCookies, loadMarketingTools } from '../helpers/marketing';

const ConfirmButton = ({
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
    Yes
  </Button>
);

const Banner = ({
  title,
  content,
  hide,
  acceptCookies,
}: {
  title: string;
  content: Mdx;
  hide: () => void;
  acceptCookies: () => void;
}) => (
  <div className={bannerClassName}>
    <div className="m-4 row">
      <div className="col-10 pl-4">
        <div className="font-weight-semi-bold">{title}</div>
        <MDXRenderer>{content.childMdx.body}</MDXRenderer>
      </div>
      <div className="col-2 d-flex align-items-center justify-content-center">
        <ConfirmButton hide={hide} acceptCookies={acceptCookies} />
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
          title
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

  const { title, content } = banner.node;
  const acceptCookies = () => {
    loadMarketingTools(segmentDestinations);
    setShow(false);
  };

  return show ? (
    <Banner
      content={content}
      title={title}
      hide={() => setShow(false)}
      acceptCookies={acceptCookies}
    />
  ) : null;
};
