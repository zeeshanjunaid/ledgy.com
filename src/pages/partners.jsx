// @flow

import React from 'react';
import { withI18n } from '@lingui/react';

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

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    nakd: imageSharp(fluid: { originalName: { regex: "/nakd/" } }) {
      fixed(width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
