import { getListOfPagesWithNoNavUrl } from './getListOfPagesWithNoNavUrl';

export const hideHomePageUrl = (): boolean => {
  const urlsOfPagesWithNoNav = getListOfPagesWithNoNavUrl();
  const currentUrl = typeof window === 'object' ? window.location.href : undefined;
  return !!currentUrl && urlsOfPagesWithNoNav.has(currentUrl);
};
