// @flow

import Img from 'gatsby-image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Trans } from '@lingui/react';
import sampleSize from 'lodash/sampleSize';

import { MarkdownContent } from '../MarkdownContent';

export const CompanyContent = ({ company }: {| company: Company |}) => {
  console.log({ company });
  return (
    <div className="company-content">
      <Img className="fit-cover mx-auto company-content-logo" {...company.logo} />
      <div className="container">
        <div className="row mx-1">
          <MarkdownContent content={company.mainQuote} className="company-content-quote blockquote" />
        </div>
        <div className="company-content-contact mb-2">
          <div className="row mx-auto"><strong>{company.contactName}</strong></div>
          <div className="row mx-auto">{company.contactTitle}</div>
        </div>
        <div className="row mx-auto py-4">
          <FontAwesomeIcon icon={faClock} title="Founded year" className="mr-2" />
          Founded in {company.yearFounded}
        </div>
        <div className="row mx-auto py-4">
          <FontAwesomeIcon icon={faClock} title="Funding" className="mr-2" />
          {company.funding} in Funding
        </div>
        <div className="row mx-auto py-4">
          <FontAwesomeIcon icon={faClock} title="Employees count" className="mr-2" />
          {company.employeeCount} Employees
        </div>
        <div className="row mx-auto py-4">
          <FontAwesomeIcon icon={faClock} title="Sector" className="mr-2" />
          {company.sector}
        </div>
        <div className="row mx-auto py-4">
          <FontAwesomeIcon icon={faClock} title="Stage" className="mr-2" />
          {company.stage}
        </div>
      </div>
    </div>
  );
};
