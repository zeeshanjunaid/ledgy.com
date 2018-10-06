// @flow

import * as React from 'react';
import { Helmet } from 'react-helmet';

export const name = 'Ledgy';
export const siteUrl = 'https://www.ledgy.com';
export const appUrl = 'https://app.ledgy.com';
export const demoUrl = 'https://demo.ledgy.com';
export const blogUrl = 'https://blog.ledgy.com';

export const loadScript = (path: string): Promise<*> => new Promise((resolve, reject) => {
  const script = document.createElement('script');
  script.src = path;
  script.async = true;
  script.onload = resolve;
  return (document.body && document.body.appendChild(script)) || reject();
});


export const Title = (props: {
  title: string,
  section?: string,
  description?: string,
}) => (
  <Helmet>
    <title>{props.title} {props.section && `| ${props.section}`} | {name}</title>
    {props.description && <meta name="description" content={props.description} />}

    <meta property="og:title" content={props.title} />
    {props.description && <meta property="og:description" content={props.description} />}

    <meta name="twitter:title" content={props.title} />
    {props.description && <meta name="twitter:description" content={props.description} />}
  </Helmet>
);
Title.defaultProps = { section: '', description: '' };
