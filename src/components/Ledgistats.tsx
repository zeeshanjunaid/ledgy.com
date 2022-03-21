import React, { useState } from 'react';
import ReactWordcloud, { Word } from 'react-wordcloud';
import { t } from '@lingui/macro';

import { Section, ButtonGroup } from './utils';

import ledgistats from '../helpers/ledgistats.json';

type Ledgistats = typeof ledgistats;

const isAllLowerCase = (word: string): boolean => word.toLowerCase() === word;

const capitalize = (item: string): string => {
  if (!isAllLowerCase(item)) return item;

  return item
    .split(' ')
    .map((v) => `${v[0].toUpperCase()}${v.slice(1)}`)
    .join(' ');
};

const getItems = (ledgistas: Ledgistats, trait: keyof Ledgistats): Word[] => {
  const items = ledgistats[trait];
  const list = Object.entries(items).map(([item, value]) => ({ text: capitalize(item), value }));
  const total = {
    text: `${list.length} ${trait}`,
    value: Math.max(...Object.values(items)),
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
  const items = getItems(ledgistats, trait.toLowerCase() as keyof Ledgistats);

  const minFontSize = typeof window !== 'undefined' && window.innerWidth > 992 ? 15 : 10;

  return (
    <Section noPadding>
      <h2 className="text-center mb-0">{TRAITS[trait as keyof typeof TRAITS]}</h2>
      <div className="my-0">
        <ReactWordcloud
          words={items}
          maxWords={items.length}
          minSize={[400, 500]}
          options={{
            fontFamily: 'Museo Sans Rounded',
            fontSizes: [minFontSize, 40],
            enableTooltip: false,
            colors: COLORS,
            padding: 2,
            rotations: 0,
            rotationAngles: [0, 0],
          }}
        />
      </div>
      <div style={{ maxWidth: '800px' }} className="mx-auto">
        <ButtonGroup buttonTexts={allTraits} onClick={setTrait} tag={trait} />
      </div>
    </Section>
  );
};
