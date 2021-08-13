import React from 'react';
import { Button, DynamicTrans } from '.';

export const ButtonGroup = ({ buttonNames }: { buttonNames: string[] }) => (
  <div className="d-flex justify-content-between mb-6">
    {buttonNames.map((buttonName) => (
      <div key={buttonName}>
        <Button className="button-wide mb-6">
          <DynamicTrans>{buttonName}</DynamicTrans>
        </Button>
      </div>
    ))}
  </div>
);
