// @flow

import Img from 'gatsby-image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMoneyBillAlt, faUserFriends, faIndustry, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { Trans } from '@lingui/react';
import sampleSize from 'lodash/sampleSize';

import { MarkdownContent } from '../MarkdownContent';

export const CompanyContent = ({ company }: {| company: Company |}) => {
  console.log({ company });
  return (
    <div className="company-content">
      <div className="m-5">
        <Img className="fit-cover mx-auto company-content-logo" {...company.logo} />
        <div className="container">
          <MarkdownContent content={company.mainQuote} className="company-content-quote blockquote" />
          <div className="company-content-contact mb-2">
            <div className="row mx-auto"><strong>{company.contactName}</strong></div>
            <div className="row mx-auto">{company.contactTitle}</div>
          </div>
          <div className="row mx-auto py-4">
            <FontAwesomeIcon fixedWidth icon={faClock} title="Founded year" className="mt-1 mr-2" />
            Founded in {company.yearFounded}
          </div>
          <div className="row mx-auto py-4">
            <FontAwesomeIcon fixedWidth icon={faMoneyBillAlt} title="Funding" className="mt-1 mr-2" />
            {company.funding} in Funding
          </div>
          <div className="row mx-auto py-4">
            <FontAwesomeIcon fixedWidth icon={faUserFriends} title="Employees count" className="mt-1 mr-2" />
            {company.employeeCount} Employees
          </div>
          <div className="row mx-auto py-4">
            <FontAwesomeIcon fixedWidth icon={faIndustry} title="Sector" className="mt-1 mr-2" />
            {company.sector}
          </div>
          <div className="row mx-auto py-4">
            <FontAwesomeIcon fixedWidth icon={faSeedling} title="Stage" className="mt-1 mr-2" />
            {company.stage}
          </div>
        </div>
      </div>
    </div>
  );
};
