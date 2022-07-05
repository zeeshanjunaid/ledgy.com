import React from 'react';
import { graphql } from 'gatsby';

import { LongText, PageHeader, CompanySummary, EntryPicker } from '../components';
import { Title } from '../layouts/utils';

const CustomerStory = ({
  data,
  prefix,
  region,
}: Props & {
  data: {
    contentfulCustomerStory: CustomerStoryProps;
  };
}) => {
  const { title, header, subtitle, content, company, isOurStory, entries } =
    data.contentfulCustomerStory;

  return (
    <div>
      <Title title={title || header} description={subtitle} />
      <PageHeader title={header} subtitle={subtitle} />
      <main>
        <section className="section ">
          <div className="container container-medium">
            <div className="row">
              <div className="col-md-4 mb-6">
                <CompanySummary company={company} prefix={prefix} />
              </div>
              <div className="col-md-8">
                <div className="px-3">
                  <LongText content={content} prefix={prefix} />
                </div>
              </div>
            </div>
          </div>
          {!isOurStory && <EntryPicker {...{ region, prefix }} entries={entries} />}
        </section>
      </main>
    </div>
  );
};

export default CustomerStory;

export const customerStoryQuery = graphql`
  query ($id: String!) {
    contentfulCustomerStory(id: { eq: $id }) {
      id
      slug
      title
      header
      subtitle
      language
      isOurStory
      content {
        childMdx {
          body
        }
      }
      entries {
        ...TestimonialsCarousel
      }
      company {
        name
        contactName
        contactTitle
        logo {
          localFile {
            childImageSharp {
              fluid(maxWidth: 150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        mainQuote {
          childMdx {
            body
          }
        }
        yearFounded
        employeeCount
        sector
        location
        stage
      }
    }
  }
`;
