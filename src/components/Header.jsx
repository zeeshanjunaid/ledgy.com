// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import Img from 'gatsby-image';
import { LanguageHint } from '../components/Markdown';
import { calculatorUrl, targetBlank, appUrl, trackSignup } from '../layouts/utils';

export const DefaultHeader = ({
  data,
  lang
}: {|
  lang: string,
  data: {| contentfulPage: Page, site: { siteMetadata: { siteUrl: string } } |}
|}) => {
  const { title, language } = data.contentfulPage;

  return (
    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>{title}</h1>
            <LanguageHint lang={lang} documentLang={language || 'en'} />
          </div>
        </div>
      </div>
    </header>
  );
};

export const CalculatorHeader = () => {
  return (
    <header className="header bg-ledgy home-banner px-1 text-left ">
      <div className="container">
        <div className="row gap-y mt-md-2 pb-4 pb-md-6">
          <div className="col-lg-6">
            <h1 className="text-white mb-2 mb-sm-3">
              The calculator you need if you’re getting ready to raise capital
            </h1>
            <h5 className="text-white font-weight-light pb-4 pb-lg-6 mb-0">
              With this calculator you can:
            </h5>

            <div className="text-white pb-5 pb-lg-7 banner-text">
              <ol>
                <li>
                  See <b>who owns how many shares</b> after fundraising
                </li>
                <li>Do calculations that can only be solved numerically</li>
                <li>
                  Model across <b>multiple funding rounds</b>
                </li>
                <li>
                  <b>Compare</b> different funding scenarios - high valuation, low valuation,
                  down-round, pre vs post-money valuation, share dilution because of convertibles or
                  pools...
                </li>
              </ol>
            </div>
            <a
              className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-outline-light"
              href={calculatorUrl}
              onClick={() => trackSignup('clickCalculator')}
              {...targetBlank}
            >
              <Trans>Go to Calculator</Trans>
            </a>
            <a
              className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-light"
              href={`${appUrl}/signup`}
              onClick={() => trackSignup('clickProductHunt')}
            >
              <Trans>Product Hunt</Trans>
            </a>
          </div>
          <div className="col-lg-6">
            <div id="tablet-ledgy" data-aos="fade-up">
              <Img
                src="https://cdn.vox-cdn.com/thumbor/e_Tlj6lWt2q-vRLEaUd17_tCtnE=/0x0:3797x2539/1520x1013/filters:focal(1596x967:2202x1573):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/53504317/GettyImages_630805159.0.jpg"
                alt="Ledgy financing round calculator"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
