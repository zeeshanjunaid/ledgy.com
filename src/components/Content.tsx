import React, { ReactNode } from 'react';
import { graphql } from 'gatsby';
import { BlogCard } from './blog';
import Img from 'gatsby-image';

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

export const ContentBody = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <div className="container">{children}</div>
);

export const PostLink = ({
  post,
  to,
  description,
  prefix,
  isExternal = false,
  showImage = true,
  author,
  tags,
}: Prefix & {
  post: ContentfulPageProps | BlogProps;
  to: string;
  description: string | ReactNode;
  isExternal?: boolean;
  showImage?: boolean;
  author?: string;
  tags?: string[];
}) => {
  const { childImageSharp } = post.cover?.localFile || {};
  const image = childImageSharp ? <Img className="fit-cover" {...childImageSharp} /> : null;

  const title = <h5>{post.title}</h5>;

  return (
    <BlogCard
      title={title}
      description={description}
      to={to}
      image={image}
      isExternal={isExternal}
      prefix={prefix}
      showImage={showImage}
      author={author}
      tags={tags}
    />
  );
};

export const PublishDate = ({ date }: { date?: string }) =>
  date ? (
    <div className="d-flex py-4 justify-content-center">
      <div className="markdown-width">
        <small>{date}</small>
      </div>
    </div>
  ) : null;
