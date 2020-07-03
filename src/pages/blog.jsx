// @flow

import React from 'react';
import { withI18n } from '@lingui/react';
import { graphql } from 'gatsby';

import { ContentBody, PostLink } from '../components/Content';
import { Title } from '../layouts/utils';
import { PageHeader } from '../components/PageHeader';

export default withI18n()(({ i18n, data, prefix }: Props) => {
  const title = i18n.t`Blog`;
  const description = i18n.t`Thoughts on cap tables, financing rounds, and legal issues around running and managing a startup.`;
  return (
    <div>
      <Title title={title} description={description} />
      <PageHeader title={title} subtitle={description} />

      <ContentBody>
        {data.allContentfulPage.edges.map((edge) => {
          const { node } = edge;
          const { id, slug, description: postDescription } = node;
          return (
            <PostLink
              key={id}
              to={`${prefix}/blog/${slug}`}
              post={node}
              defaultImage={data.ledgy}
              description={postDescription}
            />
          );
        })}
      </ContentBody>
    </div>
  );
});

export const pageQuery = graphql`
  query {
    ...DefaultCover
    allContentfulPage(
      filter: { namespace: { eq: "/blog/" } }
      sort: { order: DESC, fields: [date] }
    ) {
      edges {
        node {
          id
          slug
          title
          description
          language
          date(formatString: "DD MMM YYYY")
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
