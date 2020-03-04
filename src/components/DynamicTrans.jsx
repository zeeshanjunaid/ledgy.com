// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { isBrowser } from '../helpers';
import { addTranslation } from '../helpers/dynamicTranslations';

const DynamicTransComponent = ({ children: text }: {| children: string |}) => {
  if (!isBrowser) addTranslation(text);

  return <Trans id={text}>{text}</Trans>;
};

export const DynamicTrans = withI18n()(DynamicTransComponent);
export const dynamicI18n = (i18n: I18n) => (text: string): string => {
  addTranslation(text);
  return i18n._(text);
};
