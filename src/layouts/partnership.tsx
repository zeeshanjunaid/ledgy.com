import React from 'react';
import { graphql } from 'gatsby';

import { LongText, PageHeader } from '../components';
import { Title } from './utils';
import { IntegrationSummary } from '../components/customerStories/IntegrationSummary';

const Partnership = ({
  data,
  lang,
  prefix,
}: Props & {
  data: {
    contentfulPartnership: IntegrationProps;
    allContentfulPartnership: { edges: { node: AllContentfulCustomerStoryProps }[] };
  };
}) => {
  const { title, logo, header, description, summary, content } = data.contentfulPartnership;

  return (
    <div>
      <Title title={title || header} description={'title'} />
      <PageHeader lang={lang} documentLang={'en'} title={header} subtitle={description} />
      <main>
        <section className="section ">
          <div className="container container-medium">
            <div className="row">
              <div className="col-md-8">
                <div className="px-3">
                  <LongText content={content} prefix={prefix} />
                </div>
              </div>
              <div className="col-md-4 mb-6">
                <IntegrationSummary summary={summary} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Partnership;

export const partnershipQuery = graphql`
  query ($id: String!) {
    contentfulPartnership(id: { eq: $id }) {
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
