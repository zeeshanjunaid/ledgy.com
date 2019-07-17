const path = require('path');

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

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  [
    ['/esop', '/help/employee-participation-guide/'],
    ['/esop/', '/help/employee-participation-guide/'],
    ['/ESOP', '/help/employee-participation-guide/'],
    ['/ESOP/', '/help/employee-participation-guide/']
  ].forEach(([fromPath, toPath]) => {
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
  return new Promise(resolve => {
    graphql(`
      {
        allContentfulPage(limit: 1000) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) throw result.errors;

      result.data.allContentfulPage.edges.forEach(({ node }) => {
        const { slug, id } = node;
        const context = { id };
        createPage({ path: slug, component, context });
        languages.forEach(lang => createPage({ path: `/${lang}/${slug}`, component, context }));
      });
      resolve();
    });
  });
};
