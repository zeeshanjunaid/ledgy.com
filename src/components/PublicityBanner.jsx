// @flow

import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Banner = ({
  content,
  isVisible,
  hide
}: {|
  content: Mdx,
  isVisible: boolean,
  hide: () => void
|}) => (
  <div
    className={`publicity-banner position-fixed text-center bg-white border border-gray rounded ${
      !isVisible ? 'd-none' : ''
    }`}
  >
    <div className="m-4 pt-4 pt-md-0">
      <MDXRenderer>{content.childMdx.body}</MDXRenderer>
    </div>
    <button
      className="publicity-banner--button position-absolute bg-transparent border-0 p-4 rounded-circle"
      onClick={hide}
    >
      ×
    </button>
  </div>
);

const isVisibleNow = ({ node }: {| node: {| startAt: string, endAt: string |} |}) => {
  const now = Date.now();
  return new Date(node.startAt).getTime() <= now && new Date(node.endAt).getTime() >= now;
};

export default ({ pathname }: {| pathname: string |}) => {
  const [show, setShow] = useState(true);

  const result = useStaticQuery(
    graphql`
      {
        allContentfulBanner {
          edges {
            node {
              title
              hideOnPage
              startAt
              endAt
              content {
                childMdx {
                  body
                }
              }
            }
          }
        }
      }
    `
  );
  const [banner] = result.allContentfulBanner.edges;
  if (!banner) return null;

  const { content, hideOnPage } = banner.node;

  const hide = () => setShow(false);
  const isVisible = isVisibleNow(banner) && show;
  if (isVisible && pathname.includes(hideOnPage)) hide();

  return <Banner content={content} isVisible={isVisible} hide={hide} />;
};
