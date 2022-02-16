import React, { ReactNode } from 'react';
import { appUrl, trackClick } from '../../helpers';

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
  const text = 'Get Started for Free';

  const link = (
    <div
      className="pt-2 d-block w-100"
      onClick={() => trackClick('getStartedLink', { text, url: redirectTo })}
    >
      <LinkWithChevron text={text} to={redirectTo} prefix={''}></LinkWithChevron>
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
      smallPadding
    />
  );
};
