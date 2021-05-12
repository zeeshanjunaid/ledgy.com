import { ledgyDomain } from './constants';
import { loadSegment, loadCapterra, loadG2 } from './snippets';

const getDestinations = (destinations: string[]): Record<string, boolean> =>
  destinations.reduce((res, v) => ({ ...res, [v]: true }), { All: false });

const SEGMENT_COOKIE_ID = 'ajs_anonymous_id';
const HAS_ACCOUNT_COOKIE_ID = 'hasAccount';

export const getCookie = (name: string) =>
  typeof document === 'object'
    ? (document.cookie.split('; ').find((v) => v.startsWith(name)) || '').slice(name.length + 1)
    : '';

export const setDomainCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}; domain=${ledgyDomain}; path=/`;
};

export const hasAcceptedCookies = () => !!getCookie(SEGMENT_COOKIE_ID);
export const hasLedgyAccount = () => !!getCookie(HAS_ACCOUNT_COOKIE_ID);

export const loadMarketingTools = (segmentDestinations: string[]) => {
  loadSegment(getDestinations(segmentDestinations));
  loadG2();
  loadCapterra();
};
