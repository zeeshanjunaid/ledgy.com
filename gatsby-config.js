/* eslint-disable no-undef */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const { CONTEXT, URL, DEPLOY_PRIME_URL, NODE_ENV } = process.env;
const src = `${__dirname}/src`;

module.exports = {
  siteMetadata: {
    siteUrl:
      (CONTEXT === "production" && URL) ||
      DEPLOY_PRIME_URL ||
      `http://localhost:${NODE_ENV === "production" ? 9 : 8}000`,
    branch: process.env.BRANCH || "development",
    segmentDestinations: (process.env.SEGMENT_DESTINATIONS || "").split(","),
  },
  proxy: [
    { prefix: "/engage", url: "https://api.mixpanel.com" },
    { prefix: "/track", url: "https://api.mixpanel.com" },
    {
      prefix: "/submit/6881367",
      url: "https://api.hsforms.com/submissions/v3/integration",
    },
  ],
  plugins: [
    "gatsby-plugin-layout",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-nprogress",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "img", path: `${src}/img` },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "ojxc8xtj0owo",
        accessToken: "N8Hg4X0k8xiFece3rXF7V96gUwUDC_0AXLKVDjO5U0Y",
        host: "master" ? "cdn.contentful.com" : "preview.contentful.com",
        downloadLocal: true,
        assetDownloadWorkers: 1,
      },
    },
    {
      resolve: "gatsby-source-greenhouse-job-board",
      options: {
        boardToken: "ledgy",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        // eslint-disable-next-line global-require
        remarkPlugins: [require("remark-math"), require("remark-html-katex")],
        gatsbyRemarkPlugins: [
          "gatsby-remark-prismjs",
          "gatsby-remark-unwrap-images",
        ],
      },
    },
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Ledgy",
        short_name: "Ledgy",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0086a9",
        display: "minimal-ui",
        icons: [
          {
            src: "/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [
            "Referrer-Policy: strict-origin-when-cross-origin",
            "Access-Control-Allow-Origin: https://www.ledgy.com",
            "Access-Control-Allow-Credentials: true",
            "Strict-Transport-Security: max-age=63072000; includeSubDomains; preload",
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          runtimeCaching: [
            { urlPattern: /(\.js$|\.css$|static\/)/, handler: `CacheFirst` },
            {
              urlPattern: /^\/.*\/page-data\/.*\.json/,
              handler: `NetworkFirst`,
            },
            {
              urlPattern:
                /^\/.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: `StaleWhileRevalidate`,
            },
            {
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: `StaleWhileRevalidate`,
            },
          ],
        },
      },
    },
  ],
};
