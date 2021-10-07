import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactWordcloud, { MinMaxPair, Word } from 'react-wordcloud';
import { t } from '@lingui/macro';

import { Section, ButtonGroup } from './utils';

const getLedgistats = (): Ledgistats[] =>
  useStaticQuery(graphql`
    query {
      allContentfulLedgista {
        nodes {
          backgrounds
          languages
          nationalities
          activities
        }
      }
    }
  `).allContentfulLedgista.nodes;

type Ledgistats = Record<string, string[]>;

const getWords = (ledgistas: Ledgistats[], trait: string): Word[] => {
  const words = new Map<string, number>();
  ledgistas.forEach((ledgista) => {
    const values = ledgista[trait];
    values.forEach((value) => {
      words.set(value, (words.get(value) || 0) + 1);
    });
  });

  return Array.from(words).map(([text, value]) => ({ text, value }));
};

const TRAITS = {
  Backgrounds: t`What our team members learned before Ledgy`,
  Languages: t`Discover all native languages at Ledgy`,
  Activities: t`What the Ledgistas do in their free time`,
  Nationalities: t`Where the Legistas come from`,
};

const COLORS = [
  '#e5c534',
  '#cac63a',
  '#b0c645',
  '#97c451',
  '#7ec25f',
  '#66be6c',
  '#4dba7a',
  '#33b586',
  '#11af90',
  '#009c91',
  '#008a8e',
  '#007787',
  '#00647c',
  '#00516d',
  '#033f5b',
  '#132f47',
];

export const Ledgistats = () => {
  const ledgistats = getLedgistats();
  const allTraits = Object.keys(TRAITS);
  const [trait, setTrait] = useState(allTraits[0]);
  const words = getWords(ledgistats, trait.toLowerCase());

  const fontSizes = (): MinMaxPair => {
    if (typeof window !== 'undefined') {
      const windowWidth = window.innerWidth;
      return windowWidth < 600
        ? [windowWidth / Math.max(50, words.length * 2), windowWidth / Math.min(25, words.length)]
        : [windowWidth / 100, windowWidth / 40];
    } else {
      return [17, 25];
    }
  };

  return (
    <Section noPadding>
      <h4 className="text-center">{TRAITS[trait as keyof typeof TRAITS]}</h4>
      <div className="my-4">
        <ReactWordcloud
          words={words}
          options={{
            fontFamily: 'Museo Sans Rounded',
            fontSizes: fontSizes(),
            enableTooltip: false,
            colors: COLORS,
            padding: 3,
            rotations: 5,
            rotationAngles: [-15, 15],
          }}
        />
      </div>
      <div style={{ maxWidth: '720px' }} className="mx-auto">
        <ButtonGroup buttonTexts={allTraits} onClick={setTrait} tag={trait} />
      </div>
    </Section>
  );
};
