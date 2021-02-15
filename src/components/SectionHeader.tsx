import React from 'react';
import { DynamicTrans } from './DynamicTrans';

export const SectionHeader = ({
  header,
  className = '',
}: {
  header: string;
  className?: string;
}) => (
  <h2 className={`pb-4 ${className}`}>
    <DynamicTrans>{header}</DynamicTrans>
  </h2>
);
