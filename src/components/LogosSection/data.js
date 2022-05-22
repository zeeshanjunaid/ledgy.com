/* eslint-disable prettier/prettier */
import {
  BonobosLogo,
  ClearScoreLogo,
  DigitalOceanLogo,
  IbmLogo,
  MeredithLogo,
} from "./logos";

import React from "react";

export const testimonialsData = {
  title: (
    <>
      <h2>
        <span>Trusted by</span> startups <span>and the</span> world's largest
        companies
      </h2>
    </>
  ),
  testimonials: [
    {
      id: 0,
      logo: <IbmLogo />,
      text: "With real-time integrated data flows from Segment, we can truly understand what people are doing with our platform.",
      client: {
        name: "Nic Sauriol",
        designation: "Software Develpment Leader",
      },
      value: {
        number: "70%",
        text: "Increase in revenue following a three-month customer messaging pilot program",
      },
      link: {
        text: "Read their story",
        src: "#",
      },
      colors: {
        primary: "#133095",
        secondary: "#193fc2",
      },
    },
    {
      id: 1,
      logo: <MeredithLogo />,
      text: "Segment has enabled us to streamline the data capture process while maintaining flexibility to customize per brand as needed.",
      client: {
        name: "Grace Preyapongpisan",
        designation: "Vice President, Business Intelligence",
      },
      value: {
        number: "36",
        text: "Brands centralized on the same data analytics infrastructure",
      },
      link: {
        text: "Read their story",
        src: "#",
      },
      colors: {
        primary: "#bd123b",
        secondary: "#e9244b",
      },
    },
    {
      id: 2,
      logo: <BonobosLogo />,
      text: "As our business grows, it has become increasingly important to understand how online spend influences offline behavior, which Facebook and Segment have made possible.",
      client: {
        name: "Micky Onvural",
        designation: "Co-President",
      },
      value: {
        number: "2x",
        text: "Increase in ROAS for both in-store and online revenue",
      },
      link: {
        text: "Read their story",
        src: "#",
      },
      colors: {
        primary: "#141b2d",
        secondary: "#262e4f",
      },
    },
    {
      id: 3,
      logo: <DigitalOceanLogo />,
      text: "Segment allows us to be more precise with how we dynamically suppress or target users in ad campaigns based on actual product usage.",
      client: {
        name: "Sam Coren",
        designation: "Senior User Acquisition Manager",
      },
      value: {
        number: "33%",
        text: "Improvement in cost per conversion",
      },
      link: {
        text: "Read their story",
        src: "#",
      },
      colors: {
        primary: "#183acc",
        secondary: "#2049ff",
      },
    },
    {
      id: 4,
      logo: <ClearScoreLogo />,
      text: "Segment allows us to be more precise with how we dynamically suppress or target users in ad campaigns based on actual product usage.",
      client: {
        name: "Klaus Thorup",
        designation: "Chief Technology Officer",
      },
      value: {
        number: "3x",
        text: "Cost savings over building in-house",
      },
      link: {
        text: "Read their story",
        src: "#",
      },
      colors: {
        primary: "#434b54",
        secondary: "#5a6470",
      },
    },
  ],
};
