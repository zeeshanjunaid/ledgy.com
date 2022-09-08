import { graphql, useStaticQuery } from 'gatsby';

const pagesWithNoNavUrlsQuery = graphql`
  query {
    contentfulSimpleList(title: { eq: "blackListNavUrls" }) {
      list
    }
  }
`;

export const getListOfPagesWithNoNavUrl = (): Set<string> => {
  const result = useStaticQuery(pagesWithNoNavUrlsQuery);
  return new Set(result.contentfulSimpleList.list);
};
