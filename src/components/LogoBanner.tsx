import React from 'react';

import { Section } from './Section';
import { CustomFade } from './CustomFade';
import { Image } from './Image';

const Logo = ({ logo, index }: { logo: Image; index: number }) => (
  <CustomFade delay={index * 100} className="col-12 col-sm-6 col-md-4 col-xl-2 my-2">
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '70px' }}>
      <Image image={logo} />
    </div>
  </CustomFade>
);

export const LogoBanner = ({
  logos,
  smallPadding = false,
}: LogoBannerProps & { smallPadding?: boolean }) => (
  <Section className="bg-lightest" smallPadding={smallPadding}>
    <div className="row align-items-center justify-content-around">
      {logos.map((logo, index) => (
        <Logo logo={logo} key={`logo-banner-${logo.title}`} index={index} />
      ))}
    </div>
  </Section>
);
