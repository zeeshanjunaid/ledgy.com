import React from 'react';
import { Button, DynamicTrans } from '.';

export const ButtonGroup = ({
  buttonTexts,
  onClick,
  tag,
}: {
  buttonTexts: string[];
  onClick: (arg: string) => void;
  tag: string;
}) => (
  <div className="d-flex justify-content-between mb-6">
    {buttonTexts.map((buttonText) => (
      <div key={buttonText}>
        <Button
          className={`button-tag mb-4  ${tag === buttonText ? 'selected' : ''}`}
          onClick={() => onClick(buttonText)}
        >
          <DynamicTrans>{buttonText}</DynamicTrans>
        </Button>
      </div>
    ))}
  </div>
);
