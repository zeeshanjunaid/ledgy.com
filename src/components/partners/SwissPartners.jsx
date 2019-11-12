// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import { PartnerCard } from './PartnerCard';

// eslint-disable-next-line import/prefer-default-export
export const SwissPartners = (props: Props) => (
  <div className="container py-6">
    <h5 className="text-center pb-4">
      <Trans>Swiss Law Partners</Trans>
    </h5>
    <div className="d-flex">
      <PartnerCard
        firmName="Kellerhals Carrard"
        logo={props.data.nakd}
        email="nadia.rainone@kellerhals-carrard.ch"
        website="http://kellerhals-carrard.ch"
      />
      <PartnerCard
        firmName="Smartup"
        logo={props.data.nakd}
        email="walder@smartuplaw.ch"
        website="http://smartuplaw.ch"
      />
      <PartnerCard
        firmName="Lexr"
        logo={props.data.nakd}
        email="contact@lexr.ch"
        website="https://lexr.ch"
      />
    </div>
  </div>
);
