import React from 'react';
import { ComponentPicker } from './ComponentPicker';

export const RegionalComponentPicker = ({
  regionalPicker,
  ...baseProps
}: Prefix & Region & { regionalPicker: RegionalComponentPickerProps }) => {
  const { region } = baseProps;
  const { entries } = regionalPicker;
  const regionalEntry = entries[region] || entries['global'];
  return <ComponentPicker {...baseProps} entry={regionalEntry} />;
};
