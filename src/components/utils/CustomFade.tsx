import React, { ReactNode } from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import type { RevealProps } from 'react-awesome-reveal/dist/Reveal';
import { Keyframes } from '@emotion/serialize';
import { isBrowser, isMobile } from '../../helpers';

export const CustomFade = ({
  children,
  translate,
  ...props
}: { children: ReactNode; translate?: string } & RevealProps) => {
  const defaultAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(${translate || '0, 0'});
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
  const AnimatedJSXElement = (animation: Keyframes) => {
    return (
      <Reveal keyframes={animation} {...props}>
        {children}
      </Reveal>
    );
  };
  if (isBrowser) {
    const noAnimation = keyframes``;
    const animation = isMobile ? noAnimation : defaultAnimation;
    return AnimatedJSXElement(animation);
  }

  return AnimatedJSXElement(defaultAnimation);
};
