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
  location: { pathname: string }
|};

declare type Mdx = {| childMdx: {| body: string |} |};

declare type Page = {|
  id: string,
  title: string,
  description: string,
  date?: string,
  author?: string,
  content: Mdx,
  slug: string,
  language: 'en' | 'de' | 'fr',
  cover?: Object
|};

declare var graphql: any;
