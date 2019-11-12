// @flow

import React from 'react';
import Img from 'gatsby-image';
import { Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { targetBlank } from '../../layouts/utils';

// eslint-disable-next-line import/prefer-default-export
export const PartnerCard = (props: {
  logo?: Object,
  firmName: string,
  email: string,
  website: string
}) => {
  const { logo, firmName, email, website } = props;
  return (
    <div className="col-12 col-md-6 col-lg-4 pb-4" key={firmName} style={{ minHeight: '220px' }}>
      <div className="top-page-feature-card card border shadow-8 text-center">
        <div className="row m-auto align-content-center">
          <Img className="fit-cover" {...logo} alt={firmName} />
        </div>

        <div className="row m-auto align-content-center">
          <p className="m-2">{firmName}</p>
        </div>

        <div className="d-flex justify-content-between pb-2">
          <a
            className="align-self-center"
            href={`mailto:${email}?subject=Inquiry from Ledgy Partner Page`}
            {...targetBlank}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <Trans>Email</Trans>
          </a>
          <a href={website} {...targetBlank}>
            <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
            Website
          </a>
        </div>
      </div>
    </div>
  );
};
