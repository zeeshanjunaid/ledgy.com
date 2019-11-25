// @flow

import React from 'react';
import { Trans, withI18n } from '@lingui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { HeaderLayout } from '../components/HomePageHeader';
import { targetBlank, appUrl, trackSignup, Title } from '../layouts/utils';

const EquityPlans = ({ i18n, data }: Props) => {
  const title = i18n.t`Equity Plan Templates`;
  const description = i18n.t`Get free templates from top Swiss and German law firms for your employee participation plans (ESOP). Use the Ledgy Term Sheet Generator to easily draft a document with the conditions of your participation plans`;
  const buttonOne = {
    props: {
      href: `${appUrl}/templates`,
      onClick: () => trackSignup('clickTemplates'),
      ...targetBlank
    },
    text: <Trans>Get Early Access</Trans>
  };
  return (
    <>
      <Title title={title} description={description} />
      <HeaderLayout
        title={title}
        subtitle={description}
        buttonOne={buttonOne}
        image={
          <div id="mac-templates" data-aos="fade-up">
            <Img {...data.templates} alt="Templates" />
          </div>
        }
      />
    </>
  );
};

export default withI18n()(EquityPlans);

export const PageQuery = graphql`
  query {
    templates: imageSharp(fluid: { originalName: { regex: "/mac-templates.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
