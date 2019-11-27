// @flow

import React from 'react';

export const Embed = ({ src, title }: {| src: string, title: string |}) => (
  <div className="py-6">
    <iframe
      title={title}
      className="embed mx-auto d-block"
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);
