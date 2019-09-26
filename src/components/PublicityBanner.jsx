// @flow

import React, { type Node } from 'react';
import { Link } from 'gatsby';

export default ({
  text,
  setBannerOpen,
  extraLink
}: {|
  text: Node,
  setBannerOpen: boolean => void,
  extraLink?: string
|}) => (
  <div className="publicity-banner position-fixed text-center bg-white border border-gray rounded p-4">
    {text}
    {!!extraLink && (
      <div>
        <small>
          <Link
            href
            to={extraLink}
            className="text-muted font-weight-light"
            onClick={() => setBannerOpen(false)}
          >
            Learn more...
          </Link>
        </small>
      </div>
    )}
    <button
      className="publicity-banner--button position-absolute bg-transparent border-0 p-2 p-lg-4 rounded-circle"
      onClick={() => setBannerOpen(false)}
    >
      ×
    </button>
  </div>
);
