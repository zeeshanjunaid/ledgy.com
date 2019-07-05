exports.onRouteUpdate = () => {
  document.getElementsByTagName('body')[0].classList.remove('navbar-open');
  const backdrop = document.getElementsByClassName('backdrop-navbar')[0];
  if (backdrop) backdrop.parentNode.removeChild(backdrop);
};

exports.onServiceWorkerUpdateReady = () => window.location.reload(true);

const sample = array => array[Math.floor(Math.random() * array.length)];
const experiments = ['master', 'modelFinancingRound', 'investorRelations', 'lostTrack'];
window.experiment = sample(experiments);

if (window.ga) {
  window.ga('require', 'linker');
  window.ga('linker:autoLink', ['app.ledgy.com']);
  window.ga(tracker => {
    window.clientId = tracker.get('clientId');
  });
  window.ga('set', 'dimension1', window.experiment);
}
