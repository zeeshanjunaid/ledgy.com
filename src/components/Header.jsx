// @flow

import React from 'react';
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
    <header className="header bg-ledgy home-banner calculator-banner px-1 text-left">
      <div className="container">
        <div className="row gap-y mt-md-2 pb-4 pb-md-6">
          <div className="col-lg-6">
            <h1 className="text-white mb-2 mb-sm-3">
              This is the calculator you need if you’re getting ready to raise capital
            </h1>
            <h5 className="text-white font-weight-light pb-4 mb-0">
              With this calculator you can:
            </h5>

            <div className="text-white pb-5 pb-lg-7 banner-text">
              <ol>
                <li>
                  See <strong>who owns what</strong> after fundraising
                </li>
                <li>
                  Look more professional during <strong>term sheet negotiations</strong>
                </li>
                <li>
                  Understand common <strong>fundraising terms</strong>
                </li>
                <li>
                  Model your company’s cap table through <strong>multiple funding rounds</strong>
                </li>
                <li>
                  Compare dilution results when adding <strong>convertible loans</strong> and
                  employee pools
                </li>
              </ol>
            </div>
            <a
              className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-success"
              href={calculatorUrl}
              onClick={() => trackSignup('clickCalculator')}
              {...targetBlank}
            >
              Launch Calculator
            </a>
            <a
              className="d-sm-inline btn-xl mx-1"
              href={`${appUrl}/signup`}
              onClick={() => trackSignup('clickProductHunt')}
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=169028&amp;theme=light"
                alt="Subscriptions by Cashfree - A comprehensive recurring payment solution for India 🇮🇳 | Product Hunt Embed"
                style={{ width: '25%', height: '25%' }}
              />
            </a>
          </div>
          <div className="col-lg-6">
            <div id="tablet-ledgy" data-aos="fade-up">
              <a
                className="d-sm-inline mx-auto"
                href="https://www.producthunt.com/posts/subscriptions-by-cashfree?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-subscriptions-by-cashfree"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=169028&amp;theme=light"
                  alt="Subscriptions by Cashfree - A comprehensive recurring payment solution for India 🇮🇳 | Product Hunt Embed"
                  style={{ width: '50%', height: '50%' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
