const path = require('path');
const { redirects } = require('./src/redirects');

const { languages, defaultLanguage } = require('./src/i18n-config');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};

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
  const createLocalizedPages = (pagePath, component, context) => {
    createPage({ path: pagePath, component, context });
    languages.forEach(lang => createPage({ path: `/${lang}${pagePath}`, component, context }));
  };

  redirects.forEach(([from, toPath]) => {
    const redirectInBrowser = true;
    [from, `${from}/`].forEach(fromPath => {
      createRedirect({ fromPath, toPath, redirectInBrowser });
      languages.forEach(lang =>
        createRedirect({
          fromPath: `/${lang}${fromPath}`,
          toPath: `/${lang}${toPath}`,
          redirectInBrowser
        })
      );
    });
  });

  const pageComponent = path.resolve('./src/layouts/page.jsx');
  const createPages = new Promise(resolve => {
    graphql(`
      {
        allContentfulPage(limit: 1000) {
          edges {
            node {
              id
              slug
              namespace
            }
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) throw errors;
      data.allContentfulPage.edges.forEach(({ node }) => {
        const { id, slug, namespace } = node;
        const pagePath = `${namespace}${slug}/`;
        const context = { id };
        createLocalizedPages(pagePath, pageComponent, context);
      });
      resolve();
    });
  });
  const customerStoryComponent = path.resolve('./src/layouts/customerStory.jsx');
  const createCustomerStories = new Promise(resolve => {
    graphql(`
      {
        allContentfulCustomerStory(limit: 1000) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) throw errors;
      data.allContentfulCustomerStory.edges.forEach(({ node: { id, slug } }) => {
        const pagePath = `customer-stories/${slug}/`;
        const context = { id };
        createLocalizedPages(pagePath, customerStoryComponent, context);
      });
      resolve();
    });
  });
  return Promise.all([createPages, createCustomerStories]);
};
