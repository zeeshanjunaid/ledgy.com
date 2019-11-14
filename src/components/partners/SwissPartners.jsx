// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import { PartnerCard } from './PartnerCard';

export const SwissPartners = (props: Props) => (
  <div className="container py-6">
    <h5 className="text-center pb-4">
      <Trans>Swiss Law Partners</Trans>
    </h5>
    <div className="row d-flex container justify-content-between">
      <PartnerCard
        logo={props.data.kellerhalsCarrard}
        email="startup-desk@kellerhals-carrard.ch"
        website="http://kellerhals-carrard.ch"
      />
      <PartnerCard
        logo={props.data.smartup}
        email="walder@smartuplaw.ch"
        website="http://smartuplaw.ch"
      />
      <PartnerCard logo={props.data.lexr} email="contact@lexr.ch" website="https://lexr.ch" />
    </div>
  </div>
);
