import React, { ReactNode } from 'react';
import { appUrl } from '../../helpers';

import { TopBannerLayout } from '../TopBannerLayout';

import { LinkWithChevron } from '../utils';

export const ExtraLinkTopBanner = ({
  title,
  subtitle,
  buttonOne,
  buttonTwo,
  componentRight,
}: {
  title: JSX.Element;
  subtitle: JSX.Element;
  buttonOne?: ReactNode;
  buttonTwo?: ReactNode;
  componentRight: ReactNode;
}) => {
  const redirectTo = appUrl + '/signup';

  const link = (
    <div className="pt-4 d-block w-100">
      <LinkWithChevron text={'Get Started for Free'} to={redirectTo} prefix={''}></LinkWithChevron>
    </div>
  );

  return (
    <TopBannerLayout
      title={title}
      subtitle={subtitle}
      buttonOne={buttonOne}
      buttonTwo={buttonTwo}
      buttonThree={link}
      componentRight={componentRight}
    />
  );
};
