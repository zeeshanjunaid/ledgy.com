import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <div>
    <header className="header py-40" style={{ backgroundColor: '#29363d' }} />

    <div className="container py-200">
      <header className="section-header">
        <h1 className="mt-4">Page not found</h1>
        <hr />
        <p className="lead">Oh no! We couldn’t find that page.</p>
        <p className="lead">
          Were you looking for features for{' '}
          <Link href to="/finance">
            finance
          </Link>
          ,{' '}
          <Link href to="/human-resources">
            human resources
          </Link>
          , or{' '}
          <Link href to="/investors">
            investors
          </Link>
          ? Maybe need some{' '}
          <Link href to="/help">
            help
          </Link>
          ?
        </p>
      </header>
    </div>
  </div>
);

export default NotFoundPage;
