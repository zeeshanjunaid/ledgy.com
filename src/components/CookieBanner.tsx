import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Banner = ({ title, content, hide }: { title: string; content: Mdx; hide: () => void }) => (
  <div className="cookie-banner position-fixed text-left bg-white border border-gray rounded ">
    <div className="m-4 p-2 pt-md-0">
      <div className="my-4 font-weight-semi-bold">{title}</div>
      <div className="text-sm">
        <MDXRenderer>{content.childMdx.body}</MDXRenderer>
      </div>
      <button
        className="cookie-banner--confirm-button rounded text-white text-sm font-weight-semi-bold mt-4 border-0 "
        onClick={hide}
      >
        Yes
      </button>
    </div>
    <button
      className="publicity-banner--button position-absolute bg-transparent border-0 p-4 rounded-circle"
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

export const CookieBanner = () => {
  const result = useStaticQuery(cookieBannerQuery);
  const [banner] = result.allContentfulCookieBanner.edges;
  if (!banner) return null;

  const { title, content } = banner.node;
  const [show, setShow] = useState(true);

  return show ? <Banner content={content} title={title} hide={() => setShow(false)} /> : null;
};
