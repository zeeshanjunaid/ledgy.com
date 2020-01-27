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

declare type Language = 'en' | 'de' | 'fr';

declare type Page = {|
  id: string,
  title: string,
  description: string,
  date?: string,
  author?: string,
  content: Mdx,
  slug: string,
  language: Language,
  cover?: Object
|};

declare type Company = {|
  name: string,
  logo: Object,
  cover: Object,
  contactName: string,
  contactTitle: string,
  mainQuote: Mdx,
  yearFounded: string,
  funding: string,
  employeeCount: string,
  sector: string,
  location: string,
  stage: string
|};

declare type UserStory = {|
  id: string,
  title: string,
  slug: string,
  subtitle: string,
  company: Company,
  content: Mdx,
  date: string,
  language: Language,
  author?: string
|};

declare var graphql: any;
