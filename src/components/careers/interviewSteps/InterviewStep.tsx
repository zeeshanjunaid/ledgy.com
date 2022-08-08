import React from 'react';
import { InterviewStepsProps } from '../types';

export const InterviewStep = ({
  stepNumber,
  title,
  body,
  index,
}: InterviewStepsProps & { index: number }) => {
  return (
    <div className={`col-md-6 col-lg-4 interview-step  interview-step-border-${index}`}>
      <div className="m-4 py-2 px-4">
        <h1>{stepNumber}</h1>
        <h2 className="interview-step-title mt-2">{title}</h2>
        {body && <p className="interview-step-body">{body}</p>}
      </div>
    </div>
  );
};
