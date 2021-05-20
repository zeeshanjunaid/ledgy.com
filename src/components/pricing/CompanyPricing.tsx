import React from 'react';
import { LedgyPricing } from '@ledgy/pricing/dist/LedgyPricing';
import { appUrl } from '../../helpers';
import { DynamicTrans, Button } from '../utils';
import { RequestDemoButton } from '../RequestDemoButton';

export const CompanyPricing = ({ prefix }: { prefix: string }) => (
  <div className="container my-4 mb-lg-6">
    <LedgyPricing
      launchPlanButton={
        <Button outline inverted className="my-4" href={`${appUrl}/signup`}>
          <DynamicTrans>Sign up</DynamicTrans>
        </Button>
      }
      growthPlanButton={
        <Button outline inverted className="mt-4 mb-1" href={`${appUrl}/signup`}>
          <DynamicTrans>Sign up</DynamicTrans>
        </Button>
      }
      growthPlanText="7-day free trial"
      scalePlanButton={<RequestDemoButton prefix={prefix} buttonClassName="my-4 btn-red" />}
      highlightScalePlan
      DynamicTrans={DynamicTrans}
    />
  </div>
);
