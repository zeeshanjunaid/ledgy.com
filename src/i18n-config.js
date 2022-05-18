/* eslint-disable no-undef */

const defaultRegion = 'global';
const regions = [defaultRegion, 'uk', 'de', 'fr'];

const regionPrefix = (region) => (region === defaultRegion ? '' : `/${region}`);
const deprefix = (pathname) =>
  pathname[0] === '/' && pathname[3] === '/' ? pathname.substr(3) : pathname;
const regionFromPath = (pathname) => {
  const region = pathname.split('/')[1];
  return regions.includes(region) ? region : defaultRegion;
};

exports.regions = regions;
exports.regionPrefix = regionPrefix;
exports.deprefix = deprefix;
exports.regionFromPath = regionFromPath;
