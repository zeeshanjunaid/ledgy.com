// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { FeatureLinks } from '../components/Features';
import SecurityRow from '../components/SecurityRow';
import { demoUrl } from '../layouts/utils';

const Header = ({ i18n, data }: Props) => (
  <header className="header bg-ledgy pb-0">
    <div className="container">
      <div className="row align-items-end gap-y mt-5 pb-7">

        <div className="col-lg-6 ml-auto">
          <div className="mb-4 text-white">
            <h1><Trans>The missing accounting<br />software for your equity</Trans></h1>
            <p>
              <Trans>
                Stay on top of your vesting schedules, options, phantom plans, and
                convertible loans. Get fast insights for financing rounds or exit
                negotiations using our built-in modeling tools.
                <br /><br />
                Are you an investor or employee? With the portfolio you will always have the
                latest information about your investment and vesting at your fingertips.
              </Trans>
            </p>
          </div>
          <a className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-outline-light" href={demoUrl} target="_blank" rel="noopener noreferrer"><Trans>See the demo</Trans></a>
          <a className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-light" href="#try"><Trans>Get Started</Trans></a>
        </div>

        <div className="col-lg-6 order-lg-first" data-aos="fade-up">
          <Img {...data.laptop} alt={i18n.t`Screenshot of the Ledgy app`} />
        </div>


      </div>
    </div>
  </header>
);

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
            <h2 className="my-4"><Trans>You’re in good company</Trans></h2>
            <p>
              <Trans>
                Many successful companies already use Ledgy for their equity plans and cap table
              </Trans>
            </p>
          </header>

          <div className="partner">
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
            <Link href to={`${props.prefix}/features/`} className="btn btn-block d-sm-inline btn-round btn-xl btn-outline-primary mt-6" >
              <Trans>Find out why they trust us</Trans>
            </Link>
          </div>


          <FeatureLinks {...props} page="index" />

          <section className="section py-5">
            <hr className="my-7" />
            <header className="section-header mb-7">
              <h2><Trans>Your data in safe hands</Trans></h2>
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

    laptop: imageSharp(fluid: { originalName: {regex: "/laptop.png/"} }) {
      fluid(maxWidth: 2000) { ...GatsbyImageSharpFluid_noBase64 }
    }

    viu: imageSharp(fluid: { originalName: {regex: "/viu/"} }) {
      fixed(width: 120) { ...GatsbyImageSharpFixed }
    }
    quitt: imageSharp(fluid: { originalName: {regex: "/quitt/"} }) {
      fixed(width: 80) { ...GatsbyImageSharpFixed }
    }
    cryptofinance: imageSharp(fluid: {originalName: {regex: "/cryptofinance/"} }) {
      fixed(width: 180) { ...GatsbyImageSharpFixed }
    }
    sherpany: imageSharp(fluid: { originalName: {regex: "/sherpany/"} }) {
      fixed(width: 150) { ...GatsbyImageSharpFixed }
    }
    frontify: imageSharp(fluid: { originalName: {regex: "/frontify/"} }) {
      fixed(width: 150) { ...GatsbyImageSharpFixed }
    }
    bexio: imageSharp(fluid: { originalName: {regex: "/bexio/"} }) {
      fixed(width: 110) { ...GatsbyImageSharpFixed }
    }
    allthings: imageSharp(fluid: { originalName: {regex: "/allthings/"} }) {
      fixed(width: 150) { ...GatsbyImageSharpFixed }
    }
    farmy: imageSharp(fluid: { originalName: {regex: "/farmy/"} }) {
      fixed(width: 130) { ...GatsbyImageSharpFixed }
    }
  }
`;
