// @flow

export const track = (event: string, properties?: Object): void => {
  if (window.analytics) window.analytics.track(event, properties);
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

export const isFieldMissing = (object: Object) => Object.values(object).some((field) => !field);

export const shuffleArray = (array: any[]) => {
  const arrayCopy = array;
  let iterations = arrayCopy.length - 1;
  // eslint-disable-next-line no-plusplus
  for (iterations; iterations > 0; iterations--) {
    const random = Math.floor(Math.random() * (iterations + 1));
    const temp = arrayCopy[iterations];
    arrayCopy[iterations] = arrayCopy[random];
    arrayCopy[random] = temp;
  }
  return arrayCopy;
};
