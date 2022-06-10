import React, { ReactNode } from "react";

import { BlogCard } from "./BlogCard";
import Img from "gatsby-image";
import { graphql } from "gatsby";

export const ContentBody = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => <div className="container">{children}</div>;

export const PostLink = ({
  post,
  to,
  description,
  prefix,
  isExternal = false,
  showImage = true,
}: Prefix & {
  post: ContentfulPageProps;
  to: string;
  description: string | ReactNode;
  isExternal?: boolean;
  showImage?: boolean;
}) => {
  const { childImageSharp } = post.cover?.localFile || {};
  const image = childImageSharp ? (
    <Img className="fit-cover" {...childImageSharp} />
  ) : null;

  const title = <h5>{post.title}</h5>;
  const { date } = post;
  return (
    <BlogCard
      title={title}
      type="blog"
      description={description}
      date={date}
      to={to}
      image={image}
      isExternal={isExternal}
      prefix={prefix}
      showImage={showImage}
    />
  );
};

export const CoverImageFragment = graphql`
  fragment CoverImage on ImageSharp {
    fluid(maxWidth: 375, maxHeight: 240, cropFocus: CENTER) {
      ...GatsbyImageSharpFluid
    }
  }
  fragment DefaultCover on Query {
    ledgy: imageSharp(fluid: { originalName: { regex: "/ledgy.png/" } }) {
      ...CoverImage
    }
  }
`;

export const PublishDate = ({ date }: { date?: string }) =>
  date ? (
    <div className="d-flex py-4 justify-content-center">
      <div className="markdown-width">
        <small>{date}</small>
      </div>
    </div>
  ) : null;
