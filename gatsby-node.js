const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

const { languages, defaultLanguage } = require('./src/i18n-config');

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise((resolve) => {
    deletePage(page);
    languages.forEach((language) => {
      const newPage = Object.assign({}, page, {
        originalPath: page.path,
        path: language === defaultLanguage ? page.path : `/${language}${page.path}`,
        context: { lang: language },
      });
      createPage(newPage);
    });

    resolve();
  });
};


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'markdown' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const component = path.resolve('./src/layouts/markdown.jsx');
  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { slug } = node.fields;
        createPage({
          path: slug,
          component,
          context: { slug },
        });
        createPage({
          path: `/de${slug}`,
          component,
          context: { slug, notLocalized: true },
        });
      });
      resolve();
    });
  });
};
