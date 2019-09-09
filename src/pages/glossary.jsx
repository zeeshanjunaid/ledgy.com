// @flow

import React from 'react';
import { withI18n } from '@lingui/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { ContentHeader, ContentBody } from '../components/Content';
import { Title } from '../layouts/utils';

export default withI18n()(({ i18n, data }: Props) => {
  return (
    <div>
      <Title
        title={i18n.t`Glossary`}
        description={i18n.t`Definitions for industry terms relating to cap tables, financing rounds, and legal topics for startups.`}
      />

      <ContentHeader heading={i18n.t`Glossary`} />

      <ContentBody>
        Hello, this is the Glossary!
        {data.allContentfulGlossary.edges.map(edge => {
          const { node } = edge;
          const { title, description } = node;
          return (
            <span key={title}>
              <h1>{title}</h1>
              <MDXProvider>
                <MDXRenderer>{description.childMdx.body}</MDXRenderer>
              </MDXProvider>
            </span>
          );
        })}
      </ContentBody>
    </div>
  );
});

export const pageQuery = graphql`
  query {
    allContentfulGlossary(sort: { order: DESC, fields: [title] }) {
      edges {
        node {
          id
          title
          description {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`;
