export const replaceAll = (string: string, search: string, replacement: string) =>
  string.replace(new RegExp(search, 'g'), replacement);
