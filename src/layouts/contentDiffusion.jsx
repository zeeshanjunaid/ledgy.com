// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { ChevronRight, targetBlank } from '../layouts/utils';

export const ContentHeader = ({ heading }: { heading: string }) => (
  <header className="header text-white bg-ledgy">
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>{heading}</h1>
        </div>
      </div>
    </div>
  </header>
);

export const ContentBody = ({ children }: { children: Array<Node> }) => (
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
  external
}: {
  post: Page,
  to: string,
  defaultImage: Object,
  external?: boolean
}) => {
  return (
    <div className="card hover-shadow-5 bg-pale-secondary mb-5">
      <div className="row">
        <div className="col-md-3">
          {external ? (
            <a href={to} {...targetBlank}>
              <Img
                className="fit-cover"
                {...(post.cover ? post.cover.localFile.childImageSharp : defaultImage)}
              />
            </a>
          ) : (
            <Link href to={to}>
              <Img
                className="fit-cover"
                {...(post.cover ? post.cover.localFile.childImageSharp : defaultImage)}
              />
            </Link>
          )}
        </div>
        <div className="col-md-9 p-5">
          <div className="row mb-4 mr-0">
            <div className="col-md-10">
              {external ? (
                <h5>{post.title}</h5>
              ) : (
                <Link href to={to}>
                  <h5>{post.title}</h5>
                </Link>
              )}
            </div>
            <small className="col-md-2 text-md-right text-muted">{post.date}</small>
          </div>
          <p className="mb-0">{post.description}</p>
          {external ? (
            <a className="ml-auto" href={to} {...targetBlank}>
              <small>
                <Trans>See video</Trans>
              </small>
              <ChevronRight />
            </a>
          ) : (
            <Link className="small ml-auto" href to={to}>
              <Trans>Read more</Trans>
              <ChevronRight />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
