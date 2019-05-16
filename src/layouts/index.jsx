// @flow

import React, { useEffect, type Node } from 'react';
import { StaticQuery, graphql, Link, navigate } from 'gatsby';
import { I18nProvider, withI18n, Trans } from '@lingui/react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faAngellist,
  faMedium
} from '@fortawesome/free-brands-svg-icons';
import 'typeface-roboto-slab'; // eslint-disable-line import/extensions
import 'typeface-work-sans'; // eslint-disable-line import/extensions
import 'katex/dist/katex.min.css';
import 'prism-themes/themes/prism-ghcolors.css';

import { Title, name, appUrl, loadScript, targetBlank, animateTablet } from './utils';
import { catalogs, langFromPath, langPrefix, getLocale, deprefix } from '../i18n-config';
import SignupForm from '../components/SignupForm';

import '../assets/scss/page.scss';

import logoDefault from '../img/logo_black.png';
import logoInverse from '../img/logo_white.png';

const hasFooter = (pathname: string) => !pathname.match(/contact/);

type LayoutProps = {
  ...$Exact<Props>,
  lang: string,
  location: { pathname: string }
};

const Logo = (props: { prefix: string, inverse: boolean }) => (
  <Link href to={`${props.prefix}/#start`} className="navbar-brand">
    <img className="logo-dark" src={logoDefault} width={100} height={40} alt={name} />
    {props.inverse && (
      <img className="logo-light" src={logoInverse} width={100} height={40} alt={name} />
    )}
  </Link>
);

const Nav = (props: LayoutProps) => (
  <nav className="navbar navbar-expand-lg navbar-light navbar-stick-dark" data-navbar="sticky">
    <div className="container flex-nowrap">
      <div className="navbar-left">
        <button className="navbar-toggler">&#9776;</button>
        <Logo {...props} inverse />
      </div>

      <section className="navbar-mobile">
        <h6 className="d-sm-none">Ledgy</h6>
        <nav className="nav nav-navbar ml-auto">
          <Link className="nav-link" href to={`${props.prefix}/features/`}>
            <Trans>Features</Trans>
          </Link>
          <Link className="nav-link" href to={`${props.prefix}/pricing/`}>
            <Trans>Pricing</Trans>
          </Link>
          <Link className="nav-link" href to={`${props.prefix}/blog/`}>
            <Trans>Blog</Trans>
          </Link>
        </nav>

        <span className="navbar-divider" />
      </section>

      <div className="navbar-right">
        <a className="btn btn-round btn-outline-light ml-lg-4 mr-2" href={appUrl}>
          <Trans>Log In</Trans>
        </a>
        <a className="btn btn-round btn-light ml-lg-0 mr-2" href="#try">
          <Trans>Sign Up</Trans>
        </a>
      </div>
    </div>
  </nav>
);

