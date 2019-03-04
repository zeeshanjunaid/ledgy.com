// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';

import { Title } from '../layouts/utils';

const PostLink = ({ post }) => (
  <div>
    <Link to={post.fields.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
);

export default withI18n()(({ i18n, data }: Props) => (
  <div>
    <Title title={i18n.t`Blog`} description={i18n.t``} />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Blog</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>

    <main className="main-content">
      <section className="section">
        <div className="container">
          <header className="section-header">
            <p>
              <Trans>Articles</Trans>
            </p>
          </header>
        </div>

        <div className="container container-small">
          {data.allMdx.edges.map(edge => (
            <PostLink key={edge.node.id} post={edge.node} />
          ))}
        </div>
      </section>
    </main>
  </div>
));

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
