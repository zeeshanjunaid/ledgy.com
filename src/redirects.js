const appUrl = 'https://app.ledgy.com';
const esopTemplates = '/employee-participation-plan-templates/';
const pricing = '/company-pricing/';
const stateOfEquity = 'https://stateofequity.ledgy.com';
const signup = appUrl + '/signup';

// eslint-disable-next-line no-undef
exports.redirects = [
  ['/esop', esopTemplates],
  ['/psop', esopTemplates],
  ['/vsop', esopTemplates],
  ['/equity-plans', esopTemplates],
  ['/jobs', '/careers'],
  //external links
  ['/signup', signup],
  ['/sign-up', signup],
  ['/register', signup],
  ['/login', appUrl],
  ['/signin', appUrl],
  ['/sign-in', appUrl],
  ['/pricing', pricing],
  ['/stateofequity', stateOfEquity],
  ['/state-of-equity', stateOfEquity],
];
