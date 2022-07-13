import { replaceAll } from '../../lib';

export const getMainTag = (tags?: string[]) => {
  const string = tags
    ? tags[0].toLocaleLowerCase().replace('blog_', '').replace('updates_', 'update | ')
    : '';
  const tag = replaceAll({ string, search: '_', replacement: ' ' });
  return tag;
};
