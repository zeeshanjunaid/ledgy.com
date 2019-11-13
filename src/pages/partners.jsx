// @flow

import React from 'react';
import { withI18n } from '@lingui/react';
import { graphql } from 'gatsby';

import {
  LawyerCTABanner,
  SwissPartners,
  CollaborationBanner,
  UniqueSellingPropositions,
  LawyerHeader
} from '../components/partners';

const IndexPage = ({ ...props }: Props) => (
  <>
    <LawyerHeader {...props} />
    <main className="main-content pb-0">
      <div className="section py-0">
        <SwissPartners {...props} />
        <CollaborationBanner />
        <UniqueSellingPropositions {...props} />
      </div>
      <LawyerCTABanner />
    </main>
  </>
);

export default withI18n()(IndexPage);

export const pageQuery = graphql`
  query {
    kellerhalsCarrard: imageSharp(fluid: { originalName: { regex: "/kellerhals-carrard.png/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    smartup: imageSharp(fluid: { originalName: { regex: "/smartuplaw.png/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    lexr: imageSharp(fluid: { originalName: { regex: "/lexr.png/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
