import React from 'react';
import { AboutUs } from './AboutUs';

export const StaticBlockPicker = ({ block, prefix }: StaticBlockProps & { prefix: string }) => {
  if (!block) return null;
  switch (block) {
    case 'teamMembers':
      return <AboutUs prefix={prefix} />;
    default:
      throw new Error('static block not recognized');
  }
};