const Footer = (props: LayoutProps) => (
  <div>
    {hasFooter(props.location.pathname) && (
      <section className="section bg-pale-secondary" id="try">
        <div className="container text-center signup py-md-7">
          <h2>
            <Trans>Try Ledgy now for free</Trans>
          </h2>

          <p className="text-muted">
            <Trans>No credit card required</Trans>
          </p>

          <SignupForm {...props} />
        </div>
      </section>
    )}
    <footer className="footer pb-9 pt-7 py-md-7 px-4 text-white">
      <div className="row gap-y justify-content-md-center">
        <div className="col-6 col-md-2 pl-6 order-md-2">
          <h6 className="mb-4 mt-1">
            <strong>
              <Trans>Company</Trans>
            </strong>
          </h6>
          <div className="nav flex-column">
            <Link className="nav-link" href to={`${props.prefix}/about-us/`}>
              <Trans>About us</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/blog/`}>
              <Trans>Blog</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/security/`}>
              <Trans>Security</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/privacy/`}>
              <Trans>Privacy</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/jobs/`}>
              <Trans>Career</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/contact/`}>
              <Trans>Contact & Imprint</Trans>
            </Link>
          </div>
        </div>

        <div className="col-6 col-md-2 pl-6 order-md-4">
          <h6 className="mb-4 mt-1">
            <strong>
              <Trans>Help</Trans>
            </strong>
          </h6>
          <div className="nav flex-column">
            <Link className="nav-link" href to={`${props.prefix}/help/getting-started/`}>
              <Trans>Getting Started</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/help/faq/`}>
              <Trans>FAQ</Trans>
            </Link>
          </div>
          <h6 className="mb-4 mt-1">
            <strong>
              <Trans>Blog</Trans>
            </strong>
          </h6>
          <div className="nav flex-column">
            <Link
              className="nav-link"
              href
              to={`${props.prefix}/blog/pre-and-post-money-option-pools/`}
            >
              Option Pools
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/blog/convertible-loans/`}>
              Convertible Loans
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/updates/kpis-and-reports/`}>
              KPIs & Reports
            </Link>
            <Link
              className="nav-link"
              href
              to={`${props.prefix}/help/employee-participation-guide/`}
            >
              Employee Participation
            </Link>
          </div>
        </div>

        <div className="col-6 col-md-2 pl-6 order-md-3">
          <h6 className="mb-4 mt-1">
            <strong>
              <Trans>Product</Trans>
            </strong>
          </h6>
          <div className="nav flex-column">
            <Link className="nav-link" href to={`${props.prefix}/features/`}>
              <Trans>Features</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/features/captable/`}>
              <Trans>Cap Table</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/features/modeling/`}>
              <Trans>Modeling</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/features/esop/`}>
              <Trans>Employee Incentives</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/features/collaboration/`}>
              <Trans>Due Diligence</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/features/investors/`}>
              <Trans>Investors</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/pricing/`}>
              <Trans>Pricing</Trans>
            </Link>
          </div>
        </div>

        <div className="col-6 col-md-2 pl-6 order-md-4">
          <h6 className="mb-4 mt-1">
            <strong>
              <Trans>Legal</Trans>
            </strong>
          </h6>
          <div className="nav flex-column">
            <Link className="nav-link" href to={`${props.prefix}/legal/terms/`}>
              <Trans>Terms of Service</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/legal/privacy-policy/`}>
              <Trans>Privacy Policy</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/legal/cookie-policy/`}>
              <Trans>Cookie Policy</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/legal/gdpr/`}>
              <Trans>GDPR</Trans>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-2 pl-6 order-md-1">
          <Link href to={`${props.prefix}/#start`} className="navbar-brand">
            <img className="logo-light" src={logoInverse} width={100} height={40} alt={name} />
          </Link>

          <div className="social my-2">
            {[
              ['https://twitter.com/Ledgy', faTwitter, 'Twitter'],
              ['https://www.linkedin.com/company/ledgy', faLinkedin, 'LinkedIn'],
              ['https://https://www.facebook.com/LedgyCom/.com/Ledgy', faFacebook, 'Facebook'],
              ['https://angel.co/ledgy', faAngellist, 'AngelList'],
              ['https://blog.ledgy.com', faMedium, 'Medium']
            ].map(([href, icon, title]) => (
              <a href={href} key={title} {...targetBlank}>
                <FontAwesomeIcon icon={icon} title={title} />
              </a>
            ))}
          </div>
          <div className="mt-4">
            <div className="dropdown">
              <button
                className="btn btn-round btn-outline-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <Trans>Language</Trans>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
                style={{ minWidth: '7rem' }}
              >
                <Link className="dropdown-item d-flex" to={deprefix(props.location.pathname)} href>
                  <span className="mr-1" role="img" aria-label="English">
                    🍔
                  </span>
                  English
                </Link>
                <Link
                  className="dropdown-item d-flex"
                  to={`/de${deprefix(props.location.pathname)}`}
                  href
                >
                  <span className="mr-1" role="img" aria-label="Deutsch">
                    🥨
                  </span>
                  Deutsch
                </Link>
                <Link
                  className="dropdown-item d-flex"
                  to={`/fr${deprefix(props.location.pathname)}`}
                  href
                >
                  <span className="mr-1" role="img" aria-label="Français">
                    🥖
                  </span>
                  Français
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-provide="map" />
    </footer>
  </div>
);

type SiteProps = {
  ...$Exact<Props>,
  lang: string,
  children: Node,
  location: { pathname: string }
};

