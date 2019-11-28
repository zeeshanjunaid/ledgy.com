// @flow

import React, { useState } from 'react';

const Banner = ({ isPsopPage, hide }: { isPsopPage: boolean, hide: () => void }) => (
  <div
    className={`publicity-banner position-fixed text-center bg-white border border-gray rounded p-4 ${
      isPsopPage ? 'd-none' : ''
    }`}
  >
    <p>
      <span className="mr-1" role="img" aria-label="Germany">
        🇩🇪
      </span>
      <strong>We launched a free PSOP template for German startups</strong>{' '}
      <span className="ml-1" role="img" aria-label="Rocket">
        🚀
      </span>
    </p>
    <p>
      Approved by major law firms and endorsed by the some of most successful startup founders of
      Europe
    </p>
    <p>
      <a href="/employee-participation-plan-templates/">Learn More</a>
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

  const isPsopLaunchPage = pathname === '/employee-participation-plan-templates/';

  return <Banner isPsopPage={isPsopLaunchPage} hide={() => setShow(false)} />;
};
