// @flow

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { team, type AuthorProps } from '../layouts/team';

const About = ({ about, img }: {| about: AuthorProps, img: Object |}) => (
  <div className="about">
    <Img {...img} alt={about.name} className="m-3 rounded-circle float-left" />
    <h4 className="pt-4">
      {about.name} <small className="text-nowrap">{about.role}</small>
    </h4>
    <div className="social social-boxed social-rounded social-gray">
      <a className="social-mail" href={`mailto:${about.mail}`}>
        <FontAwesomeIcon icon={faEnvelope} title="Email" />
      </a>
      <a className="social-twitter" href={about.twitter}>
        <FontAwesomeIcon icon={faTwitter} title="Twitter" />
      </a>
      <a className="social-linkedin" href={about.linkedIn}>
        <FontAwesomeIcon icon={faLinkedin} title="LinkedIn" />
      </a>
    </div>
  </div>
);

export const Author = ({ name }: { name: string }) => {
  const author = team[name];
  if (!author) return null;
  return (
    <StaticQuery
      query={graphql`
        query {
          ...TeamFragment
        }
      `}
      render={data => <About about={author} img={data[name]} />}
    />
  );
};

export const Image = ({
  src,
  align,
  caption,
  size,
  img,
  ...props
}: {
  src: string,
  align: string,
  caption: string,
  size: string,
  img: Object
}) => (
  <figure
    className={align ? `mx-auto float-md-${align} size-md-small m-6` : 'mx-auto my-6'}
    style={size ? { width: `${size}px` } : {}}
  >
    <Img {...img} {...props} />
    {caption && (
      <figcaption className="text-muted small px-3 font-weight-light mt-1">{caption}</figcaption>
    )}
  </figure>
);
