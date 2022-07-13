import React from 'react';
import { CustomFade, DynamicTrans, Image, Section } from './utils';

import Marquee from 'react-fast-marquee';

const Logo = ({
  logo,
  index,
  scroll = false,
}: {
  logo: ImageProps;
  index: number;
  scroll?: boolean;
}) => (
  <CustomFade
    delay={index * 100}
    className={scroll ? 'mx-4 px-2' : 'col-12 col-sm-6 col-md-4 col-xl-2 my-2'}
  >
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '70px' }}>
      <Image image={logo} />
    </div>
  </CustomFade>
);

export const LogoBanner = ({
  logos,
  description,
  smallPadding = false,
}: LogoBannerProps & { smallPadding?: boolean }) => {
  const scroll = logos.length != 5;
  const Logos = () => (
    <>
      {logos.map((logo, index) => (
        <Logo logo={logo} key={`logo-banner-${logo.title}`} index={index} scroll={scroll} />
      ))}
    </>
  );

  return (
    <Section className="bg-lightest" smallPadding={smallPadding}>
      {!!description && (
        <div className="text-lg font-weight-light mb-4 text-gray-dark text-center">
          <DynamicTrans>{description}</DynamicTrans>
        </div>
      )}
      <div className="row align-items-center justify-content-around">
        {scroll ? (
          <Marquee speed={60} loop={0}>
            <Logos />
          </Marquee>
        ) : (
          <Logos />
        )}
      </div>
    </Section>
  );
};
