// @flow

import { isBrowser } from './constants';

const dynamicTranslations = new Set<string>();

if (!isBrowser) {
  process.on('exit', () => {
    // eslint-disable-next-line no-eval
    const fs = eval('require("fs")');

    const po = Array.from(dynamicTranslations).map(text => {
      const escapedText = (text || '').replace(/"/g, '\\"');
      return `msgid "${escapedText}"\nmsgstr "${escapedText}"\n`;
    });
    const poFile = 'src/locale/en/dynamic.po';
    console.log(`Writing ${poFile}`);
    fs.appendFileSync(poFile, po.join('\n'));
  });
}

export const addTranslation = (text: string): void => {
  if (text) dynamicTranslations.add(text);
};
