const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

const { languages, defaultLanguage } = require('./src/i18n-config');

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise(resolve => {
    if (!page.component.endsWith('.mdx')) {
      deletePage(page);
      languages.forEach(language => {
        const newPage = Object.assign({}, page, {
          originalPath: page.path,
          path: language === defaultLanguage ? page.path : `/${language}${page.path}`,
          context: { lang: language }
        });
        createPage(newPage);
      });
    }

    resolve();
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: 'markdown' });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  [['/jobs/', '/jobs/software-engineer/']].forEach(([fromPath, toPath]) => {
    const redirectInBrowser = true;
    createRedirect({ fromPath, toPath, redirectInBrowser });
    languages.forEach(lang =>
      createRedirect({
        fromPath: `/${lang}${fromPath}`,
        toPath: `/${lang}${toPath}`,
        redirectInBrowser
      })
    );
  });

  const component = path.resolve('./src/layouts/markdown.jsx');
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.error(result.errors); // eslint-disable-line no-console
        reject(result.errors);
      }
      result.data.allMdx.edges.forEach(({ node }) => {
        const { slug } = node.fields;
        createPage({
          path: slug,
          component,
          context: { id: node.id }
        });
        languages.forEach(lang =>
          createPage({
            path: `/${lang}${slug}`,
            component,
            context: { id: node.id, notLocalized: true }
          })
        );
      });
      resolve();
    });
  });
};
