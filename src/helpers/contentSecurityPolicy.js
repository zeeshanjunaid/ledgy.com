export const ContentSecurityPolicy = [
  "default-src 'self'",
  "img-src 'self' data: https://api.producthunt.com https://csi.gstatic.com https://www.google-analytics.com https://maps.gstatic.com https://maps.googleapis.com https://stats.g.doubleclick.net https://script.hotjar.com http://script.hotjar.com",
  "object-src 'none'",
  "font-src 'self' data: https://fonts.gstatic.com http://script.hotjar.com https://script.hotjar.com",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://wchat.eu.freshchat.com/js/ https://snippets.freshchat.com/js/ https://www.googletagmanager.com/ https://www.google-analytics.com https://sjs.bizographics.com/ https://maps.googleapis.com http://static.hotjar.com https://static.hotjar.com https://script.hotjar.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://wchat.eu.freshchat.com/css/ https://snippets.freshchat.com/css/ https://maps.googleapis.com/maps/api/",
  "frame-src 'self' https://wchat.eu.freshchat.com https://ledgy.eu.webpush.freshchat.com https://www.youtube.com https://vars.hotjar.com",
  "connect-src 'self' https://maps.gstatic.com https://maps.googleapis.com https://snippets.freshchat.com https://www.google-analytics.com https://wchat.eu.freshchat.com http://*.hotjar.com:* https://*.hotjar.com:* https://vc.hotjar.io:* wss://*.hotjar.com",
  "child-src 'self' https://vars.hotjar.com"
].join('; ');
