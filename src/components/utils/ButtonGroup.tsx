import React from 'react';
import { Button, DynamicTrans } from '.';

export const ButtonGroup = ({
  buttonNames,
  setTag,
}: {
  buttonNames: string[];
  setTag: (arg: string) => void;
}) => (
  <div className="d-flex justify-content-between mb-6">
    {buttonNames.map((buttonName) => (
      <div key={buttonName}>
        <Button className="button-wide mb-6" onClick={() => setTag(buttonName)}>
          <DynamicTrans>{buttonName}</DynamicTrans>
        </Button>
      </div>
    ))}
  </div>
);
