// @flow

exports.onRouteUpdate = () => {
  window.$('body').removeClass('navbar-open');
  window.$('.backdrop-navbar').remove();
};
