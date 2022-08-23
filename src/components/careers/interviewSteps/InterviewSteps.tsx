import React from 'react';
import { INTERVIEW_STEPS } from '../constats';
import { Section } from '../../utils';
import { InterviewStep } from './InterviewStep';

export const InterviewSteps = () => (
  <Section>
    <h1 className="ml-4 px-4">Our Interview Process</h1>
    <div className="benefits-section d-flex flex-wrap justify-content-around mt-4 pt-4">
      {INTERVIEW_STEPS.map(({ stepNumber, title, body }, index) => (
        <InterviewStep
          key={index}
          stepNumber={stepNumber}
          title={title}
          body={body}
          index={index}
        />
      ))}
    </div>
  </Section>
);
