import { graphql, useStaticQuery } from 'gatsby';

const integrationLogosQuery = graphql`
  query {
    contentfulSimpleList(title: { eq: "integrationLogos" }) {
      mediaList {
        title
        localFile {
          childImageSharp {
            fixed(height: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

export const getIntegrationLogos = (): ImageProps[] => {
  const result = useStaticQuery(integrationLogosQuery);
  return result.contentfulSimpleList.mediaList;
};
