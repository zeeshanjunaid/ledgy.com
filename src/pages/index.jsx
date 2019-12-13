// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../components/Feature';
import SecurityRow from '../components/SecurityRow';
import { Hr } from '../layouts/utils';
import { targetBlank, forbesUrl, economistUrl, wirtschaftswocheUrl, top100Url } from '../helpers';
import { HomePageHeader } from '../components/HomePageHeader';
import { Testimonial } from '../components/Testimonial';

const Reference = ({ img, name }: { img: Object, name: string }) => (
  <div className="col-12 col-md-6 col-lg-3 pb-6 pb-lg-0 d-flex justify-content-center align-items-center">
    <Img {...img} alt={name} />
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
    <a href={top100Url} {...targetBlank}>
      <Img {...props.data.top100} alt="TOP 100 Swiss Startup Award" className="m-4" />
    </a>
  </div>
);

const IndexPage = (props: Props) => (
  <div>
    <HomePageHeader {...props} />

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
            <Reference img={props.data.nakd} name="NA-KD" />
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

    tablet: imageSharp(fluid: { originalName: { regex: "/tablet-dashboard.png/" } }) {
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
    nakd: imageSharp(fluid: { originalName: { regex: "/nakd/" } }) {
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
    top100: imageSharp(fluid: { originalName: { regex: "/top100/" } }) {
      fixed(width: 120) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
