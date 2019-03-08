// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { Title, ChevronRight } from '../layouts/utils';

type PostProps = {|
  id: string,
  fields: {| slug: string |},
  excerpt: string,
  frontmatter: {| date: string, title: string, coverImage: ?Object |}
|};

const PostLink = ({
  post,
  prefix,
  defaultImage
}: {
  post: PostProps,
  prefix: string,
  defaultImage: Object
}) => {
  const to = `${prefix}${post.fields.slug}`;
  return (
    <div className="card hover-shadow-5 bg-pale-secondary mb-5">
      <div className="row">
        <div className="col-md-3">
          <Link href to={to}>
            <Img
              className="fit-cover"
              {...(post.frontmatter.coverImage || {}).childImageSharp || defaultImage}
            />
          </Link>
        </div>
        <div className="col-md-9 p-5">
          <div className="row mb-4 mr-0">
            <div className="col-md-10">
              <Link href to={to}>
                <h5>{post.frontmatter.title}</h5>
              </Link>
            </div>
            <small className="col-md-2 text-md-right text-muted">{post.frontmatter.date}</small>
          </div>
          <p className="mb-0">{post.excerpt}</p>
          <Link className="small ml-auto" href to={to}>
            <Trans>Read more</Trans>
            <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withI18n()(({ i18n, data, prefix }: Props) => (
  <div>
    <Title
      title={i18n.t`Blog`}
      description={i18n.t`Thoughts on cap tables, financing rounds, and legal issues around running and managing a startup.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>The Ledgy Blog</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>

    <main className="main-content">
      <section className="section">
        <div className="container">
          {data.allMdx.edges.map(edge => (
            <PostLink
              key={edge.node.id}
              post={edge.node}
              defaultImage={data.ledgy}
              prefix={prefix}
            />
          ))}
        </div>
      </section>
    </main>
  </div>
));

export const pageQuery = graphql`
  fragment CoverImage on ImageSharp {
    fluid(maxWidth: 200, maxHeight: 200, cropFocus: CENTER) {
      ...GatsbyImageSharpFluid
    }
  }
  query {
    ledgy: imageSharp(fluid: { originalName: { regex: "/ledgy.png/" } }) {
      ...CoverImage
    }
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
            coverImage {
              publicURL
              childImageSharp {
                ...CoverImage
              }
            }
          }
        }
      }
    }
  }
`;
