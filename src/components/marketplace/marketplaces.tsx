import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContentBody } from '..';
import { MarketplaceSection } from './MarketplaceSection';

const getMarketplaces = () =>
  useStaticQuery(graphql`
    query {
      allContentfulMarketplace {
        edges {
          node {
            id
            company
            description
            isIntegration
            logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            slug
          }
        }
      }
    }
  `);

export const Marketplaces = ({ prefix }: Prefix) => {
  const marketplaces = getMarketplaces();
  const { edges } = marketplaces.allContentfulMarketplace;
  const integrations = edges.filter(
    ({ node }: { node: MarketplaceBaseProps }) => node.isIntegration
  );
  const partnerships = edges.filter(
    ({ node }: { node: MarketplaceBaseProps }) => !node.isIntegration
  );
  return (
    <ContentBody>
      {!!integrations && <MarketplaceSection edges={integrations} prefix={prefix} isIntegration />}
      {!!partnerships && <MarketplaceSection edges={partnerships} prefix={prefix} />}
    </ContentBody>
  );
};
