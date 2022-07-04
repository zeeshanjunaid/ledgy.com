import React from 'react';
import { ComponentPicker } from './ComponentPicker';

export const RegionalComponentPicker = ({
  regionalPicker,
  ...baseProps
}: Prefix & Region & { regionalPicker: RegionalComponentPickerProps }) => {
  const { region } = baseProps;
  const { entries } = regionalPicker;
  const isAcceptedRegion = region !== 'us';
  const regionalEntry = isAcceptedRegion && entries[region];
  return <ComponentPicker {...baseProps} entry={regionalEntry || entries['global']} smallPadding />;
};
