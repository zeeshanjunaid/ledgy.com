// @flow

import React from 'react';
import { graphql } from 'gatsby';
import { Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import { Title, githubUrl, targetBlank } from '../layouts/utils';

export default function Template({ data, pageContext }: {
  data: Object,
  pageContext: { notLocalized?: boolean }
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { notLocalized } = pageContext;
  const { siteUrl } = data.site.siteMetadata;
  return (
    <div>
      <Title
        title={frontmatter.title}
        description={frontmatter.description}
        thumbnailUrl={frontmatter.thumbnailUrl ? `${siteUrl}${frontmatter.thumbnailUrl}` : ''}
      />
      <header className="header text-white bg-ledgy">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <h1>{frontmatter.title}</h1>
              {notLocalized &&
                <div className="text-center">
                  <Trans>This page is only available in English.</Trans>
                </div>
              }
            </div>
          </div>
        </div>
      </header>
      <main className="main-content">
        <section className="section">

          <div className="container container-small">
            <div
              dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line react/no-danger
            />
            <div className="text-right pt-4">
              <small>
                <a
                  href={`${githubUrl}edit/master/src/markdown/${markdownRemark.fields.slug.slice(0, -1)}.md`}
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
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        thumbnailUrl
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