const Initialize = ({ branch, pathname }: {| branch: string, pathname: string |}) => {
  useEffect(() => {
    animateTablet();
    window.branch = branch;
    if (window.ga) window.ga('set', 'dimension1', branch);

    setTimeout(async () => {
      require('../assets/js/page'); // eslint-disable-line global-require
      require('../assets/js/script'); // eslint-disable-line global-require

      if (getLocale() === 'de' && !pathname.startsWith('/de')) {
        navigate(`/de${pathname}`);
      }

      await loadScript('https://wchat.eu.freshchat.com/js/widget.js');
      window.fcSettings = {
        token: 'e9a5ae2c-ad84-42c8-8786-a893acbca8b3',
        host: 'https://wchat.eu.freshchat.com',
        siteId: 'landing-page',
        config: {
          cssNames: {
            widget: 'custom_fc_frame',
            expanded: 'custom_fc_expanded'
          },
          headerProperty: { backgroundColor: '#0086a9' }
        }
      };
      await loadScript('https://snippets.freshchat.com/js/fc-pre-chat-form-v2.js');
      window.fcPreChatform.fcWidgetInit({
        heading: 'Ledgy',
        textBanner: 'Please tell us a bit about yourself.',
        SubmitLabel: 'Go',
        fields: {
          field1: {
            type: 'name',
            label: 'Name',
            fieldId: 'name',
            required: 'yes',
            error: 'Please enter your name'
          },
          field2: {
            type: 'email',
            label: 'Email',
            fieldId: 'email',
            required: 'yes',
            error: 'Please enter a valid email'
          }
        }
      });
      window.fcWidget.init(window.fcSettings);
    }, 1414);
  }, []);
  return null;
};

const TemplateWrapper = withI18n()((props: SiteProps) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            branch
          }
        }
      }
    `}
    render={data => {
      const { i18n } = props;
      const prefix = langPrefix(props.lang);
      const { siteUrl, branch } = data.site.siteMetadata;
      const thumbnailUrl = `${siteUrl}/thumbnail.png`;
      const { pathname } = props.location;
      const EnPathname = `${siteUrl}${pathname.startsWith('/de') ? pathname.substr(3) : pathname}`;
      return (
        <div>
          <Title
            title={`Ledgy | ${i18n.t`The New Standard in Equity Management`}`}
            description={i18n.t`Get your cap table and employee participation plans right, from the beginning. Make your financing rounds a success and engage your investors and employees. Know your data is safe and compliant. Try now for free!`}
            thumbnailUrl={thumbnailUrl}
          />
          <Initialize pathname={pathname} branch={branch} />
          <Helmet>
            <html lang={props.lang} />
            <meta
              name="keywords"
              content={i18n.t`cap table, stock ledger, share register, startup, modeling, financing round, equity, esop, phantom, option plan, virtual, portfolio, reporting, investors`}
            />
            <meta name="author" content="Ledgy" />

            {/* Facebook social card */}
            <meta property="og:site_name" content={name} />
            <meta property="og:type" content="website" />

            {/* Twitter social card */}
            <meta name="twitter:site" content="@Ledgy" />
            <meta name="twitter:card" content="summary_large_image" />

            <link rel="alternate" href={EnPathname} hrefLang="x-default" />
            <link rel="alternate" href={EnPathname} hrefLang="en" />
            <link
              rel="alternate"
              href={`${siteUrl}${pathname.startsWith('/de') ? '' : '/de'}${pathname}`}
              hrefLang="de"
            />

            {/* Disable AOS for Google */}
            <noscript>
              {`
                <style>
                  [data-aos] {
                      opacity: 1 !important;
                      transform: translate(0) scale(1) !important;
                  }
                </style>
              `}
            </noscript>
          </Helmet>
          <Nav {...props} prefix={prefix} />
          {React.cloneElement(props.children, { prefix })}
          <Footer {...props} prefix={prefix} />
        </div>
      );
    }}
  />
));

export default (props: {| location: {| pathname: string |} |}) => {
  const lang = langFromPath(props.location.pathname);
  return (
    <I18nProvider language={lang} catalogs={catalogs}>
      <TemplateWrapper {...props} lang={lang} />
    </I18nProvider>
  );
};

// eslint-disable-next-line
console.log(`
██╗     ███████╗██████╗  ██████╗██╗   ██╗
██║     ██╔════╝██╔══██╗██╔════╝╚██╗ ██╔╝
██║     █████╗  ██║  ██║██║  ███╗╚████╔╝
██║     ██╔══╝  ██║  ██║██║   ██║ ╚██╔╝
███████╗███████╗██████╔╝╚██████╔╝  ██║
╚══════╝╚══════╝╚═════╝  ╚═════╝   ╚═╝

==========================

Looking for a job?
https://www.ledgy.com/jobs

==========================
`);
