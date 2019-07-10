// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import { graphql } from 'gatsby';
import { targetBlank } from './utils';

export type AuthorProps = {|
  name: string,
  role: string,
  description: Node,
  twitter: string,
  linkedIn: string,
  mail: string
|};

export const getWholeTeam = (props: Props): { [string]: AuthorProps } => ({
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
  },
  marius: {
    name: 'Marius Colacioiu',
    role: 'Developer & Trail Runner',
    description: (
      <Trans>
        Marius has a background in computer science, graduated from Milan University and worked as a
        lead developer at XING and On
      </Trans>
    ),
    twitter: 'https://twitter.com/colmarius',
    linkedIn: 'https://www.linkedin.com/in/mariuscolacioiu',
    mail: 'marius@ledgy.com'
  },
  jahlela: {
    name: 'Jahlela Hasle',
    role: 'Developer & Neuroscientist',
    description: (
      <Trans>
        Jahlela has a background in cognitive neuroscience, graduated from UC Berkeley, and founded
        a few startups before switching to full-time software engineering
      </Trans>
    ),
    twitter: 'https://twitter.com/jahlela',
    linkedIn: 'https://www.linkedin.com/in/jahlelahasle',
    mail: 'jahlela@ledgy.com'
  },
  spela: {
    name: 'Špela Prijon',
    role: 'Developer & Neuroscientist',
    description: (
      <Trans>
        Špela found her passion for business development through her experiences co-founding a startup, and later as an early employee at a SaaS company. She holds a Waldorf teaching diploma, and a Master's degree in Pharmacy.
      </Trans>
    ),
    twitter: 'https://twitter.com/jahlela',
    linkedIn: 'https://www.linkedin.com/in/jahlelahasle',
    mail: 'jahlela@ledgy.com'
  },
  luna: {
    name: 'Luna',
    role: 'Rocket & Trailblazer',
    description: (
      <Trans>
        Luna is a model of the Saturn V rocket, which has been to space 13 times, and holds the
        record for largest payload to low Earth orbit. She’s still under construction —{' '}
        <a href={`${props.prefix}/jobs/`} {...targetBlank}>
          Ready to help?
        </a>
      </Trans>
    ),
    twitter: 'https://twitter.com/hashtag/saturnv',
    linkedIn: 'https://www.linkedin.com/company/nasa',
    mail: 'contact@ledgy.com'
  }
});

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
    marius: imageSharp(fluid: { originalName: { regex: "/marius.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    jahlela: imageSharp(fluid: { originalName: { regex: "/jahlela.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    spela: imageSharp(fluid: { originalName: { regex: "/spela.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    luna: imageSharp(fluid: { originalName: { regex: "/luna.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
