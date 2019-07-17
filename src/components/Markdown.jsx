// @flow

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { getWholeTeam, getTeamImages, type AuthorProps } from '../layouts/team';

const About = ({ about, img }: {| about: AuthorProps, img: Object |}) => (
  <div className="about d-flex justify-content-center pt-3 mt-3">
    <Img {...img} alt={about.name} className="m-4 rounded-circle float-left" />
    <div className="d-flex flex-column justify-content-center align-items-end">
      <h5 className="pt-3">{about.name}</h5>
      <h5 className="mb-3">
        <small className="text-nowrap">{about.role}</small>
      </h5>
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
  </div>
);

export const Author = ({ name, prefix }: {| name: string, prefix: string |}) => {
  const team = getWholeTeam(prefix);
  const images = getTeamImages();
  return <About about={team[name]} img={images[name]} />;
};

export type ImageProps = {|
  id: string,
  align?: string,
  caption?: string,
  size?: string
|};

export const Image = ({ id, align, caption, size, ...props }: ImageProps) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(limit: 1000) {
        nodes {
          contentful_id
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `);
  const record = data.allContentfulAsset.nodes.find(v => v.contentful_id === id);
  const img = record.localFile.childImageSharp;
  return (
    <figure
      className={align ? `mx-auto float-md-${align} size-md-small m-6` : 'mx-auto my-6'}
      style={size ? { width: `${size}px` } : {}}
    >
      <a href={img.fluid.src} data-provide="lightbox">
        <Img {...img} {...props} />
      </a>
      {caption && (
        <figcaption className="text-muted small px-3 font-weight-light mt-1">{caption}</figcaption>
      )}
    </figure>
  );
};

const languages = {
  en: <Trans>English</Trans>,
  de: <Trans>German</Trans>,
  fr: <Trans>French</Trans>
};

export const LanguageHint = ({ lang, documentLang }: {| lang: string, documentLang: string |}) =>
  lang !== documentLang && (
    <div className="text-center">
      <Trans>This page is only available in</Trans> {languages[documentLang]}
    </div>
  );
