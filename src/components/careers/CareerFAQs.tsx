import { Trans } from '@lingui/macro';
import React from 'react';

import { FAQs } from '../FAQs';
const CAREER_QUESTIONS = [
  {
    slug: 'after-aplication',
    question: <Trans>What can I expect after I have submitted my application?</Trans>,
    answer: (
      <Trans>
        We always aim to respond to your application within 1-2 weeks of your application. We will
        let you know if we invite you for a first interview or if your application does not match
        the profile of what we are looking for at that time.
      </Trans>
    ),
  },
  {
    slug: 'what-to-expect',
    question: <Trans> What can I expect during the interview process?</Trans>,
    answer: (
      <Trans>
        The interview process is generally as described above. Depending on the department and the
        position, there may be adjustments, which we will communicate to you at the beginning of
        your interview process and ensure that you are prepared for it.
      </Trans>
    ),
  },
  {
    slug: 'online-interviews',
    question: <Trans>How are interviews conducted - online or in person? </Trans>,
    answer: (
      <>
        <Trans>
          All interviews are hosted via Zoom. However, if within close proximity, there could be the
          chance to meet with a member of the hiring team in person.
        </Trans>
      </>
    ),
  },
  {
    slug: 'multiple-jobs',
    question: <Trans>Can I apply for more than one Job at the same time?</Trans>,
    answer: (
      <>
        <Trans>
          You are more than welcome to apply for several positions on our website at the same time
          if they match your skills, knowledge and experience. We also encourage you to follow us on
          LinkedIn and Twitter to stay informed about future openings.
        </Trans>
      </>
    ),
  },
  {
    slug: 'feedback',
    question: <Trans>If I am rejected, will I get feedback to improve myself?</Trans>,
    answer: (
      <>
        <Trans>
          It is important for us to give you feedback for your future career path, but due to the
          high volume of applications, we’re not able to provide individual feedback at the initial
          stage. However, once you have completed an interview with us, we will endeavour to provide
          you with constructive advice.
        </Trans>
      </>
    ),
  },
  {
    slug: 'need-a-visa',
    question: <Trans>What If I need a Visa? </Trans>,
    answer: (
      <>
        <Trans>
          Depending on the requirements of the job and the qualifications of the applicant, we may
          sponsor a work visa. We recruit people from different countries and backgrounds and each
          case is treated individually to determine eligibility.
        </Trans>
      </>
    ),
  },
  {
    slug: 'preparations',
    question: <Trans>How can I prepare for the upcoming interview(s)? </Trans>,
    answer: (
      <>
        <Trans>
          The first interview after applying is usually a video call with one of our Talent
          Managers. We want to get to know you better and talk about your background and motivation,
          as well as give you the opportunity to ask questions about the position and Ledgy. While
          you can think about it in advance, it’s our intention to let you be yourself and have an
          exciting conversation together. If you have any questions during the process, we encourage
          you to reach out to the Talent Manager, who will provide you with support and guidance
          throughout the entire process.
        </Trans>
      </>
    ),
  },
];
export const CareerFAQs = () => <FAQs questions={CAREER_QUESTIONS} />;
