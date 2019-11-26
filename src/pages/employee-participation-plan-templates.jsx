// @flow

import React from 'react';
import { Trans, withI18n } from '@lingui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { ContentBody } from '../components/Content';
import { HeaderLayout } from '../components/HomePageHeader';
import { targetBlank, appUrl, trackSignup, Title } from '../layouts/utils';
import { TemplateFAQs, Testimonials } from '../components/templates';

const EquityPlans = ({ i18n, data }: Props) => {
  const title = i18n.t`Employee Participation Plan Templates`;
  const description = i18n.t`Get free templates from top Swiss and German law firms for your employee participation plans. Use the Ledgy term sheet guide to easily draft a document with the conditions of your participation plans.`;
  const { siteUrl } = data.site.siteMetadata;
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
      <Title
        title={title}
        description={description}
        thumbnailUrl={`${siteUrl}/banners/equity-plans.png`}
      />
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
      <ContentBody>
        <>
          <Testimonials data={data} />
          <TemplateFAQs />
        </>
      </ContentBody>
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
    rivero: imageSharp(fluid: { originalName: { regex: "/rivero/" } }) {
      fixed(width: 80) {
        ...GatsbyImageSharpFixed
      }
    }
    roomPriceGenie: imageSharp(fluid: { originalName: { regex: "/room-price-genie/" } }) {
      fixed(width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
