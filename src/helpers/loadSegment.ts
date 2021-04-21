/* eslint-disable */

const getDestinations = (destinations: string[]) => destinations.reduce((res, v) => ({ ...res, [v]: true }), { All: false });


const SEGMENT_COOKIE_ID = 'ajs_anonymous_id';
export const hasAcceptedCookies = () => !!localStorage.getItem(SEGMENT_COOKIE_ID);

export const loadSegment = (destinations: string[]): void => {
  console.log('load segment');
  const analytics = window.analytics = window.analytics || [];
  if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error('Segment snippet included twice.');else {
    analytics.invoked = !0;
    analytics.methods = ['trackSubmit', 'trackClick', 'trackLink', 'trackForm', 'pageview', 'identify', 'reset', 'group', 'track', 'ready', 'alias', 'debug', 'page', 'once', 'off', 'on'];
    analytics.factory = function (t: DisableTypeScript) {
      return function () {
        const e = Array.prototype.slice.call(arguments);
        e.unshift(t);
        analytics.push(e);
        return analytics;
      };
    };
    for (let t = 0; t < analytics.methods.length; t++) {
      const e = analytics.methods[t];
      analytics[e] = analytics.factory(e);
    }
    analytics.load = function (t: DisableTypeScript, e: DisableTypeScript) {
      const n = document.createElement('script');
      n.type = 'text/javascript';
      n.async = !0;
      n.src = `https://cdn.segment.com/analytics.js/v1/${t}/analytics.min.js`;
      const a = document.getElementsByTagName('script')[0];
      if (a && a.parentNode) a.parentNode.insertBefore(n, a);
      analytics._loadOptions = e;
    };
    analytics.SNIPPET_VERSION = '4.1.0';
    analytics.load('mfLUo1gAa0xfzIR2xANV10NG8qN1IZnu', {
      integrations: getDestinations(destinations)
    });
    analytics.page();
  }
};
