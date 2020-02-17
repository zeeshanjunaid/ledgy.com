const getCSPEntry = ([key, value]) => `${key.includes('-') ? key : `${key}-src`} ${String(value)}`;

const mergePolicies = policies => {
  const mergedCsp = {};
  policies.forEach(policy => {
    Object.entries(policy).forEach(([key, value]) => {
      const oldValue = mergedCsp[key];
      mergedCsp[key] = oldValue ? `${oldValue} ${value}` : value;
    });
  });
  const csp = Object.entries(mergedCsp)
    .map(getCSPEntry)
    .join('; ');
  return csp;
};

const defaultPolicy = {
  default: "'self'",
  img: "'self' data: https://api.producthunt.com https://images.ctfassets.net",
  object: "'none'",
  font: "'self' data: https://fonts.gstatic.com",
  script: "'self' 'unsafe-inline' 'unsafe-eval'",
  style: "'self' 'unsafe-inline' https://fonts.googleapis.com",
  frame: "'self' https://www.youtube.com",
  connect: "'self' ",
  child: "'self'"
};

const sentry = {
  'report-uri':
    'https://sentry.io/api/2601736/security/?sentry_key=5b41b936f311460db8d592c6ddb4a6b1'
};

const maps = {
  script: 'https://maps.googleapis.com',
  style: 'https://maps.googleapis.com',
  connect: 'https://maps.gstatic.com https://maps.googleapis.com',
  img: 'https://maps.gstatic.com'
};

const segment = {
  script: 'https://cdn.segment.com',
  connect: 'https://api.segment.io https://cdn.segment.com'
};

const googleAnalytics = {
  script:
    'http://www.google-analytics.com https://snap.licdn.com https://www.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net',
  frame: 'https://bid.g.doubleclick.net',
  connect:
    'https://www.google-analytics.com https://www.googleadservices.com https://snap.licdn.com',
  img:
    'http://www.google-analytics.com https://px.ads.linkedin.com https://www.google.com https://www.google.ch'
};

const hubspot = {
  img: 'https://forms.hsforms.com https://track.hubspot.com',
  script:
    'https://js.hs-scripts.com https://js.usemessages.com https://js.hsadspixel.net http://js.hs-analytics.net https://js.hscollectedforms.net https://js.hs-scripts.com',
  frame: 'https://app.hubspot.com',
  connect:
    'https://api.hubspot.com https://forms.hubspot.com https://api.hubapi.com https://js.hs-scripts.com https://js.hsadspixel.net https://js.hs-analytics.net https://js.hscollectedforms.net https://js.usemessages.com'
};

const hotjar = {
  script: 'https://static.hotjar.com https://script.hotjar.com',
  frame: 'https://vars.hotjar.com',
  connect: 'http://*.hotjar.com:* https://*.hotjar.com:* https://vc.hotjar.io:* wss://*.hotjar.com',
  font: 'https://script.hotjar.com',
  img: 'https://script.hotjar.com'
};

exports.ContentSecurityPolicy = mergePolicies([
  defaultPolicy,
  sentry,
  maps,
  segment,
  googleAnalytics,
  hubspot,
  hotjar
]);
