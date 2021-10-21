import React from 'react';
import { graphql } from 'gatsby';
import { CustomFade, Image, LongText } from '../components';
import { Title } from './utils';
import { MarketplaceSummary } from '../components/marketplace/MarketplaceSummary';
import { MarketplacePictures } from './MarketplacePictures';

const Marketplace = ({
  data,
  prefix,
}: Props & {
  data: {
    contentfulMarketplace: MarketplaceProps;
  };
}) => {
  const { company, logo, header, description, summary, content, motivationText, pictures } =
    data.contentfulMarketplace;

  return (
    <div>
      <Title title={header} description={description} />
      <main>
        <div className="pt-6 bg-lightest">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 p-4 mb-6">
                <CustomFade translate="-100px, 0" className="px-3">
                  <p className="text-lg">{motivationText.toUpperCase()}</p>
                  <h1>{company}</h1>
                  <p className="text-lg">{description}</p>
                </CustomFade>
              </div>
              <div className="col-12 col-lg-4">
                <div className="bg-secondary d-flex flex-column justify-content-center align-items-center h-100 p-5 marketplace-logo">
                  <Image image={logo} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-medium mb-6">
          <div className="row">
            <div className="col-12 col-lg-8 order-2 order-lg-1">
              <div className="px-3 mt-lg-6">
                <LongText content={content} prefix={prefix} />
                <MarketplacePictures pictures={pictures} />
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-6 order-1 order-lg-2">
              <MarketplaceSummary summary={summary} />
            </div>
          </div>
        </div>
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
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
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
      pictures {
        localFile {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
