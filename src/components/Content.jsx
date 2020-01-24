// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { ChevronRight } from '../layouts/utils';
import { targetBlank } from '../helpers';

export const ContentHeader = ({ title }: {| title: string |}) => (
  <header className="header text-white bg-ledgy">
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  </header>
);

export const ContentBody = ({ children }: {| children: Node | Array<Node> |}) => (
  <main className="main-content">
    <section className="section">
      <div className="container">{children}</div>
    </section>
  </main>
);

export const PostLink = ({
  post,
  to,
  defaultImage,
  external,
  description
}: {|
  post: Page,
  to: string,
  defaultImage: Object,
  external?: boolean,
  description: string | Node
|}) => {
  const image = (
    <Img
      className="fit-cover"
      {...(post.cover ? post.cover.localFile.childImageSharp : defaultImage)}
    />
  );
  const title = <h5>{post.title}</h5>;
  return (
    <div className="card hover-shadow-5 bg-pale-secondary mb-6">
      <div className="row">
        <div className="col-md-3">
          {external ? (
            <a href={to} {...targetBlank}>
              {image}
            </a>
          ) : (
            <Link href to={to}>
              {image}
            </Link>
          )}
        </div>
        <div className="col-md-9 p-5">
          <div className="row h-100 mr-0">
            <div className="col-md-10">
              {external ? (
                title
              ) : (
                <Link href to={to}>
                  {title}
                </Link>
              )}
            </div>
            <small className="col-md-2 text-md-right text-muted">{post.date}</small>
            <div className="col-12">{description}</div>
            <div className="col-12 mt-auto">
              {external ? (
                <a href={to} {...targetBlank}>
                  <Trans>Watch now</Trans>
                  <ChevronRight />
                </a>
              ) : (
                <Link className="small" href to={to}>
                  <Trans>Read more</Trans>
                  <ChevronRight />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CoverImageFragment = graphql`
  fragment CoverImage on ImageSharp {
    fluid(maxWidth: 200, maxHeight: 200, cropFocus: CENTER) {
      ...GatsbyImageSharpFluid
    }
  }
  fragment DefaultCover on Query {
    ledgy: imageSharp(fluid: { originalName: { regex: "/ledgy.png/" } }) {
      ...CoverImage
    }
  }
`;
