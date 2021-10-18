import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContentBody } from '..';
import { MarketplaceCard } from './MarketplaceCard';
import { Trans } from '@lingui/macro';
import { Section } from '../utils';

const getPartnerships = () =>
  useStaticQuery(graphql`
    query {
      allContentfulPartnership {
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

export const Partnerships = ({ prefix }: Prefix) => {
  const partnerships = getPartnerships();
  const { edges } = partnerships.allContentfulPartnership;
  return (
    <ContentBody>
      <Section smallPadding>
        <h4 className="mb-5 mt-3">
          <Trans>Partnerships</Trans>
        </h4>
        <div className="row">
          {edges.map(({ node }: { node: IntegrationBaseProps }) => (
            <MarketplaceCard key={node.id} prefix={prefix} integration={node} isPartnership />
          ))}
        </div>
      </Section>
    </ContentBody>
  );
};
