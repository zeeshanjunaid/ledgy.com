import {
  isFieldMissing,
  isValidEmail,
  track,
  setDomainCookie,
  identifyOrAlias,
} from '../../../helpers';

import { FormValues, ParsedFormValues } from './formTypes';
import { submitToHubspot } from './hubspot';
import {
  INVESTOR_URL,
  COMPANY,
  INVESTMENT_VALUE,
  DEER_COMPANY_THRESHOLD,
  FUND_INVESTMENT_THRESHOLD,
  SMALL_COMPANY_URL,
  FORM_STATUSES,
  DEMO_REQUEST,
  meetingRequestUrl,
  LARGE_COMPANY_STAKEHOLDER_VALUE,
  MEDIUM_COMPANY_STAKEHOLDER_VALUE,
  SMALL_COMPANY_STAKEHOLDER_VALUE,
} from './constants';

const { INVALID_EMAIL, INVALID_FIELDS, INVALID_SIZE, LOADING, SUBMITTED, FETCH_ERROR } =
  FORM_STATUSES;

const LEAD_STATUS = 'leadStatus';
const IDENTIFIED = 'identified';
const TAG_MANAGER_BIG_COMPANY = 'TagManagerBigCompany';
const TAG_MANAGER_SMALL_COMPANY = 'TagManagerSmallCompany';
const CAPTURE_LEAD = 'captureLead';

const isDeerCompany = (size: number) => size >= DEER_COMPANY_THRESHOLD;
const isFund = (size: number) => size >= FUND_INVESTMENT_THRESHOLD;

const getEmployeeValue = (size: number) => {
  if (size >= 150) return size * LARGE_COMPANY_STAKEHOLDER_VALUE;
  if (size >= 50) return size * MEDIUM_COMPANY_STAKEHOLDER_VALUE;
  return size * SMALL_COMPANY_STAKEHOLDER_VALUE;
};
const getInvestmentValue = (size: number) => {
  if (isFund(size)) return size * INVESTMENT_VALUE;
  return 0;
};

const getPipelineValue = (size: number, isCompany: boolean) =>
  isCompany ? getEmployeeValue(size) : getInvestmentValue(size);

const getUrl = async ({ isCompany, size, email }: ParsedFormValues) => {
  const meetingRequestUrlWithEmail = `${meetingRequestUrl}?email=${email}`;

  const alwaysBook = window.location.hash.includes('#book');
  if (alwaysBook) return meetingRequestUrlWithEmail;

  if (!isCompany) {
    return INVESTOR_URL;
  }
  return isDeerCompany(size) ? meetingRequestUrlWithEmail : SMALL_COMPANY_URL;
};

const redirect = async (values: ParsedFormValues) => {
  if (window) {
    (window as DisableTypeScript).location = await getUrl(values);
  }
};

export const handleDemoSubmit = async ({
  values,
  event,
  pathname,
  setFormStatus,
}: {
  values: FormValues;
  event: React.FormEvent<HTMLFormElement>;
  pathname: string;
  setFormStatus: (arg0: string) => void;
}): Promise<void> => {
  event.preventDefault();
  setFormStatus(LOADING);
  const { requesterType, email, size: sizeString, partner } = values;
  const size = Number(sizeString);
  if (isFieldMissing({ requesterType, sizeString })) {
    setFormStatus(INVALID_FIELDS);
    return;
  }

  if (!isValidEmail(email)) {
    setFormStatus(INVALID_EMAIL);
    return;
  }

  if (size < 1) {
    setFormStatus(INVALID_SIZE);
    return;
  }
  const isCompany = requesterType === COMPANY;

  const value = getPipelineValue(size, isCompany);
  const parsedFormValues = {
    isCompany,
    email,
    size,
    value,
    lead_form_source: DEMO_REQUEST,
    partner,
  };

  try {
    await submitToHubspot(parsedFormValues);
  } catch (error) {
    if (error.message === INVALID_EMAIL) {
      setFormStatus(INVALID_EMAIL);
    } else {
      setTimeout(() => {
        setFormStatus(FETCH_ERROR);
      }, 1000);
    }
    return;
  }

  const eventName = `getDemo.submit.${requesterType}`;
  if (isCompany) {
    if (isDeerCompany(size)) {
      track(TAG_MANAGER_BIG_COMPANY);
    } else {
      track(TAG_MANAGER_SMALL_COMPANY);
    }
    track(CAPTURE_LEAD);
  }

  identifyOrAlias(email);

  track(eventName, { value, pathname, size, email });

  await redirect(parsedFormValues);
  setFormStatus(SUBMITTED);
  setDomainCookie(LEAD_STATUS, IDENTIFIED);
};
