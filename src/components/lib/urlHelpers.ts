export const isExternalUrl = (url: string) =>
  url.startsWith('http') || url.startsWith('www') || url.startsWith('mailto:');

export const formatUrl = (prefix: string, url: string) =>
  isExternalUrl(url) ? url : `${prefix}/${url}/`;
