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
      <div className="section pb-0">
        <SwissPartners />
        <CollaborationBanner />
        <UniqueSellingPropositions {...props} />
      </div>
      <LawyerCTABanner />
    </main>
  </>
);

export default withI18n()(IndexPage);
