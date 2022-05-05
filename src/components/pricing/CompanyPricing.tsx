import React from 'react';
import { LedgyPricing } from '@ledgy/library-pricing/dist/LedgyPricing';
import { appUrl } from '../../helpers';
import { DynamicTrans, Button } from '../utils';
import { RequestDemoButton } from '../RequestDemoButton';

export const CompanyPricing = ({ prefix }: Prefix) => (
  <div className="container my-4 my-lg-6">
    <LedgyPricing
      launchPlanButton={
        <Button secondary className="my-4" href={`${appUrl}/signup`}>
          <DynamicTrans>Sign Up</DynamicTrans>
        </Button>
      }
      growthPlanButton={
        <Button className="mt-4 mb-1" href={`${appUrl}/signup`}>
          <DynamicTrans>Start Trial</DynamicTrans>
        </Button>
      }
      scalePlanButton={
        <RequestDemoButton
          prefix={prefix}
          buttonText="Contact Sales"
          buttonClassName="my-4 mb-1 w-100"
        />
      }
      enterprisePlanButton={
        <RequestDemoButton
          prefix={prefix}
          buttonText="Contact Sales"
          buttonClassName="my-4 mb-1 w-100"
        />
      }
      DynamicTrans={DynamicTrans}
    />
    <hr className="my-8" />
  </div>
);
