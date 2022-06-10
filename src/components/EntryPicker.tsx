import React from 'react';
import { ComponentPicker } from './ComponentPicker';
import { RegionalComponentPicker } from './RegionalComponentPicker';

export const EntryPicker = ({
  entries,
  ...baseProps
}: Region &
  Prefix & {
    entries: MainPageEntryProps[];
  }) => {
  return (
    <>
      {entries.map((entry) => {
        if (entry.__typename === 'ContentfulRegionalComponentPicker') {
          return <RegionalComponentPicker {...baseProps} key={entry.id} regionalPicker={entry} />;
        }
        return <ComponentPicker {...baseProps} key={entry.id} entry={entry} smallPadding />;
      })}
    </>
  );
};
