// @flow

import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Author, Image, Lead } from '../components/Markdown';
import { DefaultHeader, CalculatorHeader } from '../components/Header';
import { Title } from '../layouts/utils';

const CALCULATOR_ID = 'cfcd898c-876a-55cd-befe-3918b0753a5c';

export default ({
  data,
  lang,
  prefix
}: {|
  ...Props,
  data: {| contentfulPage: Page, site: { siteMetadata: { siteUrl: string } } |}
|}) => {
  const { id, title, description, content, author, date, cover } = data.contentfulPage;
  const { siteUrl } = data.site.siteMetadata;
  const showCalculatorHeader = id === CALCULATOR_ID;

  return (
    <div>
      <Title
        title={title}
        description={description}
        thumbnailUrl={cover ? `${siteUrl}${cover.localFile.childImageSharp.fixed.src}` : ''}
      />
      {showCalculatorHeader ? (
        <CalculatorHeader data={data} />
      ) : (
        <DefaultHeader lang={lang} data={data} />
      )}
      <main className="main-content">
        <section className="section">
          <div className="container container-small">
            <div className="markdown clearfix">
              {content && (
                <MDXProvider components={{ img: Image, Lead }}>
                  <MDXRenderer>{content.childMdx.body}</MDXRenderer>
                </MDXProvider>
              )}
            </div>
            <div className="d-flex py-4">{date && <small>{date}</small>}</div>
            {author && <Author prefix={prefix} name={author} />}
          </div>
        </section>
      </main>
    </div>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    contentfulPage(id: { eq: $id }) {
      id
      slug
      title
      description
      language
      date(formatString: "DD MMM YYYY")
      author
      content {
        childMdx {
          body
        }
      }
      cover {
        localFile {
          childImageSharp {
            fixed(width: 1024, height: 536) {
              src
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    calculator: imageSharp(fluid: { originalName: { regex: "/calculator.png/" } }) {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;
