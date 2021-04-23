import React from 'react';

import { LongText } from './markdown';
import { Section } from './utils';

export const LongTextComponent = ({
  isWide,
  longTextContent,
  prefix,
}: { prefix: string } & LongTextComponentProps) => (
  <Section>
    <LongText content={longTextContent} prefix={prefix} isWide={isWide} />
  </Section>
);
