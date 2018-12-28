// @flow

import React from 'react';
import { graphql } from 'gatsby';

import { Title } from '../layouts/utils';

export default function Template({ data }: { data: Object }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <Title title={frontmatter.title} description={frontmatter.description} />
      <header className="header text-white bg-ledgy">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <h1>{frontmatter.title}</h1>
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
          </div>
        </section>
      </main>
    </div>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
