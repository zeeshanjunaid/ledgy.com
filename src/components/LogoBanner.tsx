import React from 'react';
import Img from 'gatsby-image';

import { Section } from './Section';
import { CustomFade } from './CustomFade';

const Logo = ({ logo, index }: { logo: Image; index: number }) => {
  const { childImageSharp } = logo?.localFile || {};
  return (
    <CustomFade delay={index * 100} className="col-12 col-sm-6 col-md-4 col-xl-2 my-2">
      {!!childImageSharp && (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: '70px' }}
        >
          <Img {...childImageSharp} />
        </div>
      )}
    </CustomFade>
  );
};

export const LogoBanner = ({
  logos,
  smallPadding = false,
}: LogoBannerProps & { smallPadding?: boolean }) => (
  <Section className="bg-lightest" smallPadding={smallPadding}>
    <div className="row align-items-center justify-content-around">
      {logos.map((v, i) => (
        <Logo logo={v} key={`logo-banner-${v.title}`} index={i} />
      ))}
    </div>
  </Section>
);
