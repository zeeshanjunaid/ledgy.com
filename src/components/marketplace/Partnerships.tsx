import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContentBody } from '..';
import { MarketplaceCard } from './MarketplaceCard';
import { Trans } from '@lingui/macro';

const getPartnerships = () =>
  useStaticQuery(graphql`
    query {
      allContentfulPartnership {
        edges {
          node {
            id
            slug
            title
            header
            logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            website
            description
          }
        }
      }
    }
  `);

export const Partnerships = ({ prefix }: Prefix) => {
  const partnerships = getPartnerships();
  console.log({ partnerships });
  const { edges } = partnerships.allContentfulPartnership;
  return (
    <ContentBody>
      <h4 className="mb-5 mt-3">
        <Trans>Partnerships</Trans>
      </h4>
      <div className="row align-items-center justify-content-center mb-4">
        {edges.map(({ node }: { node: IntegrationBaseProps }) => (
          <div key={node.id} className="col-md-6 col-lg-4">
            <MarketplaceCard prefix={prefix} integration={node} />
          </div>
        ))}
      </div>
    </ContentBody>
  );
};
