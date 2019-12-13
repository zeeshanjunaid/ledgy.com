// @flow

export const name = 'Ledgy';

export const appUrl = 'https://app.ledgy.com';

export const demoUrl = 'https://demo.ledgy.com';

export const calculatorUrl = 'https://calculator.ledgy.com';

export const githubUrl = 'https://github.com/morloy/ledgy.com/';

export const forbesUrl = 'https://www.forbesdach.com/30-under-30.html';

export const economistUrl =
  'https://www.economist.com/business/2019/07/06/new-firms-help-startups-keep-track-of-their-owners';

export const wirtschaftswocheUrl =
  'https://gruender.wiwo.de/ledgy-plattform-fuer-beteiligungsmanagement-erhaelt-anschubfinanzierung/';

export const top100Url = 'https://www.top100startups.swiss/index.cfm?page=136340';

const isNetlify = typeof window !== 'undefined' && window.location.hostname !== 'localhost';

export const mixpanelUrl = isNetlify ? '/api' : 'https://api.mixpanel.com';

export const MIXPANEL_TOKEN = isNetlify
  ? '258b9724a7ad7271dd2e3e3440bb68fd'
  : '7f124dd9a799a7c687dc38ee554d9876';

export const isBrowser = typeof window !== 'undefined';

export const targetBlank = { target: '_blank', rel: 'noopener noreferrer' };

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
