// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import { graphql } from 'gatsby';

export type AuthorProps = {|
  name: string,
  role: string,
  description: Node,
  twitter: string,
  linkedIn: string,
  mail: string
|};

export const team: { [string]: AuthorProps } = {
  timo: {
    name: 'Timo Horstschaefer',
    role: 'Co-Founder & CTO',
    description: (
      <Trans>
        Coding since high school, Timo got an award for the best master thesis in computer science
        and worked one year as a computer engineer in robotics
      </Trans>
    ),
    twitter: 'https://twitter.com/thrstschfr',
    linkedIn: 'https://www.linkedin.com/in/timohorstschaefer/',
    mail: 'timo@ledgy.com'
  },
  yoko: {
    name: 'Yoko Spirig',
    role: 'Co-Founder & CPO',
    description: (
      <Trans>
        Yoko graduated from ETH and Oxford and was president of Swissloop, enabling the team to win
        the 3rd price at the SpaceX Hyperloop competition
      </Trans>
    ),
    twitter: 'https://twitter.com/YokoSpirig',
    linkedIn: 'https://www.linkedin.com/in/yokospirig/',
    mail: 'yoko@ledgy.com'
  },
  ben: {
    name: 'Ben Brandt',
    role: 'Co-Founder & CEO',
    description: (
      <Trans>
        Ben has extensive experience in project management and has worked for two years as
        software-engineer in an ETH research group
      </Trans>
    ),
    twitter: 'https://twitter.com/bebinoy',
    linkedIn: 'https://www.linkedin.com/in/ben-elias-brandt-680a95110/',
    mail: 'ben@ledgy.com'
  },
  oriol: {
    name: 'Oriol Vidal-Cortes',
    role: 'Developer & First employee',
    description: (
      <Trans>
        Oriol has a background in biotechnology and is passionate about any code-related matter,
        especially front-end development
      </Trans>
    ),
    twitter: 'https://twitter.com/ovcOS89',
    linkedIn: 'https://www.linkedin.com/in/oriol-vidal-cortes-37584080/',
    mail: 'oriol@ledgy.com'
  },
  jules: {
    name: 'Jules Henze',
    role: 'Developer & Paragliding Pilot',
    description: (
      <Trans>
        During his studies in engineering as an excellent scholar at ETH Zurich, Jules started
        working as a software developer building web applications
      </Trans>
    ),
    twitter: 'https://twitter.com/HenzeJules',
    linkedIn: 'https://ch.linkedin.com/in/jules-henze',
    mail: 'jules@ledgy.com'
  }
};

export const TeamFragment = graphql`
  fragment TeamFragment on Query {
    ben: imageSharp(fluid: { originalName: { regex: "/ben.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    yoko: imageSharp(fluid: { originalName: { regex: "/yoko.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    timo: imageSharp(fluid: { originalName: { regex: "/timo.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    oriol: imageSharp(fluid: { originalName: { regex: "/uri.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    jules: imageSharp(fluid: { originalName: { regex: "/jules.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
