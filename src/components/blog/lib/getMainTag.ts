export const getMainTag = (tags: string[]) => {
  tags ? tags[0].toLocaleLowerCase().replace('blog_', '') : 'update';
};
