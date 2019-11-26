// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import { CircleBadge } from '../Badge';

export const Instructions = (): Node => {
  return (
    <>
      <div className="row text-center justify-content-between pb-6">
        <h2 className="pb-0">
          <Trans>The fastest way to set up your employee participation plan</Trans>
        </h2>
        <p className="pt-0 w-100">
          <Trans>Made with love and accuracy by Ledgy and our partnering lawyers</Trans>
        </p>
      </div>
      <div>
        <div className="mb-2">
          <CircleBadge>1</CircleBadge>
          <Trans>Sign up for a free account</Trans>
        </div>
        <div className="mb-2">
          <CircleBadge>2</CircleBadge>
          <Trans>
            Our interactive guide will help you understand and select terms for your employee
            participation plan
          </Trans>
        </div>
        <div className="mb-2">
          <CircleBadge>3</CircleBadge>
          <Trans>
            Send your customized template and term sheet to your lawyer — or to one of our trusted
            partners
          </Trans>
        </div>
        <div className="mb-2">
          <CircleBadge>4</CircleBadge>
          <Trans>
            As a bonus, you can keep track of your new employee participation plan and grants in
            Ledgy
          </Trans>
        </div>
      </div>
    </>
  );
};
