import React, { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { DynamicTrans } from '../utils';

export type AuthorProps = {
  name: string;
  role: string;
  description: ReactNode;
  profileImage: ProfileImageProps;
  gif: LedgistaGif;
  linkedIn: string;
  twitter?: string;
  article?: string;
};
export type LedgistaGif = {
  file: FileUrl;
};
export type FileUrl = {
  url: string;
};
export type ProfileImageProps = {
  gatsbyImageData: GatsbyImageData;
};
export type GatsbyImageData = {
  images: GatsbyImages;
};
export type GatsbyImages = {
  fallback: GatsbyImageFallback;
};
export type GatsbyImageFallback = {
  src: string;
  srcSet: string;
};

export const getTeamData = (): {
  [key: string]: AuthorProps;
} => {
  const ledgistas: Record<string, string>[] = useStaticQuery(graphql`
    query {
      allContentfulLedgista {
        nodes {
          key
          name
          role
          gif {
            file {
              url
            }
          }
          profileImage {
            gatsbyImageData
          }
          description
          twitter
          linkedIn
          article
        }
      }
    }
  `).allContentfulLedgista.nodes;

  const team = Object.fromEntries(
    ledgistas.map(
      ({ key, name, description, article, role, linkedIn, twitter, profileImage, gif }) => [
        key,
        {
          name,
          description: <DynamicTrans>{description}</DynamicTrans>,
          role,
          article,
          profileImage,
          gif,
          linkedIn: `https://linkedin.com/in/${linkedIn}/`,
          ...(twitter ? { twitter: `https://twitter.com/${twitter}` } : {}),
        },
      ]
    )
  );

  return team;
};
