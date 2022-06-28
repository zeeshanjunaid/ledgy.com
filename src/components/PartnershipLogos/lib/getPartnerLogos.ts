import { graphql, useStaticQuery } from 'gatsby';

const partnerLogosQuery = graphql`
  query {
    contentfulSimpleList(title: { eq: "partnershipLogos" }) {
      mediaList {
        title
        localFile {
          childImageSharp {
            fixed(height: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

export const getPartnerLogos = (): ImageProps[] => {
  const result = useStaticQuery(partnerLogosQuery);
  return result.contentfulSimpleList.mediaList;
};
