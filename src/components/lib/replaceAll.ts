export const replaceAll = ({
  string,
  search,
  replacement,
}: {
  string: string;
  search: string;
  replacement: string;
}) => string.replace(new RegExp(search, 'g'), replacement);
