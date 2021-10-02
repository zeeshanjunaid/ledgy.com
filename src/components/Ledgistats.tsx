import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactWordcloud, { Word } from 'react-wordcloud';

import { Section, ButtonGroup } from './utils';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const getLedgistas = (): Ledgista[] =>
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

type Trait = 'languages' | 'nationalities' | 'backgrounds' | 'activities';
type Ledgista = Record<Trait, string[]>;

const getWords = (ledgistas: Ledgista[], trait: Trait): Word[] => {
  const words = new Map<string, number>();
  ledgistas.forEach((ledgista) => {
    const values = ledgista[trait];
    values.forEach((value) => {
      words.set(value, (words.get(value) || 0) + 1);
    });
  });

  return Array.from(words).map(([text, value]) => ({ text, value }));
};

const TRAITS = ['Activities', 'Languages', 'Nationalities', 'Backgrounds'];

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
  const ledgistas = getLedgistas();
  const [trait, setTrait] = useState(TRAITS[0]);

  const words = getWords(ledgistas, trait.toLowerCase() as Trait);
  return (
    <Section noPadding>
      <div style={{ maxWidth: '720px' }} className="mx-auto">
        <ButtonGroup buttonTexts={TRAITS} onClick={setTrait} tag={trait} />
      </div>
      <ReactWordcloud
        words={words}
        minSize={[400, 300]}
        options={{
          fontFamily: 'Museo Sans Rounded',
          fontSizes: [16, 40],
          colors: COLORS,
          padding: 5,
          rotations: 3,
          rotationAngles: [0, 90],
          scale: 'log',
        }}
      />
    </Section>
  );
};
