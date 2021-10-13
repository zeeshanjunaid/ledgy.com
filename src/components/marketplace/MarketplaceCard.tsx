import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

export const MarketplaceCard = ({
  integration,
  prefix,
}: Prefix & { integration: IntegrationBaseProps }) => {
  const { slug, title, logo } = integration;
  const pagePath = `${prefix}/integrations/${slug}/`;
  const { childImageSharp } = logo.localFile || {};
  const logoImage = childImageSharp ? <Img {...childImageSharp} /> : null;
  return (
    <Link to={pagePath} className="col-4">
      <div className="card card-integration mx-auto ">
        <div className="card-image-wrapper bg-secondary h-50 d-table p-5">{logoImage}</div>
        <div className="h-50 d-table px-4 py-1 text-primary p-4">{title}</div>
      </div>
    </Link>
  );
};
