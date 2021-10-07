import React, { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { DynamicTrans } from '../utils';

export type AuthorProps = {
  name: string;
  role: string;
  description: ReactNode;
  linkedIn: string;
  twitter?: string;
  article?: string;
};

export const getTeamDescriptions = (): {
  [key: string]: AuthorProps;
} => {
  const ledgistas: Record<string, string>[] = useStaticQuery(graphql`
    query {
      allContentfulLedgista {
        nodes {
          key
          name
          role
          description
          twitter
          linkedIn
          article
        }
      }
    }
  `).allContentfulLedgista.nodes;

  const team = Object.fromEntries(
    ledgistas.map(({ key, name, description, article, role, linkedIn, twitter }) => [
      key,
      {
        name,
        description: <DynamicTrans>{description}</DynamicTrans>,
        role,
        article,
        linkedIn: `https://linkedin.com/in/${linkedIn}/`,
        ...(twitter ? { twitter: `https://twitter.com/${twitter}` } : {}),
      },
    ])
  );

  return team;
};
