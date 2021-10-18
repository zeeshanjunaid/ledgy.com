import { Link } from 'gatsby';
import React from 'react';
import { Image } from '../utils';

export const MarketplaceCard = ({
  integration,
  prefix,
  isPartnership = false,
}: Prefix & { integration: IntegrationBaseProps; isPartnership?: boolean }) => {
  const { slug, title, description, logo } = integration;
  const pagePath = `${prefix}/${isPartnership ? 'partnerships' : 'integrations'}/${slug}/`;
  return (
    <Link to={pagePath} className="col-12 col-lg-6 col-xl-4 p-2">
      <div className="m-2 card-border-style h-100 d-flex flex-column">
        <div className="bg-secondary card-image-wrapper p-6">
          <Image image={logo} />
        </div>
        <div className="p-4 text-primary">
          <div>
            <b>{title}</b>
          </div>
          <div>{description}</div>
        </div>
      </div>
    </Link>
  );
};
