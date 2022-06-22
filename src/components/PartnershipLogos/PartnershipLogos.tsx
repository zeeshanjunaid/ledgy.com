import { Link } from 'gatsby';
import React from 'react';
import { Image } from '../utils';
import { getPartnerLogos } from './lib';

const TITLE = 'Do you work with one of our partners?';
const DESCRIPTION =
  'We partner with top VCs and category-defining tech startups to help as many companies as possible set up their equity for success. If you work with one of our partners, you qualify for a discount - not all of our partners are pictured below so schedule a demo to find out more.';
const BUTTON_TEXT = 'Book a demo to request discount!';
const BUTTON_LINK = '/partnership#demo';

export const PartnershipLogos = () => {
  const logos = getPartnerLogos();
  return (
    <section className="partnershiplogos">
      <div className="partnershiplogos__info">
        <div className="partnershiplogos__info-title">
          <h2>{TITLE}</h2>
        </div>
        <div className="partnershiplogos__info-description">
          <p>{DESCRIPTION}</p>
        </div>
        <div className="partnershiplogos__info-btn">
          <Link className="btn btn-primary" to={BUTTON_LINK}>
            {BUTTON_TEXT}
          </Link>
        </div>
      </div>
      {logos && logos.length > 0 && (
        <div className="partnershiplogos__images container">
          <ul className="partnershiplogos__images-wrapper">
            {logos.map((logo, index) => (
              <li className="partnershiplogos__images-item" key={index}>
                <Image image={logo} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
