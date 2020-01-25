// @flow

import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Trans } from '@lingui/react';

import { PublishDate } from '../components/Content';
import { Author } from '../components/Markdown';
import { MarkdownContent } from '../components/MarkdownContent';
import { DefaultHeader, CalculatorHeader } from '../components/Header';
import { UserStoryCard } from '../components/userStories';
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

            <h4 className="m-5 text-center">
              <Trans>More Stories from Ledgy Users</Trans>
            </h4>

            <div className="d-flex flex-row align-items-center justify-content-center">
              {data.allContentfulUserStory.edges.slice(0, 3).map(({ node }) =>
                <div className="col-md-4">
                  <UserStoryCard userStory={node} />
                </div>
              )}
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
    allContentfulUserStory(sort: {order: DESC, fields: [date]}) {
      edges {
        node {
          id
          slug
          company {
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
          }
        }
      }
    }
  }
`;
