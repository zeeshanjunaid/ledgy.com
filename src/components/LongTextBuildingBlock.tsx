import React from 'react';

import { LongText } from './markdown';
import { Section } from './utils';

export const LongTextBuildingBlock = ({
  width,
  longTextContent,
  prefix,
}: { prefix: string } & LongTextBuildingBlockProps) => {
  const isWideMarkdown = width === 'Wide';
  return (
    <Section>
      <LongText content={longTextContent} prefix={prefix} isWideMarkdown={isWideMarkdown} />
    </Section>
  );
};
