import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContentBody } from '../../components';
import { IntegrationCard } from './IntegrationCard';
import { Trans } from '@lingui/macro';

const getIntegrations = () =>
  useStaticQuery(graphql`
    query {
      allContentfulIntegration {
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

export const Integrations = ({ prefix }: Prefix) => {
  const integrations = getIntegrations();
  const { edges } = integrations.allContentfulIntegration;
  return (
    <ContentBody>
      <h4 className="mb-5 mt-3">
        <Trans>Integrations</Trans>
      </h4>
      <div className="row align-items-center justify-content-center mb-4">
        {edges.map(({ node }: { node: IntegrationBaseProps }) => (
          <div key={node.id} className="col-md-6 col-lg-4">
            <IntegrationCard prefix={prefix} integration={node} />
          </div>
        ))}
      </div>
    </ContentBody>
  );
};
