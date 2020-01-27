exports.ContentSecurityPolicy = [
  "default-src 'self'",
  "img-src 'self' data: https://api.producthunt.com https://csi.gstatic.com https://www.google-analytics.com https://maps.gstatic.com https://maps.googleapis.com https://stats.g.doubleclick.net https://www.google.com/pagead/ https://www.google.ch/pagead/ https://px.ads.linkedin.com https://www.linkedin.com/px/ https://script.hotjar.com http://script.hotjar.com https://www.googleadservices.com https://forms.hsforms.com https://track.hubspot.com",
  "object-src 'none'",
  "font-src 'self' data: https://fonts.gstatic.com http://script.hotjar.com https://script.hotjar.com",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://wchat.eu.freshchat.com/js/ https://snippets.freshchat.com/js/ https://www.googletagmanager.com/ https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net  https://snap.licdn.com https://sjs.bizographics.com/ https://maps.googleapis.com http://static.hotjar.com https://static.hotjar.com https://script.hotjar.com https://js.hs-scripts.com https://js.usemessages.com https://js.hsadspixel.net http://js.hs-analytics.net https://js.hscollectedforms.net",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://wchat.eu.freshchat.com/css/ https://snippets.freshchat.com/css/ https://maps.googleapis.com/maps/api/",
  "frame-src 'self' https://wchat.eu.freshchat.com https://ledgy.eu.webpush.freshchat.com https://www.youtube.com https://vars.hotjar.com https://app.hubspot.com",
  "connect-src 'self' https://maps.gstatic.com https://maps.googleapis.com https://snippets.freshchat.com https://www.google-analytics.com https://wchat.eu.freshchat.com http://*.hotjar.com:* https://*.hotjar.com:* https://vc.hotjar.io:* wss://*.hotjar.com https://api.hubspot.com https://forms.hubspot.com https://api.hubapi.com",
  "child-src 'self' https://vars.hotjar.com"
].join('; ');
