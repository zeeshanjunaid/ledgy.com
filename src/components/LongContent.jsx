// @flow

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Image, Lead } from '../components/Markdown';

export const LongContent = ({
  content,
  isMarkdown = true,
  className = ''
}: {|
  content: Mdx,
  isMarkdown?: boolean,
  className?: string
|}) => (
  <div className={`${isMarkdown ? 'markdown clearfix' : ''} ${className}`}>
    {content && (
      <MDXProvider components={{ img: Image, Lead }}>
        <MDXRenderer>{content.childMdx.body}</MDXRenderer>
      </MDXProvider>
    )}
  </div>
);
