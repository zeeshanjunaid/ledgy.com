// @flow

import React from 'react';
import { graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/react';

import { Author, Image, type ImageProps, LanguageHint } from '../components/Markdown';
import { Title, githubUrl, targetBlank } from '../layouts/utils';

export default ({ data, lang, prefix }: {| ...Props, data: {| contentfulBlog: Page |} |}) => {
  const { title, description, language, markdown, author } = data.contentfulBlog;
  const frontmatter = {};
  const { siteUrl } = data.site.siteMetadata;

  const img = (props: ImageProps) => (
    <Image
      {...props}
      img={
        (
          frontmatter.images.find(i => i && i.childImageSharp.fluid.originalName === props.src) ||
          {}
        ).childImageSharp
      }
    />
  );

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
              <MDXProvider>
                <MDXRenderer>{markdown.childMdx.code.body}</MDXRenderer>
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
  query($id: String) {
    contentfulBlog(id: { eq: $id }) {
      id
      name
      title
      description
      language
      date
      author
      markdown {
        childMdx {
          code {
            body
          }
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
