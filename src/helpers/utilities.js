// @flow

export const loadScript = (path: string): Promise<*> =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = path;
    script.async = true;
    script.onload = resolve;
    return (document.body && document.body.appendChild(script)) || reject();
  });

export const trackSignupGoogleAnalytics = (type: string) => {
  if (window.ga) window.ga('send', 'event', 'signup', type);
};

export const track = (event: string): void => {
  if (window.ga) window.ga('send', 'pageview', `landingPage/${event}`);
};

export const animateTablet = () => {
  let scrolling = false;
  window.onscroll = () => {
    scrolling = true;
  };
  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      const tablet = document.getElementById('tablet-ledgy');
      const banner = document.querySelector('header');
      const { scrollY } = window;
      if (tablet && banner && scrollY <= banner.clientHeight) {
        tablet.style.transform = `translateY(${scrollY / 50}%)`;
      }
    }
  }, 50);
};

export const removeModalFromDOM = () => {
  const modal = document.getElementById('newsletter-signup');
  if (modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('style', 'display: none');
  }
  const backdrop = document.querySelector('.modal-backdrop');
  if (backdrop && backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
  if (document && document.body) document.body.classList.remove('modal-open');
};

export const isFieldMissing = (object: Object) => Object.values(object).some(field => !field);
