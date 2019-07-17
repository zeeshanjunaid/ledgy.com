// @flow

declare type I18n = {|
  t: (Array<string>, ...values: Array<any>) => string
|};

declare type Props = {|
  i18n: I18n,
  prefix: string,
  lang: string,
  data: Object
|};

declare type LayoutProps = {|
  ...Props,
  lang: string,
  location: { pathname: string }
|};

declare type Page = {|
  title: string,
  description: string,
  date?: Date,
  author?: string,
  markdown: { childMdx: { body: string } },
  name: string,
  language: 'en' | 'de' | 'fr'
|};

declare var graphql: any;
