// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../components/Features';
import SecurityRow from '../components/SecurityRow';
import { demoUrl, targetBlank } from '../layouts/utils';

const Header = ({ i18n, data }: Props) => {
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
      if (tablet && scrollY <= banner.clientHeight) {
        tablet.style.transform = `rotateZ(${scrollY / 50}deg) translateY(${scrollY /
          25}%) skew(-${scrollY / 100}deg)`;
      }
    }
  }, 50);
  return (
    <header className="header bg-ledgy main-banner">
      <div id="tablet-ledgy" data-aos="fade-up">
        <Img {...data.laptop} alt={i18n.t`Screenshot of the Ledgy app`} />
      </div>
      <div className="container">
        <div className="row gap-y mt-2 pb-4 pb-md-6">
          <div className="col-lg-6 mr-auto mb-4 mb-lg-0">
            <h1 className="text-white text-center text-md-left mb-1 mb-sm-3 mb-lg-6">
              <Trans>The Smart Equity Management Tool</Trans>
            </h1>

            <div className="text-white pb-4">
              <p>
                <Trans>
                  Stay on top of your vesting schedules, options, phantom plans, and convertible
                  loans. Get fast insights for financing rounds or exit negotiations using our
                  built-in modeling tools.
                  <br />
                  <br />
                  Are you an investor or employee? With the portfolio you will always have the
                  latest information about your investment and vesting at your fingertips.
                </Trans>
              </p>
            </div>
            <a
              className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-outline-light"
              href={demoUrl}
              {...targetBlank}
            >
              <Trans>See the demo</Trans>
            </a>
            <a className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-light" href="#try">
              <Trans>Get Started</Trans>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const Reference = ({ img, name }: { img: Object, name: string }) => (
  <div style={{ width: '200px' }} className="my-4">
    <Img {...img} alt={name} />
  </div>
);

const IndexPage = (props: Props) => (
  <div>
    <Header {...props} />
    <main className="main-content">
      <section className="section py-7" id="references">
        <div className="container">
          <header className="section-header mb-3">
            <h2 className="my-4">
              <Trans>You’re in good company</Trans>
            </h2>
            <p>
              <Trans className="mb-4">
                Many successful companies already use Ledgy for their equity plans and cap table
              </Trans>
            </p>
          </header>

          <div className="partner mx-auto py-4">
            <Reference img={props.data.bexio} name="Bexio" />
            <Reference img={props.data.cryptofinance} name="Crypto Finance AG" />
            <Reference img={props.data.viu} name="VIU Eyeware" />
            <Reference img={props.data.allthings} name="Allthings Technologies" />
            <Reference img={props.data.farmy} name="Farmy" />
            <Reference img={props.data.sherpany} name="Sherpany" />
            <Reference img={props.data.frontify} name="Frontify" />
            <Reference img={props.data.quitt} name="quitt.ch" />
          </div>

          <div className="mx-auto text-center pb-5">
            <Link
              href
              to={`${props.prefix}/features/`}
              className="btn btn-block d-sm-inline btn-round btn-xl btn-outline-primary mt-6"
            >
              <Trans>Find out why they trust us</Trans>
            </Link>
          </div>

          <FeatureLinks {...props} page="index" />

          <section className="section py-5">
            <hr className="my-7" />
            <header className="section-header mb-7">
              <h2>
                <Trans>Your data in safe hands</Trans>
              </h2>
            </header>

            <SecurityRow {...props} />
          </section>
        </div>
      </section>
    </main>
  </div>
);

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...FeaturesFragment

    laptop: imageSharp(fluid: { originalName: { regex: "/ipad.png/" } }) {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }

    viu: imageSharp(fluid: { originalName: { regex: "/viu/" } }) {
      fixed(width: 120) {
        ...GatsbyImageSharpFixed
      }
    }
    quitt: imageSharp(fluid: { originalName: { regex: "/quitt/" } }) {
      fixed(width: 80) {
        ...GatsbyImageSharpFixed
      }
    }
    cryptofinance: imageSharp(fluid: { originalName: { regex: "/cryptofinance/" } }) {
      fixed(width: 180) {
        ...GatsbyImageSharpFixed
      }
    }
    sherpany: imageSharp(fluid: { originalName: { regex: "/sherpany/" } }) {
      fixed(width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
    frontify: imageSharp(fluid: { originalName: { regex: "/frontify/" } }) {
      fixed(width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
    bexio: imageSharp(fluid: { originalName: { regex: "/bexio/" } }) {
      fixed(width: 110) {
        ...GatsbyImageSharpFixed
      }
    }
    allthings: imageSharp(fluid: { originalName: { regex: "/allthings/" } }) {
      fixed(width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
    farmy: imageSharp(fluid: { originalName: { regex: "/farmy/" } }) {
      fixed(width: 130) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
