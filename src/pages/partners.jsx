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

const IndexPage = ({ i18n, ...props }: Props) => (
  <>
    <LawyerHeader i18n={i18n} {...props} />

    <main className="main-content pb-0">
      <div className="section pb-0">
        <SwissPartners />
        <CollaborationBanner />
        <UniqueSellingPropositions />
      </div>
      <LawyerCTABanner />
    </main>
  </>
);

export default withI18n()(IndexPage);
