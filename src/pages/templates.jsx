// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { HeaderLayout } from '../components/HomePageHeader';
import { targetBlank, appUrl, trackSignup } from '../layouts/utils';

export default (props: Props) => {
  return (
    <HeaderLayout
      title={<Trans>Employee Participation Plan Templates</Trans>}
      subtitle={
        <Trans>
          Get free templates from top Swiss and German law firms for your employee participation
          plans. Use the Ledgy Term Sheet Generator to easily draft a document with the conditions
          of your participation plans
        </Trans>
      }
      buttonOneProps={{
        href: `${appUrl}/templates`,
        onClick: () => trackSignup('clickTemplates'),
        ...targetBlank
      }}
      buttonOneText={<Trans>Launch Templates</Trans>}
      buttonTwoProps={{ href: `${props.prefix}/templates/esop-vs-psop` }}
      buttonTwoText={<Trans>Learn More</Trans>}
      image={
        <div id="mac-templates" data-aos="fade-up">
          <Img {...props.data.templates} alt="Templates" />
        </div>
      }
    />
  );
};

export const PageQuery = graphql`
  query {
    templates: imageSharp(fluid: { originalName: { regex: "/mac-templates.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
