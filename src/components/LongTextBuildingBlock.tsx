import React from 'react';

import { Section } from './utils';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const LongTextBuildingBlock = ({
  longTextContent,
}: { prefix: string } & LongTextBuildingBlockProps) => {
  console.log({ longTextContent });
  return (
    <Section>
      <p>hi</p>
      <MDXRenderer>{longTextContent.childMdx.body}</MDXRenderer>
    </Section>
  );
};
