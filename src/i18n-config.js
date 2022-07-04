/* eslint-disable no-undef */

const defaultRegion = 'global';
const regions = [defaultRegion, 'uk', 'de', 'fr', 'us'];

const regionPrefix = (region) => (region === defaultRegion ? '' : `/${region}`);
const gatsbyCountry = (region) => (region === 'uk' ? 'gb' : region);

const deprefix = (pathname) =>
  pathname[0] === '/' && pathname[3] === '/' ? pathname.substr(3) : pathname;
const regionFromPath = (pathname) => {
  const region = pathname.split('/')[1];
  return regions.includes(region) ? region : defaultRegion;
};

exports.regions = regions;
exports.defaultRegion = defaultRegion;
exports.regionPrefix = regionPrefix;
exports.gatsbyCountry = gatsbyCountry;
exports.deprefix = deprefix;
exports.regionFromPath = regionFromPath;
