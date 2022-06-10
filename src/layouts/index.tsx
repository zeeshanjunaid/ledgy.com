import React, { ReactElement, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import 'typeface-open-sans';
import 'katex/dist/katex.min.css';
import 'prism-themes/themes/prism-ghcolors.css';
import '../styles/_index.scss';

import { dynamicI18n, loadLocales, saveGoogleAdsClickId } from '../helpers';
import { regionFromPath, regionPrefix, deprefix } from '../i18n-config';
import {
  HelmetIndexLayout,
  Footer,
  Loader,
  Nav,
  PublicityBanner,
  CookieBanner,
  PopUpCard,
} from '../components';
import { Title } from './utils';

type AppProps = LayoutProps & {
  children: ReactElement;
};

const metaDataQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        segmentDestinations
      }
    }
    allContentfulSiteMetadata {
      edges {
        node {
          description
          title
          keywords
        }
      }
    }
  }
`;

const App = ({ children, ...props }: AppProps) => {
  const data = useStaticQuery(metaDataQuery);
  const { region, location } = props;
  const { site, allContentfulSiteMetadata } = data;
  const { siteUrl, segmentDestinations } = site.siteMetadata;
  const thumbnailUrl = `${siteUrl}/thumbnail-874d5c.png`;
  const { node }: { node: SiteMetaProps } = allContentfulSiteMetadata.edges[0];
  const { title, description, keywords } = node;

  const prefix = regionPrefix(region);
  const pathname = deprefix(location.pathname);
  const isAppShell = pathname.includes('offline-plugin-app-shell-fallback');
  const isDemoPage = pathname.includes('demo');
  const showInternalNavigation =
    (!pathname.includes('lp-') && !pathname.includes('partner')) ||
    pathname.includes('partnerships');

  return (
    <div>
      <Title
        title={dynamicI18n(title)}
        description={dynamicI18n(description)}
        thumbnailUrl={thumbnailUrl}
      />
      <HelmetIndexLayout lang={region} siteUrl={siteUrl} pathname={pathname} keywords={keywords} />
      <Nav {...props} prefix={prefix} showInternalNavigation={showInternalNavigation} />
      {isAppShell ? (
        <Loader />
      ) : (
        <>
          <div className="banner-container position-fixed d-flex flex-column">
            <PublicityBanner pathname={pathname} />
            <CookieBanner segmentDestinations={segmentDestinations} />
            <PopUpCard pathname={pathname} />
          </div>
          {React.cloneElement(children, { prefix, region })}
          {showInternalNavigation && !isDemoPage && <Footer {...props} prefix={prefix} />}
        </>
      )}
    </div>
  );
};

const Main = (props: AppProps) => {
  const region = regionFromPath(props.location.pathname);
  useMemo(loadLocales, []);
  // useMemo(() => i18n.activate(region), [region]);
  i18n.activate('global');
  useMemo(saveGoogleAdsClickId, []);
  return (
    <I18nProvider i18n={i18n}>
      <App {...props} region={region} />
    </I18nProvider>
  );
};

export default Main;

// eslint-disable-next-line
console.log(`
██╗     ███████╗██████╗  ██████╗██╗   ██╗
██║     ██╔════╝██╔══██╗██╔════╝╚██╗ ██╔╝
██║     █████╗  ██║  ██║██║  ███╗╚████╔╝
██║     ██╔══╝  ██║  ██║██║   ██║ ╚██╔╝
███████╗███████╗██████╔╝╚██████╔╝  ██║
╚══════╝╚══════╝╚═════╝  ╚═════╝   ╚═╝

==========================

Looking for a job? 🤓
https://ledgy.com/careers

==========================
`);
