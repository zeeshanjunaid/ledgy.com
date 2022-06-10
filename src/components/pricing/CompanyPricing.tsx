import React from 'react';
import { LedgyPricing } from '@ledgy/library-pricing/dist/LedgyPricing';
import { appUrl } from '../../helpers';
import { DynamicTrans, Button } from '../utils';
import { RequestDemoButton } from '../RequestDemoButton';
import { StakeholderDefinition } from '../StakeholderDefinition';

export const CompanyPricing = ({ prefix, region }: Prefix & Region) => (
  <div className="container my-4 my-lg-6">
    <LedgyPricing
      launchPlanButton={
        <Button secondary className="my-2" href={`${appUrl}/signup`}>
          <DynamicTrans>Sign Up</DynamicTrans>
        </Button>
      }
      growthPlanButton={
        <Button className="my-2" href={`${appUrl}/signup`}>
          <DynamicTrans>Start Trial</DynamicTrans>
        </Button>
      }
      scalePlanButton={
        <RequestDemoButton
          prefix={prefix}
          buttonText="Contact Sales"
          buttonClassName="my-2 w-100"
          utm={'scalePricing'}
        />
      }
      enterprisePlanButton={
        <RequestDemoButton
          prefix={prefix}
          buttonText="Contact Sales"
          buttonClassName="my-2 w-100"
          utm={'enterprisePricing'}
        />
      }
      region={region === 'uk' ? 'uk' : 'global'}
      DynamicTrans={DynamicTrans}
    />
    <StakeholderDefinition />
    <hr className="my-8" />
  </div>
);
