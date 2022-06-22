import { Link } from 'gatsby';
import React from 'react';
import { getPartnerLogos } from './lib';

const TITLE = 'How are partnership program works';
const DESCRIPTION = `We want to help as many companies. If you work with one of our global partners, you qualify for a discount. Our partners include these kind folks and more!,`;
const BUTTON_TEXT = 'Get your discount now!';
const BUTTON_LINK = '/partnership';

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
                <img src={logo} alt="logo image" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
