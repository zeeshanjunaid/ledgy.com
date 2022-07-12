import React, { ReactNode } from 'react';
import { graphql } from 'gatsby';
import { BlogCard } from './blog';
import Img from 'gatsby-image';
import { AuthorProps } from './teamMembers';

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

const isCustomerStory = (post: PostProps): post is CustomerStoryProps => 'company' in post;

export const ContentBody = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <div className="container">{children}</div>
);

export const PostLink = ({
  post,
  to,
  description,
  author,
  prefix,
  isExternal = false,
  showImage = true,

  tags,
}: Prefix & {
  post: PostProps;
  to: string;
  description: string | ReactNode;
  author?: AuthorProps;
  isExternal?: boolean;
  showImage?: boolean;
  tags?: string[];
}) => {
  const localFile = isCustomerStory(post) ? post.company.logo.localFile : post.cover?.localFile;
  const { childImageSharp } = localFile || {};
  const image = childImageSharp ? <Img className="fit-cover flex-1" {...childImageSharp} /> : null;

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
