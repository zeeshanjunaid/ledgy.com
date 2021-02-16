import React, { ReactNode } from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import type { RevealProps } from 'react-awesome-reveal/dist/Reveal';

export const CustomFade = ({
  children,
  translate,
  ...props
}: { children: ReactNode; translate?: string } & RevealProps) => {
  const animation = keyframes`
  from {
    opacity: 0;
    transform: translate(${translate || '0, 0'});
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

  return (
    <Reveal keyframes={animation} {...props}>
      {children}
    </Reveal>
  );
};
