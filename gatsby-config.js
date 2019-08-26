const {
  CONTEXT,
  URL,
  DEPLOY_PRIME_URL,
  NODE_ENV,
  BRANCH,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN
} = process.env;
const src = `${__dirname}/src`;

module.exports = {
  siteMetadata: {
    siteUrl:
      (CONTEXT === 'production' && URL) ||
      DEPLOY_PRIME_URL ||
      `http://localhost:${NODE_ENV === 'production' ? 9 : 8}000`,
    branch: BRANCH || 'development'
  },
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-plugin-flow',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-nprogress',
    'gatsby-plugin-sitemap',
    { resolve: 'gatsby-source-filesystem', options: { name: 'img', path: `${src}/img` } },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        host: BRANCH ? 'cdn.contentful.com' : 'preview.contentful.com',
        downloadLocal: true
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-katex',
          'gatsby-remark-prismjs',
          'gatsby-remark-unwrap-images'
        ]
      }
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-102106007-1', allowLinker: true }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ledgy',
        short_name: 'Ledgy',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0086a9',
        display: 'minimal-ui',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            [
              "Content-Security-Policy: default-src 'self'",
              "img-src 'self' data: https://csi.gstatic.com https://www.google-analytics.com https://maps.gstatic.com https://maps.googleapis.com https://stats.g.doubleclick.net https://dc.ads.linkedin.com/",
              "object-src 'none'",
              "font-src 'self' data: https://fonts.gstatic.com",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://wchat.eu.freshchat.com/js/ https://snippets.freshchat.com/js/ https://www.googletagmanager.com/ https://www.google-analytics.com/ https://sjs.bizographics.com/ https://maps.googleapis.com/ https://www.linkedin.com/px/ https://px.ads.linkedin.com/",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/ https://wchat.eu.freshchat.com/css/ https://snippets.freshchat.com/css/ https://maps.googleapis.com/maps/api/",
              "frame-src 'self' https://wchat.eu.freshchat.com/ https://ledgy.eu.webpush.freshchat.com/ https://www.youtube.com/",
              "connect-src 'self' https://maps.gstatic.com/"
            ].join('; '),
            'Referrer-Policy: strict-origin-when-cross-origin',
            'Access-Control-Allow-Origin: https://www.ledgy.com'
          ]
        }
      }
    },
    { resolve: 'gatsby-plugin-netlify-cache', options: { cachePublic: true } },
    'gatsby-plugin-offline'
  ]
};
