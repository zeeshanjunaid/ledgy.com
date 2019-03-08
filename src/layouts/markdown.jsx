// @flow

import React from 'react';
import { graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { withMDXScope } from 'gatsby-mdx/context';
import Img from 'gatsby-image';

import { Title, githubUrl, targetBlank } from '../layouts/utils';

export default ({
  data,
  pageContext
}: {
  data: Object,
  pageContext: { notLocalized?: boolean }
}) => {
  const { frontmatter, code, fields } = data.mdx;
  const { notLocalized } = pageContext;
  const { siteUrl } = data.site.siteMetadata;

  const img = ({
    src,
    align,
    caption,
    size,
    ...props
  }: {
    src: string,
    align: string,
    caption: string,
    size: string
  }) => {
    const image = (
      frontmatter.images.find(i => i && i.childImageSharp.fluid.originalName === src) || {}
    ).childImageSharp;
    if (!image) return <strong>Image not found: {src}</strong>;
    return (
      <figure
        className={align ? `mx-auto float-md-${align} size-md-small m-6` : 'mx-auto my-6'}
        style={size ? { width: `${size}px` } : {}}
      >
        <Img {...image} {...props} />
        {caption && (
          <figcaption className="text-muted small px-3 font-weight-light mt-1">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  };

  const Renderer = withMDXScope(({ scope, ...props }) => (
    <MDXRenderer scope={{ ...scope, Img: img }} {...props} />
  ));

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
              <Renderer>{code.body}</Renderer>
            </div>
            <div className="d-flex pt-4">
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
