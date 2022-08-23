// Work benefits

import { BenefitProps, InterviewStepsProps } from './types';

const FLEXIBLEWORK: BenefitProps = {
  icon: 'freelancer',
  title: 'Flexible and remote work set-up',
  subtitle: 'Home and/or co-working possible',
};

const INTERNATIONALWORK: BenefitProps = {
  icon: 'international',
  title: '40 days of remote work from outside your home country',
};

const COMPENSATION: BenefitProps = {
  icon: 'salary',
  title: 'Competitive salary and equity package',
};

const PARENTALLEAVE: BenefitProps = {
  icon: 'baby',
  title: '16 weeks of parental leave for all genders',
};

const WORKEQUIPMENT: BenefitProps = {
  icon: 'desk',
  title: 'Sponsoring of work equipment',
};
const MENTALHEALT: BenefitProps = {
  icon: 'yoga',
  title: 'Mental health & wellbeing platform',
};

const REFERRALPROGRAM: BenefitProps = {
  icon: 'medal',
  title: 'Referral bonus program',
};

const LEARNIGNBUDGET: BenefitProps = {
  icon: 'audioBook',
  title: 'Learning and development budget',
};

const RETREATS: BenefitProps = {
  icon: 'mountain',
  title: 'Regular in-person and remote company off-sites and team retreats',
};

export const BENEFITS: BenefitProps[] = [
  FLEXIBLEWORK,
  INTERNATIONALWORK,
  COMPENSATION,
  PARENTALLEAVE,
  WORKEQUIPMENT,
  MENTALHEALT,
  REFERRALPROGRAM,
  LEARNIGNBUDGET,
  RETREATS,
];

const APPLICATION_REVIEW: InterviewStepsProps = {
  stepNumber: '01 🚀',
  title: 'Application Review',
};

const INITIAL_SCREENING: InterviewStepsProps = {
  stepNumber: '02',
  title: 'Initial Screening / Skills-fit Interview',
  body: 'This is a 30-45 minutes call with a recruiter and/or with a hiring manager. We’ll speak about your background, your strengths & weaknesses, and you’ll get more information on who you will meet in future interviews and the upcoming assessment.',
};

const TAKE_HOME_ASSESSMENT: InterviewStepsProps = {
  stepNumber: '03',
  title: 'Take-Home Assessment',
  body: 'You will have the chance to see our product right away and work on a role- and skills-based assessment. We will review your assessment and provide individual feedback.',
};

const ONE_ON_ONE_INTERVIEWS: InterviewStepsProps = {
  stepNumber: '04',
  title: '1-on-1 Interviews',
  body: 'You will meet several future colleagues, managers and founders for up to 1 hour each. At this stage of the process, the interviews will be mostly conversational.',
};

const REFERENCE_CHECK: InterviewStepsProps = {
  stepNumber: '05',
  title: 'Reference Check',
  body: 'We have an automated reference process in place, which we will use to reach out to two former employers of your choice.',
};
const OFFER: InterviewStepsProps = {
  stepNumber: '06 🏁',
  title: 'Reference Check',
};

export const INTERVIEW_STEPS: InterviewStepsProps[] = [
  APPLICATION_REVIEW,
  INITIAL_SCREENING,
  TAKE_HOME_ASSESSMENT,
  ONE_ON_ONE_INTERVIEWS,
  REFERENCE_CHECK,
  OFFER,
];
