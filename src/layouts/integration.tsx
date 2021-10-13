import React from 'react';
import { graphql } from 'gatsby';

import { LongText, PageHeader, CompanySummary } from '../components';
import { Title } from './utils';

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
  console.log({ i: data.contentfulIntegration });
  const { title, header, content } = data.contentfulIntegration;

  return (
    <div>
      <Title title={title || header} description={'title'} />
      <PageHeader lang={lang} documentLang={'en'} title={header} subtitle={'subtitle'} />
      <main>
        <section className="section ">
          <div className="container container-medium">
            <div className="row">
              <div className="col-md-4 mb-6">
                <div>company summary placeholder</div>
                {/* <CompanySummary company={'company'} prefix={prefix} /> */}
              </div>
              <div className="col-md-8">
                <div className="px-3">
                  long content stakeholder
                  <LongText content={content} prefix={prefix} />
                </div>
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
      slug
      title
      header
      content {
        childMdx {
          body
        }
      }
    }
    allContentfulIntegration {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`;
