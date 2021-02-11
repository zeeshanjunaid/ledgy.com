import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export const Section = ({
  children,
  className = '',
  smallPadding = false,
  ...props
}: { children: ReactNode; smallPadding?: boolean } & DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>) => (
  <section
    {...props}
    className={`py-${smallPadding ? 2 : 4} py-lg-${smallPadding ? 4 : 7} ${className}`}
  >
    <div className="container my-0 my-md-4">{children}</div>
  </section>
);
