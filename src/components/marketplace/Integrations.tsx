import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContentBody } from '../../components';
import { MarketplaceCard } from './MarketplaceCard';
import { Trans } from '@lingui/macro';
import { Section } from '../utils';

const getIntegrations = () =>
  useStaticQuery(graphql`
    query {
      allContentfulIntegration {
        edges {
          node {
            id
            slug
            title
            description
            logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

export const Integrations = ({ prefix }: Prefix) => {
  const integrations = getIntegrations();
  const { edges } = integrations.allContentfulIntegration;
  return (
    <ContentBody>
      <Section smallPadding>
        <h4 className="mb-5 mt-3">
          <Trans>Integrations</Trans>
        </h4>
        <div className="row">
          {edges.map(({ node }: { node: IntegrationBaseProps }) => (
            <MarketplaceCard key={node.id} prefix={prefix} integration={node} />
          ))}
        </div>
      </Section>
    </ContentBody>
  );
};
