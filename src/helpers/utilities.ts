export const track = (event: string, properties?: UnknownObject): void => {
  if (window.analytics) window.analytics.track(event, properties);
};

export const identify = (event: string, properties?: UnknownObject): void => {
  if (window.analytics) window.analytics.identify(event, properties);
};

export const isFieldMissing = (object: UnknownObject) =>
  Object.values(object).some((field) => !field);

export const shuffleArray = <T>(array: T[]): T[] =>
  array.reduce((res, val, index) => {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const copy = [...res];
    copy[index] = copy[randomIndex];
    copy[randomIndex] = val;
    return copy;
  }, array);

export const loadScript = (src: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    return (document.body && document.body.appendChild(script)) || reject();
  });
