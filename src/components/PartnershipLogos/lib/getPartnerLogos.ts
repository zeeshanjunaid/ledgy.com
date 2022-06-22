import { graphql, useStaticQuery } from 'gatsby';

const partnerLogosQuery = graphql`
  query {
    contentfulSimpleList(title: { eq: "partnershipLogos" }) {
      list
    }
  }
`;

export const getPartnerLogos = (): string[] => {
  const result = useStaticQuery(partnerLogosQuery);
  return result.contentfulSimpleList.list;
};
