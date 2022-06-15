import React, { ReactNode } from 'react';
import { PHEmployeeCompensationButton } from '../productHuntButtons';
import { TopBannerLayout } from './TopBannerLayout';

export const ProductHuntTopBanner = ({
  title,
  subtitle,
  buttonOne,
  componentRight,
}: {
  title: JSX.Element;
  subtitle: JSX.Element;
  buttonOne?: ReactNode;
  componentRight: ReactNode;
}) => {
  return (
    <TopBannerLayout
      title={title}
      subtitle={subtitle}
      buttonOne={buttonOne}
      buttonTwo={<PHEmployeeCompensationButton />}
      componentRight={componentRight}
      smallPadding
    />
  );
};
