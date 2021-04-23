import React from 'react';

import { LongText } from './markdown';
import { Section } from './utils';

export const LongTextComponent = ({
  isWide,
  content,
  prefix,
}: { prefix: string } & LongTextComponentProps) => {
  return (
    <Section>
      <LongText content={content} prefix={prefix} isWideMarkdown={isWide} />
    </Section>
  );
};
