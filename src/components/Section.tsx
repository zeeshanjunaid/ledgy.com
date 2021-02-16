import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

declare type SectionProps = {
  children: ReactNode;
  smallPadding?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Section = ({
  children,
  className = '',
  smallPadding = false,
  ...props
}: SectionProps) => (
  <section
    {...props}
    className={`py-${smallPadding ? 2 : 4} py-lg-${smallPadding ? 4 : 8} ${className}`}
  >
    <div className="container my-0 my-md-4">{children}</div>
  </section>
);
