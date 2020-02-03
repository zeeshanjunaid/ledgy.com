const mergePolicies = policies => {
  const mergedCsp = {};
  policies.forEach(policy => {
    Object.entries(policy).forEach(([key, value]) => {
      const oldValue = mergedCsp[key];
      mergedCsp[key] = oldValue ? `${oldValue} ${value}` : value;
    });
  });
  const csp = Object.entries(mergedCsp)
    .map(([key, value]) => `${key}-src ${value}`)
    .join('; ');
  return csp;
};

const defaultPolicy = {
  default: "'self'",
  img: "'self' data: https://api.producthunt.com https://images.ctfassets.net",
  object: "'none'",
  font: "'self' data: https://fonts.gstatic.com",
  script: "'self' 'unsafe-inline' 'unsafe-eval'",
  style:
    "'self' 'unsafe-inline' https://fonts.googleapis.com https://maps.googleapis.com/maps/api/",
  frame: "'self' https://www.youtube.com",
  connect: "'self' https://maps.gstatic.com https://maps.googleapis.com",
  child: "'self'"
};

const hubspot = {
  img: 'https://forms.hsforms.com https://track.hubspot.com',
  script:
    'https://js.hs-scripts.com https://js.usemessages.com https://js.hsadspixel.net http://js.hs-analytics.net https://js.hscollectedforms.net https://js.hs-scripts.com',
  frame: 'https://app.hubspot.com',
  connect:
    'https://api.hubspot.com https://forms.hubspot.com https://api.hubapi.com https://js.hs-scripts.com https://js.hsadspixel.net https://js.hs-analytics.net https://js.hscollectedforms.net https://js.usemessages.com'
};

exports.ContentSecurityPolicy = mergePolicies([defaultPolicy, hubspot]);
