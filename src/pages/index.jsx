// @flow

import React, { useEffect, type Node } from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import sample from 'lodash/sample';

import { FeatureLinks } from '../components/Feature';
import SecurityRow from '../components/SecurityRow';
import {
  demoUrl,
  targetBlank,
  Hr,
  appUrl,
  trackSignup,
  forbesUrl,
  economistUrl,
  wirtschaftswocheUrl,
  isBrowser
} from '../layouts/utils';

const experiments = [
  {
    name: 'master',
    title: <Trans>The New Standard in Equity Management</Trans>,
    subtitle: <Trans>Made for startups, great for investors</Trans>
  },
  {
    name: 'lostTrack',
    title: <Trans>Round Modeling. Made Simple.</Trans>,
    subtitle: (
      <Trans>Lost track of who owns how many shares in your startup? Let Ledgy deal with it.</Trans>
    )
  },
  {
    name: 'modelFinancingRound',
    title: <Trans>Round Modeling. Made Simple.</Trans>,
    subtitle: <Trans>Want to model the new financing round for your company? Use Ledgy!</Trans>
  },
  {
    name: 'investorRelations',
    title: <Trans>Investor relations and equity management for startups</Trans>,
    subtitle: (
      <Trans>Share important documents with your investors, advisory board and employees.</Trans>
    )
  }
];

const experiment = isBrowser ? sample(experiments) : experiments[0];

