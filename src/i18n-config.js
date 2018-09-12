const { chain, includes } = require('lodash');

const languages = ['en', 'de'];
const catalogs = {
  en: require('./locale/en/messages'), // eslint-disable-line global-require
  de: require('./locale/de/messages'), // eslint-disable-line global-require
};

const defaultLanguage = 'en';

const langPrefix = lang => (lang === defaultLanguage ? '' : `/${lang}`);
const deprefix = pathname => (pathname.startsWith('/de/') ? pathname.substr(4) : pathname);
const langFromPath = pathname => (pathname.startsWith('/de/') ? 'de' : 'en');

const browserLanguagePropertyKeys = ['languages', 'language', 'browserLanguage', 'userLanguage', 'systemLanguage'];
const availableLanguages = ['de', 'en'];
const getLocale = () => chain(window.navigator)
  .pick(browserLanguagePropertyKeys)
  .values()
  .flatten()
  .compact()
  .map(s => s.substr(0, 2))
  .find(s => includes(availableLanguages, s))
  .value() || 'en';

exports.defaultLanguage = defaultLanguage;
exports.languages = languages;
exports.catalogs = catalogs;
exports.langPrefix = langPrefix;
exports.deprefix = deprefix;
exports.langFromPath = langFromPath;
exports.getLocale = getLocale;
