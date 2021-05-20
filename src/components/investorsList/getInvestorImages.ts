import { graphql, useStaticQuery } from 'gatsby';

export const InvestorFragment = graphql`
  fragment InvestorFragment on Query {
    btov: imageSharp(fluid: { originalName: { regex: "/btov.png/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    creathor: imageSharp(fluid: { originalName: { regex: "/creathor.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    vipartners: imageSharp(fluid: { originalName: { regex: "/vipartners.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    daniel: imageSharp(fluid: { originalName: { regex: "/daniel.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    luis: imageSharp(fluid: { originalName: { regex: "/luis.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    cyrill: imageSharp(fluid: { originalName: { regex: "/cyrill.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }

    myke: imageSharp(fluid: { originalName: { regex: "/myke.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    paul: imageSharp(fluid: { originalName: { regex: "/paul.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    luzius: imageSharp(fluid: { originalName: { regex: "/luzius.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    adrian: imageSharp(fluid: { originalName: { regex: "/adrian.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    elena: imageSharp(fluid: { originalName: { regex: "/elena.jpg/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const getInvestorImages = () =>
  useStaticQuery(graphql`
    query {
      ...InvestorFragment
    }
  `);
