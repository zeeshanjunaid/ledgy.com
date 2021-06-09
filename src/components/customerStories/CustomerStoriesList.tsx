import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CustomerStoryLink } from './CustomerStoryLink';
import { ContentBody } from '../../components';

const getCustomerStories = () =>
  useStaticQuery(graphql`
    query {
      ...DefaultCover
      allContentfulCustomerStory(sort: { order: DESC, fields: [date] }) {
        edges {
          node {
            id
            slug
            title
            subtitle
            date
            company {
              logo {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 200) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

export const CustomerStoriesList = ({ prefix }: { prefix: string }) => {
  const customerStories = getCustomerStories();
  const { edges } = customerStories.allContentfulCustomerStory;
  return (
    <ContentBody>
      {edges.map(({ node }: { node: CustomerStoryBaseProps }) => (
        <CustomerStoryLink key={node.id} customerStory={node} prefix={prefix} />
      ))}
    </ContentBody>
  );
};
