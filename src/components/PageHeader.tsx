import React from 'react';

import { Button, CustomFade } from './utils';
import { linkedInIcon, twitterIcon, facebookIcon } from '../img';
import { FACEBOOK, getSocialShareUrl, LINKEDIN, TWITTER } from './lib';

type SocialIconProps = {
  name: string;
  icon: string;
};
const socialNetworks: SocialIconProps[] = [
  { name: LINKEDIN, icon: linkedInIcon },
  { name: FACEBOOK, icon: facebookIcon },
  { name: TWITTER, icon: twitterIcon },
];

export const PageHeader = ({
  title,
  subtitle = '',
  textCenter = false,
  buttonText,
  buttonUrl,
  showShareSection = false,
}: {
  title: string;
  subtitle?: string;
  textCenter?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  showShareSection?: boolean;
}) => {
  return (
    <header className="header-custom bg-lightest text-gray-dark d-flex flex-column justify-content-center mb-4 mb-md-5 mb-lg-7">
      <CustomFade translate="-100px, 0">
        <div className={`container my-4 my-lg-6 my-xl-7 ${textCenter ? 'text-center' : ''}`}>
          <h1>{title}</h1>
          {subtitle && <p className="text-lg">{subtitle}</p>}
          {buttonText && buttonUrl && <Button href={buttonUrl}>{buttonText}</Button>}
          <div>
            {showShareSection &&
              socialNetworks.map(({ name, icon }, ind) => {
                return (
                  <a
                    key={ind}
                    href={getSocialShareUrl({ platform: name })}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={icon} alt={name} className="mx-2 mt-4" height="20px" />
                  </a>
                );
              })}
          </div>
        </div>
      </CustomFade>
    </header>
  );
};
