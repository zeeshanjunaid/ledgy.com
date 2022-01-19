const appUrl = 'https://app.ledgy.com';
const esopTemplates = '/employee-participation-plan-templates/';
const pricing = '/company-pricing/';
const stateOfEquity = 'https://stateofequity.ledgy.com';
const singup = appUrl + '/signup';

// eslint-disable-next-line no-undef
exports.redirects = [
  ['/esop', esopTemplates],
  ['/psop', esopTemplates],
  ['/vsop', esopTemplates],
  ['/equity-plans', esopTemplates],
  ['/jobs', '/careers'],
  //external links
  ['/signup', singup],
  ['/sign-up', singup],
  ['/register', singup],
  ['/login', appUrl],
  ['/signin', appUrl],
  ['/sign-in', appUrl],
  ['/pricing', pricing],
  ['/stateofequity', stateOfEquity],
  ['/state-of-equity', stateOfEquity],
];
