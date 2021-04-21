import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Button } from './utils';

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
  <div className="bottom-banner position-relative my-1 text-left bg-white rounded font-weight-light">
    <div className="m-4 row">
      <div className="col-10 pl-4">
        <div className="font-weight-semi-bold">{title}</div>
        <MDXRenderer>{content.childMdx.body}</MDXRenderer>
      </div>
      <div className="col-2 d-flex align-items-center justify-content-center">
        <Button
          className={'my-sm-0 my-2 mr-2 btn-md'}
          onClick={() => {
            hide();
            acceptCookies();
          }}
        >
          Yes
        </Button>
      </div>
    </div>
    <button
      className="bottom-banner--button position-absolute bg-transparent border-0"
      onClick={hide}
    >
      ×
    </button>
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

export const CookieBanner = ({ acceptCookies }: { acceptCookies: () => void }) => {
  const result = useStaticQuery(cookieBannerQuery);
  const [banner] = result.allContentfulCookieBanner.edges;
  if (!banner) return null;

  const { title, content } = banner.node;
  const [show, setShow] = useState(true);

  return show ? (
    <Banner
      content={content}
      title={title}
      hide={() => setShow(false)}
      acceptCookies={acceptCookies}
    />
  ) : null;
};
