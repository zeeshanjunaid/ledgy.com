import React from 'react';

import { graphql } from 'gatsby';

import { CustomFade, Image, LongText } from '../components';
import { Title } from './utils';
import { MarketplaceSummary } from '../components/marketplace/MarketplaceSummary';

const Marketplace = ({
  data,
  prefix,
}: Props & {
  data: {
    contentfulMarketplace: MarketplaceProps;
  };
}) => {
  const { company, logo, header, description, summary, content, motivationText } =
    data.contentfulMarketplace;

  return (
    <div>
      <Title title={header} description={description} />
      <main>
        <section className="pt-6 bg-lightest">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 p-4 mb-6">
                <CustomFade translate="-100px, 0" className="px-3">
                  <p className="text-lg">{motivationText.toUpperCase()}</p>
                  <h1>{company}</h1>
                  {description && <p className="text-lg">{description}</p>}
                </CustomFade>
              </div>
              <div className="col-12 col-md-4">
                <div className="bg-secondary d-flex flex-column justify-content-center h-100 p-5 marketplace-logo">
                  <Image image={logo} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section ">
          <div className="container container-medium ">
            <div className="row">
              <div className="col-md-8 order-2 order-md-1">
                <div className="px-3 mt-6">
                  <LongText content={content} prefix={prefix} />
                </div>
              </div>
              <div className="col-md-4 mb-6 order-1 order-md-2">
                <MarketplaceSummary summary={summary} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Marketplace;

export const marketplaceQuery = graphql`
  query ($id: String!) {
    contentfulMarketplace(id: { eq: $id }) {
      id
      header
      company
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
      isIntegration
      motivationText
      summary {
        contentfulfields {
          fieldContent
          fieldName
        }
      }
      content {
        childMdx {
          body
        }
      }
    }
  }
`;
