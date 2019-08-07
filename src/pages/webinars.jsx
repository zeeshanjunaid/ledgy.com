// @flow

import React from 'react';
import { withI18n } from '@lingui/react';
import { graphql } from 'gatsby';

import { ContentHeader, ContentBody, PostLink } from '../layouts/contentDiffusion';
import { Title } from '../layouts/utils';

export default withI18n()(({ i18n, data }: Props) => (
  <div>
    <Title
      title={i18n.t`Webinars`}
      description={i18n.t`Webinars on cap tables, financing rounds, and legal issues around running and managing a startup.`}
    />

    <ContentHeader heading={i18n.t`Ledgy Webinars`} />

    <ContentBody>
      {data.allContentfulWebinar.edges.map(edge => {
        const { youtube } = edge.node;
        return (
          <PostLink
            external
            key={edge.node.id}
            to={youtube}
            post={edge.node}
            defaultImage={data.ledgy}
          />
        );
      })}
    </ContentBody>
  </div>
));

export const pageQuery = graphql`
  fragment CoverImage on ImageSharp {
    fluid(maxWidth: 200, maxHeight: 200, cropFocus: CENTER) {
      ...GatsbyImageSharpFluid
    }
  }
  query {
    ledgy: imageSharp(fluid: { originalName: { regex: "/ledgy.png/" } }) {
      ...CoverImage
    }
    allContentfulWebinar(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          title
          description
          date(formatString: "DD MMM YYYY")
          youtube
          cover {
            localFile {
              childImageSharp {
                ...CoverImage
              }
            }
          }
        }
      }
    }
  }
`;
