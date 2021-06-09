import React from 'react';
import { helpUrl, targetBlank } from '../../helpers';
import { DynamicTrans } from '../utils';

export const Emails = () => (
  <div className="col-6 p-0 mb-3 text-nowrap">
    <div className="mb-4">
      <h6>
        <DynamicTrans>Support Questions</DynamicTrans>
      </h6>
      <a href={helpUrl} {...targetBlank} className="kb__text-link">
        <DynamicTrans>Help Center</DynamicTrans>
      </a>
      <br />
      <a href="mailto:support@ledgy.com">support@ledgy.com</a>
    </div>
    <div className="mb-4">
      <h6>
        <DynamicTrans>Sales Inquiries</DynamicTrans>
      </h6>
      <a href="mailto:sales@ledgy.com">sales@ledgy.com</a>
    </div>
    <div>
      <h6>
        <DynamicTrans>General Inquiries</DynamicTrans>
      </h6>
      <a href="mailto:contact@ledgy.com">contact@ledgy.com</a>
    </div>
  </div>
);
