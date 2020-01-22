import React from 'react';
import { targetBlank } from '../helpers';

const NotFoundPage = () => (
  <div>
    <header className="header py-40" style={{ backgroundColor: '#29363d' }} />

    <div className="container py-200">
      <header className="section-header">
        <h1 className="mt-4">Page not found</h1>
        <hr />
        <p className="lead">Oh no! We couldn’t find that page.</p>
        <p className="lead">
          Were you looking for{' '}
          <a href="/features" {...targetBlank}>
            features
          </a>{' '}
          or{' '}
          <a href="/contact" {...targetBlank}>
            contact
          </a>{' '}
          info?
        </p>
      </header>
    </div>
  </div>
);

export default NotFoundPage;
