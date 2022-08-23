import React from 'react';
import { Trans } from '@lingui/macro';

import { Accordion, AccordionItem } from './Accordion';

type FaqQuestion = { slug: string; question: JSX.Element; answer: JSX.Element };

export const FAQs = ({ questions }: { questions: FaqQuestion[] }) => (
  <div className="row-small mx-auto my-6">
    <h2 className="text-center">
      <Trans>FAQs</Trans>
    </h2>
    <Accordion>
      {questions.map(({ slug, question, answer }) => (
        <AccordionItem id={slug} key={slug} title={question}>
          {answer}
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);
