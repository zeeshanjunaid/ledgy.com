// @flow

import Img from 'gatsby-image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faMoneyBillAlt,
  faUserFriends,
  faIndustry,
  faSeedling
} from '@fortawesome/free-solid-svg-icons';

import { MarkdownContent } from '../MarkdownContent';

export const CompanyContent = ({ company }: {| company: Company |}) => (
  <div className="company-content sticky-top p-5">
    <Img className="fit-cover mx-auto company-content-logo" {...company.logo} />
    <div className="container">
      <MarkdownContent content={company.mainQuote} className="mb-0 font-italic blockquote" />
      <div className="company-content-contact mb-2">
        <div className="row mx-auto">
          <strong>{company.contactName}</strong>
        </div>
        <div className="row mx-auto">{company.contactTitle}</div>
      </div>
      <div className="row mx-auto py-3">
        <FontAwesomeIcon
          fixedWidth
          size="lg"
          icon={faClock}
          title="Founded year"
          className="mr-4"
        />
        Founded in {company.yearFounded}
      </div>
      <div className="row mx-auto py-3">
        <FontAwesomeIcon
          fixedWidth
          size="lg"
          icon={faMoneyBillAlt}
          title="Funding"
          className="mr-4"
        />
        {company.funding} in Funding
      </div>
      <div className="row mx-auto py-3">
        <FontAwesomeIcon
          fixedWidth
          size="lg"
          icon={faUserFriends}
          title="Employees count"
          className="mr-4"
        />
        {company.employeeCount} Employees
      </div>
      <div className="row mx-auto py-3">
        <FontAwesomeIcon fixedWidth size="lg" icon={faIndustry} title="Sector" className="mr-4" />
        {company.sector}
      </div>
      <div className="row mx-auto py-3">
        <FontAwesomeIcon fixedWidth size="lg" icon={faSeedling} title="Stage" className="mr-4" />
        {company.stage}
      </div>
    </div>
  </div>
);
