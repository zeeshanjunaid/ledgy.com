import { graphql, useStaticQuery } from 'gatsby';

export const TeamFragment = graphql`
  fragment TeamFragment on Query {
    ben: imageSharp(fluid: { originalName: { regex: "/ben.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    yoko: imageSharp(fluid: { originalName: { regex: "/yoko.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    timo: imageSharp(fluid: { originalName: { regex: "/timo.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    oriol: imageSharp(fluid: { originalName: { regex: "/uri.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    jules: imageSharp(fluid: { originalName: { regex: "/jules.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    marius: imageSharp(fluid: { originalName: { regex: "/marius.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    jahlela: imageSharp(fluid: { originalName: { regex: "/jahlela.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    spela: imageSharp(fluid: { originalName: { regex: "/spela.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    armon: imageSharp(fluid: { originalName: { regex: "/armon.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    karime: imageSharp(fluid: { originalName: { regex: "/karime.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    ermias: imageSharp(fluid: { originalName: { regex: "/ermias.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    mariana: imageSharp(fluid: { originalName: { regex: "/mariana.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    xiao: imageSharp(fluid: { originalName: { regex: "/xiao.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    marina: imageSharp(fluid: { originalName: { regex: "/marina.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    catarina: imageSharp(fluid: { originalName: { regex: "/catarina.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    nicolas: imageSharp(fluid: { originalName: { regex: "/nicolas.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    tanya: imageSharp(fluid: { originalName: { regex: "/tanya.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    sara: imageSharp(fluid: { originalName: { regex: "/sara.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    joe: imageSharp(fluid: { originalName: { regex: "/joe.png/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    valerie: imageSharp(fluid: { originalName: { regex: "/valerie.png/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    aloys: imageSharp(fluid: { originalName: { regex: "/aloys.png/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    thomas: imageSharp(fluid: { originalName: { regex: "/thomas.png/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    greg: imageSharp(fluid: { originalName: { regex: "/greg.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    giacomo: imageSharp(fluid: { originalName: { regex: "/giacomo.png/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
    luna: imageSharp(fluid: { originalName: { regex: "/luna.jpg/" } }) {
      fluid(maxWidth: 245, maxHeight: 245) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const getTeamImages = () =>
  useStaticQuery(graphql`
    query {
      ...TeamFragment
    }
  `);
