// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';

import { Title, ChevronRight } from '../layouts/utils';

type PostProps = {|
  id: string,
  fields: {| slug: string |},
  excerpt: string,
  frontmatter: {| date: string, title: string |}
|};

const PostLink = ({ post }: { post: PostProps }) => (
  <div className="card hover-shadow-7 bg-pale-secondary mb-5 p-5">
    <div className="row mb-4">
      <div className="col-12 col-md-10">
        <Link href to={post.fields.slug}>
          <h4 className="d-inline">{post.frontmatter.title}</h4>
        </Link>
      </div>
      <div className="col-12 col-md-2 text-muted">{post.frontmatter.date}</div>
    </div>
    <p className="mb-0">{post.excerpt}</p>
    <Link className="small ml-auto" href to={post.fields.slug}>
      Read more
      <ChevronRight />
    </Link>
  </div>
);

export default withI18n()(({ i18n, data }: Props) => (
  <div>
    <Title title={i18n.t`Blog`} description={i18n.t`Blog description TODO`} />

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
    allMdx(
      filter: { fields: { slug: { regex: "/^/blog//" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD MMM YYYY")
            title
          }
        }
      }
    }
  }
`;
