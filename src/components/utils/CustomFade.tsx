import React, { ReactNode, useEffect, useState } from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import type { RevealProps } from 'react-awesome-reveal/dist/Reveal';

export const CustomFade = ({
  children,
  translate,
  ...props
}: { children: ReactNode; translate?: string } & RevealProps) => {
  const isBrowser = () => typeof window !== 'undefined';
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
  const AnimatedJSXElement = (
    <Reveal keyframes={animation} {...props}>
      {children}
    </Reveal>
  );
  if (isBrowser()) {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      };
    }, []);
    const isMobile = width <= 768;
    return isMobile ? <>{children}</> : AnimatedJSXElement;
  }

  return AnimatedJSXElement;
};
