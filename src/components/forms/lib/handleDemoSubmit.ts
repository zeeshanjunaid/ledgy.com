import { isFieldMissing, isValidEmail, track, setDomainCookie } from '../../../helpers';

import { FormValues, ParsedFormValues } from './formTypes';
import { submitToHubspot } from './hubspot';
import {
  investorUrl,
  meetingRequestUrl,
  COMPANY,
  EMPLOYEE_VALUE,
  INVESTMENT_VALUE,
  DEER_COMPANY_THRESHOLD,
  FUND_INVESTMENT_THRESHOLD,
  smallCompanyUrl,
  FORM_STATUSES,
} from './constants';

type ErrorResponse = {
  errorType: string;
  message: string;
};

type JsonResponse = {
  errors?: ErrorResponse[];
};

const { INVALID_EMAIL, INVALID_FIELDS, LOADING, SUBMITTED, FETCH_ERROR } = FORM_STATUSES;

const LEAD_STATUS = 'leadStatus';
const IDENTIFIED = 'identified';

const isInvalidEmailError = (errors: ErrorResponse[]): boolean =>
  errors.some((error) => ['INVALID_EMAIL', 'BLOCKED_EMAIL'].includes(error.errorType));

const isDeerCompany = (size: number) => size >= DEER_COMPANY_THRESHOLD;
const isFund = (size: number) => size >= FUND_INVESTMENT_THRESHOLD;

const getEmployeeValue = (size: number) => {
  if (isDeerCompany(size)) return size * EMPLOYEE_VALUE;
  return 0;
};
const getInvestmentValue = (size: number) => {
  if (isFund(size)) return size * INVESTMENT_VALUE;
  return 0;
};

const getPipelineValue = (size: number, isCompany: boolean) =>
  isCompany ? getEmployeeValue(size) : getInvestmentValue(size);

const getUrl = ({ isCompany, size, email }: ParsedFormValues) => {
  const meetingRequestUrlWithEmail = `${meetingRequestUrl}?email=${email}`;

  const alwaysBook = window.location.hash.includes('#book');
  if (alwaysBook) return meetingRequestUrlWithEmail;

  if (!isCompany) {
    return isFund(size) ? meetingRequestUrlWithEmail : investorUrl;
  }
  return isDeerCompany(size) ? meetingRequestUrlWithEmail : smallCompanyUrl;
};

const redirect = (values: ParsedFormValues) => {
  if (window) {
    (window as DisableTypeScript).location = getUrl(values);
  }
};

export const handleDemoSubmit = async ({
  values,
  event,
  setFormStatus,
}: {
  values: FormValues;
  event: React.FormEvent<HTMLFormElement>;
  setFormStatus: (arg0: string) => void;
}): Promise<void> => {
  event.preventDefault();
  setFormStatus(LOADING);
  const { requesterType, email, size: sizeString } = values;

  if (isFieldMissing({ requesterType, sizeString })) {
    setFormStatus(INVALID_FIELDS);
    return;
  }

  if (!isValidEmail(email)) {
    setFormStatus(INVALID_EMAIL);
    return;
  }

  const isCompany = requesterType === COMPANY;
  const size = Number(sizeString);
  const value = getPipelineValue(size, isCompany);
  const parsedFormValues = { isCompany, email, size, value };

  const hubspotResponse = await submitToHubspot(parsedFormValues);

  const onError = async (response: Response) => {
    const jsonResponse: JsonResponse = await response.json();
    if (isInvalidEmailError(jsonResponse.errors || [])) {
      setFormStatus(INVALID_EMAIL);
      return;
    }
    setTimeout(() => {
      setFormStatus(FETCH_ERROR);
    }, 1000);
  };

  const onSuccess = () => {
    const eventName = `getDemo.submit.${requesterType}`;
    track(eventName, { value });
    track('captureLead');

    redirect(parsedFormValues);
    setFormStatus(SUBMITTED);
    setDomainCookie(LEAD_STATUS, IDENTIFIED);
  };

  if (hubspotResponse.status !== 200) {
    await onError(hubspotResponse);
  } else {
    onSuccess();
  }
};
