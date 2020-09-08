// @flow

import React from 'react';

export const Embed = ({
  src,
  title,
  wrapperClassName,
  className,
}: {|
  src: string,
  title: string,
  wrapperClassName?: string,
  className?: string,
|}) => (
  <div className={wrapperClassName || 'py-6'}>
    <iframe
      title={title}
      className={`mx-auto d-block ${className || 'embed-default'}`}
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);
