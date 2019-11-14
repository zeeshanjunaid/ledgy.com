// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import { faCompass, faChartLine, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import ReadMore from '../ReadMore';

const readMoreWrapperClasses = 'col-10 offset-1 col-md-8 offset-md-2 col-lg-4 offset-lg-0';
const ulClasses = 'width-fit-content text-left pb-0 mb-0 mx-auto';

// eslint-disable-next-line import/prefer-default-export
export const UniqueSellingPropositions = (props: Props) => (
  <div className="container pt-6 pb-4">
    <h5 className="mt-6 text-center">
      <Trans>The Smoothest Experience for Startups and Lawyers</Trans>
    </h5>
    <div className="row gap-y text-center my-5">
      <div className={readMoreWrapperClasses}>
        <ReadMore
          icon={faCompass}
          title="Single source of truth"
          subtitle={
            <ul className={ulClasses}>
              <li>
                <Trans>Always up-to-date cap table</Trans>
              </li>
              <li>
                <Trans>Track change history</Trans>
              </li>
              <li>
                <Trans>Report to investors</Trans>
              </li>
            </ul>
          }
          url={`${props.prefix}/features/captable`}
        />
      </div>

      <div className={readMoreWrapperClasses}>
        <ReadMore
          icon={faChartLine}
          title="Powerful modeling insights"
          subtitle={
            <ul className={ulClasses}>
              <li>
                <Trans>Flexible and accurate fundraising round modeling</Trans>
              </li>
              <li>
                <Trans>Waterfall and breakpoint analysis</Trans>
              </li>
            </ul>
          }
          url={`${props.prefix}/features/modeling`}
        />
      </div>

      <div className={readMoreWrapperClasses}>
        <ReadMore
          icon={faDollarSign}
          title="Faster due diligence"
          subtitle={
            <ul className={ulClasses}>
              <li>
                <Trans>Intuitive and searchable history</Trans>
              </li>
              <li>
                <Trans>Legal documents organized by transactions</Trans>
              </li>
            </ul>
          }
          url={`${props.prefix}/features/esop`}
        />
      </div>
    </div>
  </div>
);
