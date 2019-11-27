// @flow

import React from 'react';
import { Trans, withI18n } from '@lingui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { ContentBody } from '../components/Content';
import { HeaderLayout } from '../components/HomePageHeader';
import { targetBlank, appUrl, trackSignup, Title } from '../layouts/utils';
import {
  TemplateFAQs,
  Testimonials,
  Instructions,
  CallToAction,
  SignaturesComingSoon
} from '../components/templates';
import { ProductHuntButton } from '../components/ProductHuntButton';

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
    text: <Trans>Get started</Trans>
  };
  const productHuntLaunchButton = (
    <ProductHuntButton
      productHuntLink="https://www.producthunt.com/posts/startup-fundraising-calculator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-startup-fundraising-calculator"
      trackSignupKey="clickProductHuntESOP"
      altText="Free Employee Participation Plan Templates - Using Ledgy! | Product Hunt Embed"
    />
  );
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
        customButton={productHuntLaunchButton}
        image={
          <div id="mac-templates" data-aos="fade-up">
            <Img {...data.templates} alt="Templates" />
          </div>
        }
      />
      <ContentBody>
        <>
          <Instructions />
          <CallToAction />
          <Testimonials data={data} />
          <TemplateFAQs />
          <SignaturesComingSoon data={data} />
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
    signatures: imageSharp(fluid: { originalName: { regex: "/signatures-coming-soon.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    bakertilly: imageSharp(fluid: { originalName: { regex: "/bakertilly/" } }) {
      fixed(width: 200) {
        ...GatsbyImageSharpFixed
      }
    }
    reck: imageSharp(fluid: { originalName: { regex: "/reck/" } }) {
      fixed(width: 100) {
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
