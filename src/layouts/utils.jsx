// @flow

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronRight, faDotCircle } from '@fortawesome/free-solid-svg-icons';

export const name = 'Ledgy';
export const appUrl = 'https://app.ledgy.com';
export const demoUrl = 'https://demo.ledgy.com';
export const githubUrl = 'https://github.com/morloy/ledgy.com/';

export const targetBlank = { target: '_blank', rel: 'noopener noreferrer' };

export const loadScript = (path: string): Promise<*> =>
  new Promise((resolve, reject) => {
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
  thumbnailUrl?: string
}) => (
  <Helmet>
    <title>
      {props.title} {props.section && `| ${props.section}`} | {name}
    </title>
    {props.description && <meta name="description" content={props.description} />}

    <meta property="og:title" content={props.title} />
    {props.description && <meta property="og:description" content={props.description} />}
    {props.thumbnailUrl && <meta property="og:image" content={props.thumbnailUrl} />}

    <meta name="twitter:title" content={props.title} />
    {props.description && <meta name="twitter:description" content={props.description} />}
    {props.thumbnailUrl && <meta name="twitter:image" content={props.thumbnailUrl} />}
  </Helmet>
);
Title.defaultProps = { section: '', description: '', thumbnailUrl: '' };

export const Li = ({ children }: { children: React.Node }) => (
  <li className="media">
    <FontAwesomeIcon icon={faCheck} className="text-success mr-1 mt-1" />
    <div className="media-body ml-3">{children}</div>
  </li>
);

export const FeatureLi = ({ children }: { children: React.Node }) => (
  <li className="media">
    <FontAwesomeIcon icon={faDotCircle} className="text-primary fa-xs mt-2" />
    <div className="media-body ml-4 mb-4">{children}</div>
  </li>
);

export const FeatureList = ({ features }: { features: Array<React.Node> }) => (
  <header className="section-header text-left">
    <ul className="pl-0 pt-2">
      {features.map(feature => (
        <FeatureLi>{feature}</FeatureLi>
      ))}
    </ul>
  </header>
);

export const ChevronRight = () => (
  <FontAwesomeIcon icon={faChevronRight} className="fs-12 ml-2 adjust-bottom swinging" />
);

export const Hr = () => <hr className="my-7" />;

export const animateTablet = () => {
  let scrolling = false;
  window.onscroll = () => {
    scrolling = true;
  };
  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      const tablet = document.getElementById('tablet-ledgy');
      const banner = document.querySelector('header');
      const { scrollY } = window;
      if (tablet && banner && scrollY <= banner.clientHeight) {
        tablet.style.transform = `rotateZ(${scrollY / -70}deg) translateY(${scrollY /
          35}%) skew(-${scrollY / 140}deg)`;
      }
    }
  }, 50);
};
