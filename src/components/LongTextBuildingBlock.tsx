import React from 'react';

import { Section } from './utils';
import { LongText } from './markdown';

export const LongTextBuildingBlock = ({
  width,
  longTextContent,
  prefix,
}: { prefix: string } & LongTextBuildingBlockProps) => {
  const isWideMarkdown = width === 'wide';
  return (
    <Section>
      <LongText content={longTextContent} prefix={prefix} isWideMarkdown={isWideMarkdown} />
    </Section>
  );
};
