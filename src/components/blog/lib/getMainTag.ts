export const getMainTag = (tags?: string[]) => {
  return tags
    ? tags[0].toLocaleLowerCase().replace('blog_', '').replace('updates_', 'update | ')
    : '';
};
