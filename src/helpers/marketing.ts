// @ts-nocheck
/* eslint-disable */

const getDestinations = (destinations: string[]) => destinations.reduce((res, v) => ({ ...res, [v]: true }), { All: false });

const SEGMENT_COOKIE_ID = 'ajs_anonymous_id';

const loadSegment = (destinations: string[]): void => {
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
  analytics.load("mfLUo1gAa0xfzIR2xANV10NG8qN1IZnu",{ integrations: getDestinations(destinations) });
  analytics.page();
  }}();
};

const loadG2 = () => {
  (function (c, p, d, u, id, i) {
    id = ''; // Optional Custom ID for user in your system
    u = 'https://tracking.g2crowd.com/attribution_tracking/conversions/' + c + '.js?p=' + encodeURI(p) + '&e=' + id;
    i = document.createElement('script');
    i.type = 'application/javascript';
    i.async = true;
    i.src = u;
    d.getElementsByTagName('head')[0].appendChild(i);
  }("3729", document.location.href, document));
}

const loadCapterra = () => {
  (function() {
    var capterra_vkey = 'a12f04cb89eededafd612ba40d2d149b',
    capterra_vid = '2120646',
    capterra_prefix = (('https:' == document.location.protocol)
      ? 'https://ct.capterra.com' : 'http://ct.capterra.com');
    var ct = document.createElement('script');
    ct.type = 'text/javascript';
    ct.async = true;
    ct.src = capterra_prefix + '/capterra_tracker.js?vid='
      + capterra_vid + '&vkey=' + capterra_vkey;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ct, s);
  })();
}

export const hasAcceptedCookies = () => !!localStorage.getItem(SEGMENT_COOKIE_ID);

export const loadMarketingTools = (segmentDestinations: string[]) => {
  loadSegment(segmentDestinations);
  loadG2();
  loadCapterra();
}
