import React from 'react';

import { MarketplaceCard } from './MarketplaceCard';
import { Trans } from '@lingui/macro';
import { Section } from '../utils';

export const MarketplaceSection = ({
  edges,
  prefix,
  isIntegration = false,
}: {
  edges: { node: MarketplaceBaseProps }[];
  prefix: string;
  isIntegration?: boolean;
}) => (
  <Section smallPadding>
    <h4 className="mb-5 mt-3">
      <Trans>{isIntegration ? 'Integrations' : 'Partnerships'}</Trans>
    </h4>
    <div className="row">
      {edges.map(({ node }) => (
        <MarketplaceCard key={node.id} prefix={prefix} marketplace={node} />
      ))}
    </div>
  </Section>
);
