// @flow

import React from 'react';
import { graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/react';

import { Author, Image, type ImageProps } from '../components/Markdown';
import { Title, githubUrl, targetBlank } from '../layouts/utils';

export default ({
  data,
  pageContext,
  prefix
}: {
  data: Object,
  pageContext: { notLocalized?: boolean },
  prefix: string
}) => {
  const { frontmatter, code, fields } = data.mdx;
  const { notLocalized } = pageContext;
  const { siteUrl } = data.site.siteMetadata;

  const img = ({ src, ...props }: {| src: string, ...ImageProps |}) => (
    <Image
      {...props}
      img={
        (frontmatter.images.find(i => i && i.childImageSharp.fluid.originalName === src) || {})
          .childImageSharp
      }
    />
  );

  return (
    <div>
      <Title
        title={frontmatter.title}
        description={frontmatter.description}
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
              <h1>{frontmatter.title}</h1>
              {notLocalized && (
                <div className="text-center">
                  <Trans>This page is only available in English.</Trans>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="main-content">
        <section className="section">
          <div className="container container-small">
            <div className="markdown clearfix">
              <MDXProvider components={{ Img: img }}>
                <MDXRenderer>{code.body}</MDXRenderer>
              </MDXProvider>
            </div>
            <div className="d-flex py-4">
              {frontmatter.date && <small>{frontmatter.date}</small>}
              <small className="ml-auto">
                <a
                  href={`${githubUrl}edit/master/src/markdown${fields.slug.slice(0, -1)}.mdx`}
                  {...targetBlank}
                >
                  <FontAwesomeIcon icon={faPen} className="fs-12 mr-2" />
                  <Trans>Suggest changes</Trans>
                </a>
              </small>
            </div>
            {frontmatter.author && <Author prefix={prefix} name={frontmatter.author} />}
          </div>
        </section>
      </main>
    </div>
  );
};

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
        description
        author
        date(formatString: "DD MMM YYYY")
        coverImage {
          childImageSharp {
            fixed(width: 1024, height: 536) {
              src
            }
          }
        }
        images {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
      code {
        body
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
