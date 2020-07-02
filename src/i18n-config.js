const compose = require('lodash/fp/compose');
const pick = require('lodash/fp/pick');
const flatten = require('lodash/fp/flatten');
const values = require('lodash/fp/values');
const compact = require('lodash/fp/compact');

const languages = ['en', 'de', 'fr'];
const catalogs = {
  en: require('./locale/en/messages'), // eslint-disable-line
  de: require('./locale/de/messages'), // eslint-disable-line
  fr: require('./locale/fr/messages') // eslint-disable-line
};

const defaultLanguage = 'en';

const langPrefix = (lang) => (lang === defaultLanguage ? '' : `/${lang}`);
const deprefix = (pathname) =>
  pathname[0] === '/' && pathname[3] === '/' ? pathname.substr(3) : pathname;
const langFromPath = (pathname) => {
  const lang = pathname.split('/')[1];
  return languages.includes(lang) ? lang : 'en';
};

const browserLanguagePropertyKeys = [
  'languages',
  'language',
  'browserLanguage',
  'userLanguage',
  'systemLanguage',
];
const getLocale = () =>
  compose(
    compact,
    flatten,
    values,
    pick(browserLanguagePropertyKeys)
  )(window.navigator)
    .map((s) => s.substr(0, 2))
    .find((s) => languages.includes(s)) || 'en';

exports.defaultLanguage = defaultLanguage;
exports.languages = languages;
exports.catalogs = catalogs;
exports.langPrefix = langPrefix;
exports.deprefix = deprefix;
exports.langFromPath = langFromPath;
exports.getLocale = getLocale;
