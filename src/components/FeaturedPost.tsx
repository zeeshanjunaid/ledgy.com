import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import React from "react";

const getfeaturedPosts = () =>
  useStaticQuery(graphql`
    query {
      ...DefaultCover
      allContentfulPage(
        filter: { namespace: { eq: "/blog/" } }
        sort: { order: DESC, fields: [date] }
      ) {
        edges {
          node {
            id
            tags
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
  `);

export const FeaturedPost = () => {
  const featuredPosts = getfeaturedPosts();

  const { edges } = featuredPosts.allContentfulPage;
  const { id, slug, tags, description: postDescription, title } = edges[0].node;
  const featured = true;

  const { childImageSharp } = edges[0].node.cover?.localFile || {};
  const image = childImageSharp ? (
    <Img className="fit-cover" {...childImageSharp} />
  ) : null;

  return featured ? (
    <div className="featured__post">
      <div className="featured__post-wrapper">
        <div className="featured__post-img">{image}</div>
        <div className="featured__post-content">
          <div className="featured__post-tags">
            <a href="#">innovatives</a>
          </div>
          <div className="featured__post-title">
            <h5>{title}</h5>
          </div>
          <div className="featured__post-description">{postDescription}</div>
          <div className="featured__post-author">
            <div className="featured__post-author--img">
              <img
                src="http://images.ctfassets.net/ojxc8xtj0owo/Bx2zcRDMm5Co3Ub1afIeM/0f8b11cb391101bdcce57fc0f15797ef/joe.png?w=400&h=463&q=50"
                alt="Joe Brennan"
              />
            </div>
            <div className="featured__post-author--name">
              <p>Joe Brennan</p>
              <span>Co-Founder & Sports Nerd</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
