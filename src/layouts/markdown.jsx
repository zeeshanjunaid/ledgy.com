// @flow

import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Author, Image, LanguageHint } from '../components/Markdown';
import { Title } from '../layouts/utils';

export default ({
  data,
  lang,
  prefix
}: {|
  ...Props,
  data: {| contentfulBlog: Page, site: { siteMetadata: { siteUrl: string } } |}
|}) => {
  const { title, description, language, markdown, author } = data.contentfulBlog;
  const frontmatter = {};
  const { siteUrl } = data.site.siteMetadata;

  return (
    <div>
      <Title
        title={title}
        description={description}
        thumbnailUrl={
          frontmatter.coverImage
            ? `${siteUrl}${frontmatter.coverImage.childImageSharp.fixed.src}`
            : ''
        }
      />
      <header className="header text-white bg-ledgy">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <h1>{title}</h1>
              <LanguageHint lang={lang} documentLang={language || 'en'} />
            </div>
          </div>
        </div>
      </header>
      <main className="main-content">
        <section className="section">
          <div className="container container-small">
            <div className="markdown clearfix">
              <MDXProvider components={{ Image }}>
                <MDXRenderer>{markdown.childMdx.body}</MDXRenderer>
              </MDXProvider>
            </div>
            {author && <Author prefix={prefix} name={author} />}
          </div>
        </section>
      </main>
    </div>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    contentfulBlog(id: { eq: $id }) {
      name
      title
      description
      language
      date
      author
      markdown {
        childMdx {
          body
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
