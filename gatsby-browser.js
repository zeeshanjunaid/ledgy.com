exports.onRouteUpdate = () => {
  document.getElementsByTagName('body')[0].classList.remove('navbar-open');
  const backdrop = document.getElementsByClassName('backdrop-navbar')[0];
  if (backdrop) backdrop.parentNode.removeChild(backdrop);
};

exports.onServiceWorkerUpdateReady = () => window.location.reload(true);

if (window.ga) {
  window.ga('require', 'linker');
  window.ga('linker:autoLink', ['app.ledgy.com']);
  console.log('cross');
}
