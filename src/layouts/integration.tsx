import React from 'react';

import { graphql } from 'gatsby';

import { CustomFade, Image, LongText, PageHeader } from '../components';
import { Title } from './utils';
import { IntegrationSummary } from '../components/customerStories/IntegrationSummary';

const Integration = ({
  data,
  lang,
  prefix,
}: Props & {
  data: {
    contentfulIntegration: IntegrationProps;
    allContentfulIntegration: { edges: { node: AllContentfulCustomerStoryProps }[] };
  };
}) => {
  const { title, logo, header, description, summary, content } = data.contentfulIntegration;

  return (
    <div>
      <Title title={title || header} description={'title'} />
      <PageHeader lang={lang} documentLang={'en'} title={header} subtitle={description} />
      <main>
        <section className="section header-custom bg-secondary pt-6">
          <div className="container container-medium">
            <div className="row">
              <div className="col-md-8">
                <div className="px-3">
                  <CustomFade translate="-100px, 0">
                    <p className="text-lg">{'description'.toUpperCase()}</p>
                    <h1>{title}</h1>
                    {description && <p className="text-lg">{description}</p>}
                  </CustomFade>
                </div>
              </div>
              <div className="col-md-4">
                <div className="rounded-md bg-secondary p-2 p-sm-4 p-md-2 p-lg-4 integrations-logo">
                  <Image
                    image={logo}
                    className="company-summary-logo font-weight-light fit-cover mx-auto my-4"
                  />
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
                <IntegrationSummary summary={summary} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Integration;

export const integrationQuery = graphql`
  query ($id: String!) {
    contentfulIntegration(id: { eq: $id }) {
      id
      title
      logo {
        localFile {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      header
      description
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
