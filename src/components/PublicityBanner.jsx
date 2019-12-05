// @flow

import React, { useState } from 'react';

const Banner = ({ isSignaturesPage, hide }: { isSignaturesPage: boolean, hide: () => void }) => (
  <div
    className={`publicity-banner position-fixed text-center bg-white border border-gray rounded p-4 ${
      isSignaturesPage ? 'd-none' : ''
    }`}
  >
    <p>
      <strong>Get early access to Digital Signatures & Document Templating</strong>{' '}
      <span className="ml-1" role="img" aria-label="Signature">
        📝
      </span>
    </p>
    <p>Sign your legally-binding equity paperwork fully online</p>
    <p>
      <a href="/features/signatures">Learn More</a>
    </p>
    <button
      className="publicity-banner--button position-absolute bg-transparent border-0 p-2 p-lg-4 rounded-circle"
      onClick={hide}
    >
      ×
    </button>
  </div>
);

export default ({ pathname }: {| pathname: string |}) => {
  const [show, setShow] = useState(true);
  if (!show) return <div />;

  const isSignaturesPage = pathname === '/features/signatures';
  return <Banner isSignaturesPage={isSignaturesPage} hide={() => setShow(false)} />;
};
