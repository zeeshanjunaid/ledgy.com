import { Helmet } from 'react-helmet';
import React from 'react';
import { name, getLdJson } from '../helpers';
import { regionPrefix } from '../i18n-config';
import { ClickCease } from './ClickCease';

export const HelmetIndexLayout = ({
  lang,
  siteUrl,
  pathname,
}: {
  lang: string;
  siteUrl: string;
  pathname: string;
}) => (
  <>
    <ClickCease />
    <Helmet>
      <html lang={lang} />
      <meta name="author" content="Ledgy" />
      <script defer type="application/ld+json">
        {getLdJson(siteUrl)}
      </script>

      {/* Facebook social card */}
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${pathname}`} />

      {/* Twitter social card */}
      <meta name="twitter:site" content="@Ledgy" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="facebook-domain-verification" content="taat2n50g23sb14q9tq4dycvqkvqms" />

      <link rel="alternate" href={`${siteUrl}${pathname}`} hrefLang="x-default" />
      <link rel="alternate" href={`${siteUrl}/uk${pathname}`} hrefLang="en-gb" />
      <link rel="alternate" href={`${siteUrl}/de${pathname}`} hrefLang="de" />
      <link rel="alternate" href={`${siteUrl}/fr${pathname}`} hrefLang="fr" />
      <link rel="canonical" href={`${siteUrl}${regionPrefix(lang)}${pathname}`} />

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
  </>
);
