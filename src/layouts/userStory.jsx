// @flow

import React from 'react';
import { graphql } from 'gatsby';

import { PublishDate } from '../components/Content';
import { Author } from '../components/Markdown';
import { MarkdownContent } from '../components/MarkdownContent';
import { DefaultHeader, CalculatorHeader } from '../components/Header';
import { Title } from '../layouts/utils';

export default ({
  data,
  lang,
  prefix
}: {|
  ...Props,
  data: {| contentfulUserStory: UserStory, site: { siteMetadata: { siteUrl: string } } |}
|}) => {
  const { id, title, subtitle, date, author, language, content, company } = data.contentfulUserStory;
  const { cover } = company;
  return (
    <div>
      <Title
        title={title}
        description={subtitle}
      />
      <DefaultHeader lang={lang} language={language} title={title} />
      <main className="main-content">
        <section className="section">
          <div className="container container-small">
            <MarkdownContent content={content}/>
            <PublishDate date={date} />
            {author && <Author prefix={prefix} name={author} />}
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
          fluid(maxWidth: 150){
            ...GatsbyContentfulFluid_withWebp
          }
        }
        cover {
          fluid(maxWidth: 150){
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
  }
`;
