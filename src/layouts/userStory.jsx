// @flow

import React from 'react';
import { graphql } from 'gatsby';

import { PublishDate } from '../components/Content';
import { Author } from '../components/Markdown';
import { MarkdownContent } from '../components/MarkdownContent';
import { DefaultHeader } from '../components/Header';
import { CompanyContent, OtherUserStories } from '../components/userStories';
import { Title } from '../layouts/utils';

export default ({
  data,
  lang,
  prefix
}: {|
  ...Props,
  data: {|
    contentfulUserStory: UserStory,
    allContentfulUserStory: Object
  |}
|}) => {
  const { id, title, subtitle, date, author, language, content, company } = data.contentfulUserStory;
  const otherUserStories = data.allContentfulUserStory.edges
    .filter(({ node }) => node.id !== id)
    .map(({ node }) => node);
  return (
    <div>
      <Title title={title} description={subtitle} />
      <DefaultHeader lang={lang} language={language} title={title} />
      <main className="main-content">
        <section className="section">
          <div className="container container-medium">
            <div className="row">
              <div className="col-md-4">
                <CompanyContent company={company} />
              </div>
              <div className="col-md-8">
                <MarkdownContent content={content} />
                <PublishDate date={date} />
                {author && <Author prefix={prefix} name={author} />}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <OtherUserStories userStories={otherUserStories} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    contentfulUserStory(id: { eq: $id }) {
      id
      slug
      title
      subtitle
      date
      author
      language
      content {
        childMdx {
          body
        }
      }
      company {
        name
        contactName
        contactTitle
        logo {
          fluid(maxWidth: 150) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        cover {
          fluid(maxWidth: 150) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        mainQuote {
          childMdx {
            body
          }
        }
        yearFounded
        funding
        employeeCount
        sector
        location
        stage
      }
    }
    allContentfulUserStory(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          slug
          company {
            logo {
              fluid(maxWidth: 150) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            cover {
              fluid(maxWidth: 150) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