const Header = ({ i18n, data }: Props) => {
  useEffect(() => {
    window.experiment = experiment.name;
    if (window.ga) window.ga('set', 'dimension1', window.experiment);
  }, []);
  return (
    <header className="header bg-ledgy home-banner px-1 text-left ">
      <div className="container">
        <div className="row gap-y mt-md-2 pb-4 pb-md-6">
          <div className="col-lg-6">
            <h1 className="text-white mb-2 mb-sm-3">{experiment.title}</h1>
            <h5 className="text-white font-weight-light pb-4 pb-lg-6 mb-0">
              {experiment.subtitle}
            </h5>

            <div className="text-white pb-5 pb-lg-7 banner-text">
              <Trans>
                Get your cap table and employee participation plans right, from the beginning. Make{' '}
                your financing rounds a success and engage your investors and employees. Know your{' '}
                data is safe and compliant.
              </Trans>
            </div>
            <a
              className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-outline-light"
              href={demoUrl}
              onClick={() => trackSignup('clickDemo')}
              {...targetBlank}
            >
              <Trans>See the Demo</Trans>
            </a>
            <a
              className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-light"
              href={`${appUrl}/signup`}
              onClick={trackSignup}
            >
              <Trans>Get Started Free</Trans>
            </a>
          </div>
          <div className="col-lg-6">
            <div id="tablet-ledgy" data-aos="fade-up">
              <Img {...data.laptop} alt={i18n.t`Screenshot of the Ledgy app`} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Testimonial = ({
  img,
  name,
  description,
  col
}: {
  img: Object,
  name: string,
  description: Node,
  col: number
}) => (
  <div
    className={`testimonial col-lg-${col} d-flex flex-column justify-content-start align-items-center mb-4 mb-lg-0`}
  >
    <div
      className="d-flex align-items-center justify-content-center mt-4"
      style={{ minHeight: '80px' }}
    >
      <Img {...img} alt={name} />
    </div>
    <div className="d-flex flex-column justify-content-between mt-4 h-100">
      <div className="testimonial-description">{description}</div>
      <small className="text-light mt-4">{name}</small>
    </div>
  </div>
);

const Reference = ({ img, name }: { img: Object, name: string }) => (
  <div className="col-12 col-md-6 col-lg-3 pb-6 pb-lg-0">
    <div className="d-flex justify-content-center">
      <Img {...img} alt={name} />
    </div>
  </div>
);

const AsFeaturedIn = (props: Props) => (
  <div className="black-and-white d-flex flex-column flex-md-row justify-content-center align-items-center">
    <span className="m-3 text-light">
      <Trans>As featured in</Trans>
    </span>
    <a href={forbesUrl} {...targetBlank}>
      <Img {...props.data.forbes} alt="Forbes DACH" className="m-4" />
    </a>
    <a href={wirtschaftswocheUrl} {...targetBlank}>
      <Img {...props.data.wirtschaftsWoche} alt="Wirtschafts Woche" className="m-4" />
    </a>
    <a href={economistUrl} {...targetBlank}>
      <Img {...props.data.theEconomist} alt="The Economist" className="m-4" />
    </a>
  </div>
);

const IndexPage = (props: Props) => (
  <div>
    <Header {...props} />
    <main className="main-content">
      <section className="section py-7" id="references">
        <FeatureLinks {...props} page="index" />
        <div className="container">
          <Hr />

          <header className="section-header mb-3">
            <h2 className="my-4">
              <Trans>Join hundreds of companies</Trans>
            </h2>
            <p>
              <Trans>
                that already use Ledgy for their equity management and investor relations
              </Trans>
            </p>
          </header>

          <div className="my-6 my-lg-8" />

          <div className="row align-content-center">
            <Reference img={props.data.viu} name="VIU Eyeware" />
            <Reference img={props.data.frontify} name="Frontify" />
            <Reference img={props.data.cryptofinance} name="Crypto Finance AG" />
            <Reference img={props.data.allthings} name="Allthings Technologies" />
          </div>

          <Hr marginX={10} />

          <div className="row text-center justify-content-between">
            <Testimonial
              col={4}
              name="Christian Menzi, Sherpany"
              img={props.data.sherpany}
              description={
                <Trans>
                  Finally, I have a reliable overview of all our shares, employee grants, and their
                  legal documents. So much better than the Excel I used before.
                </Trans>
              }
            />
            <Testimonial
              col={4}
              name="Laurent Grandidier, former CEO @ Xeltis"
              img={props.data.xeltis}
              description={
                <Trans>
                  We started to use Ledgy’s solution while preparing a large and complex series C.
                  It saved significant amount of time and headaches.
                </Trans>
              }
            />
            <Testimonial
              col={4}
              name="Tobias Gunzenhauser, CEO @ Yamo"
              img={props.data.yamo}
              description={
                <Trans>
                  I needed exactly that. Every founder should use Ledgy’s modeling tools for
                  financing rounds!
                </Trans>
              }
            />
          </div>

          <div className="mx-auto text-center pt-4 pt-lg-8 pb-4">
            <Link
              href
              to={`${props.prefix}/features/`}
              className="btn btn-block d-sm-inline btn-round btn-xl btn-outline-primary mt-6"
            >
              <Trans>Find out why they trust us</Trans>
            </Link>
          </div>

          <Hr />
          <SecurityRow {...props} />

          <Hr />
          <AsFeaturedIn {...props} />
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

    laptop: imageSharp(fluid: { originalName: { regex: "/tablet-history.png/" } }) {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    viu: imageSharp(fluid: { originalName: { regex: "/viu/" } }) {
      fixed(width: 120) {
        ...GatsbyImageSharpFixed
      }
    }
    cryptofinance: imageSharp(fluid: { originalName: { regex: "/cryptofinance/" } }) {
      fixed(width: 180) {
        ...GatsbyImageSharpFixed
      }
    }
    xeltis: imageSharp(fluid: { originalName: { regex: "/xeltis/" } }) {
      fixed(width: 150) {
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
    allthings: imageSharp(fluid: { originalName: { regex: "/allthings/" } }) {
      fixed(width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
    yamo: imageSharp(fluid: { originalName: { regex: "/yamo/" } }) {
      fixed(width: 70) {
        ...GatsbyImageSharpFixed
      }
    }
    forbes: imageSharp(fluid: { originalName: { regex: "/forbes/" } }) {
      fixed(width: 110) {
        ...GatsbyImageSharpFixed
      }
    }
    theEconomist: imageSharp(fluid: { originalName: { regex: "/the-economist/" } }) {
      fixed(width: 120) {
        ...GatsbyImageSharpFixed
      }
    }
    wirtschaftsWoche: imageSharp(fluid: { originalName: { regex: "/wirtschafts-woche/" } }) {
      fixed(width: 110) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
