import React from 'react';
import { Icon } from '../../utils';

import { BenefitProps } from '../types';

export const WorkBenefit = ({ icon, title, subtitle }: BenefitProps) => {
  return (
    <div className=" my-2  col-md-6 col-lg-4">
      <div className="m-4 py-2 px-4">
        <Icon icon={icon} />
        <h2 className="benefit-title mt-2">{title}</h2>
        {subtitle && <p className="benefit-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};
