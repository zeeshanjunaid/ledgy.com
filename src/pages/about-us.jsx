// @flow

import * as React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { withI18n, Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Title } from '../layouts/utils';
import { getWholeTeam, type AuthorProps } from '../layouts/team';

const Header = ({ i18n }: Props) => (
  <header className="header text-white bg-ledgy">
    <Title
      title={i18n.t`About us`}
      description={i18n.t`Meet the team behind Ledgy that went out to help startups thrive. Learn more about the people who trust in us.`}
    />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>
            <Trans>About us</Trans>
          </h1>
        </div>
      </div>
    </div>
  </header>
);

const Founder = withI18n()(
  ({
    name,
    role,
    description,
    img,
    twitter,
    linkedIn,
    mail
  }: {|
    ...AuthorProps,
    img: Object
  |}) => (
    <div className="col-12 col-md-4 team-1">
      {img && <Img {...img} className="mx-auto" alt={name} />}
      <h6>{name}</h6>
      <small>{role}</small>
      <p>{description}</p>
      <div className="social social-boxed social-rounded social-gray">
        <a className="social-mail" href={`mailto:${mail}`}>
          <FontAwesomeIcon icon={faEnvelope} title="Email" />
        </a>
        <a className="social-twitter" href={twitter}>
          <FontAwesomeIcon icon={faTwitter} title="Twitter" />
        </a>
        <a className="social-linkedin" href={linkedIn}>
          <FontAwesomeIcon icon={faLinkedin} title="LinkedIn" />
        </a>
      </div>
    </div>
  )
);

const Investor = ({
  name,
  description,
  img
}: {|
  name: string,
  description: string,
  img: Object
|}) => (
  <div className="col-12 col-md-4 team-2">
    {img && <Img {...img} alt={name} />}
    <h6>{name}</h6>
    <p>{description}</p>
  </div>
);

const IndexPage = (props: Props) => {
  const { data, i18n } = props;
  const team = getWholeTeam(props.prefix);
  return (
    <div>
      <Header {...props} />
      <main className="main-content">
        <section className="section py-150 bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 pl-50 pr-80">
                <p className="lead">
                  <Trans>
                    We empower entrepreneurs with tools for their financing rounds and for engaging
                    their investors and employees. Today, this involves a lot of paperwork, high
                    costs, and slow, intransparent processes. We make this a breeze for both
                    companies and shareholders, establishing a new standard to manage and exchange
                    securities in private companies.
                  </Trans>
                </p>
              </div>
              <div className="col-12 col-lg-6 p-50 align-self-center" data-aos="fade-left">
                <Img {...data.mission} className="shadow-3" alt={i18n.t`Space elevator`} />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-header">
              <h2>
                <Trans>Team</Trans>
              </h2>
            </header>

            <div className="row gap-y2 justify-content-center">
              <Founder {...team.timo} img={data.timo} />
              <Founder {...team.yoko} img={data.yoko} />
              <Founder {...team.ben} img={data.ben} />
              <Founder {...team.oriol} img={data.oriol} />
              <Founder {...team.jules} img={data.jules} />
              <Founder {...team.marius} img={data.marius} />
              <Founder {...team.jahlela} img={data.jahlela} />
              <Founder {...team.spela} img={data.spela} />
              <Founder {...team.luna} img={data.luna} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-header">
              <h2>
                <Trans>Backed by</Trans>
              </h2>
            </header>

            <div className="row gap-y justify-content-center">
              <Investor
                name="btov Partners"
                description={i18n.t`Europe’s symbiosis of early-stage VC funds and private investor network`}
                img={data.btov}
              />
              <Investor
                name="Creathor Ventures"
                description={i18n.t`Backing the creators of our future since 1984`}
                img={data.creathor}
              />
              <Investor
                name="VI Partners"
                description={i18n.t`Healthcare & technology venture capital since 2001`}
                img={data.vipartners}
              />
              <Investor
                name="Dr. Paul E. Sevinç"
                description={i18n.t`Entrepreneur, technologist, founder of Doodle.com`}
                img={data.paul}
              />
              <Investor
                name="Daniel Gutenberg"
                description={i18n.t`One of the most active Swiss early-stage angel investors`}
                img={data.daniel}
              />
              <Investor
                name="Luis Cabiedes"
                description={i18n.t`Leading Spanish investor in early-stage technology startups`}
                img={data.luis}
              />
              <Investor
                name="Myke Näf"
                description={i18n.t`Entrepreneur, business angel, founder of Doodle.com`}
                img={data.myke}
              />
              <Investor
                name="Cyrill Osterwalder"
                description={i18n.t`Digital entrepreneur and investor. Security, crypto & privacy expert`}
                img={data.cyrill}
              />
              <Investor
                name="Luzius Meisser"
                description={i18n.t`Founder of Meisser Economics, Bitcoin Association Switzerland, and Wuala`}
                img={data.luzius}
              />
              <Investor
                name="Adrian Bührer"
                description={i18n.t`Investor & consultant (Farmy.ch, Flatfox.ch), founder of Students.ch`}
                img={data.adrian}
              />
              <Investor
                name="Elena Walder-Schiavone"
                description={i18n.t`M&A and private equity lawyer with a focus on start-up legal advise, Smartuplaw.ch`}
                img={data.elena}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...TeamFragment

    mission: imageSharp(fluid: { originalName: { regex: "/mission/" } }) {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid
      }
    }

    btov: imageSharp(fluid: { originalName: { regex: "/btov.png/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    creathor: imageSharp(fluid: { originalName: { regex: "/creathor.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    vipartners: imageSharp(fluid: { originalName: { regex: "/vipartners.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    daniel: imageSharp(fluid: { originalName: { regex: "/daniel.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    luis: imageSharp(fluid: { originalName: { regex: "/luis.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    cyrill: imageSharp(fluid: { originalName: { regex: "/cyrill.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }

    myke: imageSharp(fluid: { originalName: { regex: "/myke.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    paul: imageSharp(fluid: { originalName: { regex: "/paul.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    luzius: imageSharp(fluid: { originalName: { regex: "/luzius.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    adrian: imageSharp(fluid: { originalName: { regex: "/adrian.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    elena: imageSharp(fluid: { originalName: { regex: "/elena.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
