// @flow

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Image, Lead } from '../components/Markdown';

export const MarkdownContent = ({ content }: {| content: Mdx |}) => (
  <div className="markdown clearfix">
    {content && (
      <MDXProvider components={{ img: Image, Lead }}>
        <MDXRenderer>{content.childMdx.body}</MDXRenderer>
      </MDXProvider>
    )}
  </div>
);
