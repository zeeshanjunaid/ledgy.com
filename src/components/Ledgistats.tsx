import React, { useState } from 'react';
import ReactWordcloud, { MinMaxPair, Word } from 'react-wordcloud';
import { t } from '@lingui/macro';

import { Section, ButtonGroup } from './utils';

import ledgistats from '../helpers/ledgistats.json';

type Ledgistats = typeof ledgistats;

const isCapitalized = (word: string): boolean => word[0].toUpperCase() === word[0];

const capitalize = (word: string): string => {
  if (isCapitalized(word)) return word;

  return word
    .split(' ')
    .map((v) => `${v[0].toUpperCase()}${v.slice(1)}`)
    .join(' ');
};

const getWords = (ledgistas: Ledgistats, trait: keyof Ledgistats): Word[] => {
  const words = ledgistats[trait];
  const list = Object.entries(words).map(([word, value]) => ({ text: capitalize(word), value }));
  const total = {
    text: `${list.length} ${trait}`,
    value: Math.max(...Object.values(words)),
  };

  return [...list, total];
};

const TRAITS = {
  Hobbies: t`What the Ledgistas do in their free time 🤓`,
  Languages: t`Discover all native languages at Ledgy 🐟`,
  Nationalities: t`Where the Ledgistas come from 🌍`,
  Backgrounds: t`What our team members learned before Ledgy 👩🏾‍🔬`,
  Superpowers: t`Our hidden magic abilities 🧙‍♀️`,
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
  const allTraits = Object.keys(TRAITS);
  const [trait, setTrait] = useState(allTraits[0]);
  const words = getWords(ledgistats, trait.toLowerCase() as keyof Ledgistats);

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
      <h2 className="text-center">{TRAITS[trait as keyof typeof TRAITS]}</h2>
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
      <div style={{ maxWidth: '900px' }} className="mx-auto">
        <ButtonGroup buttonTexts={allTraits} onClick={setTrait} tag={trait} />
      </div>
    </Section>
  );
};
