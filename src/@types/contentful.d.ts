type Id = { id: string };

type Link = {
  url: string;
  text: string;
};

declare type EntryProps =
  | LogoBannerProps
  | SelectableCardsWithScreenshotsProps
  | FeatureGridContentProps
  | TestimonialCardsProps
  | TitleWithGraphicProps
  | ContentWithChecklistProps
  | CallToActionProps
  | ChecklistWithScreenshotProps
  | LongTextComponentProps
  | StaticBlockProps
  | TestimonialsProps
  | CompetitorTableProps
  | LargeTestimonialProps
<<<<<<< HEAD
  | ExploreProps;
=======
  | ExploreProps
  | TestimonialCarouselProps;
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854

declare type ContentfulPageProps = Id & {
  title: string;
  description: string;
  date?: string;
  author?: string;
  content: Mdx;
  slug: string;
  region: Region;
  cover?: ImageProps;
  entries?: EntryProps[];
};

declare type AllContentfulCustomerStoryProps = Id & {
  company: CompanyProps;
  slug: string;
  isOurStory: boolean;
};

declare type CustomerStoryBaseProps = AllContentfulCustomerStoryProps & {
  title: string;
  header: string;
  subtitle: string;
  date: string;
  isOurStory: boolean;
};

declare type CustomerStoryProps = CustomerStoryBaseProps & { content: Mdx; region: Region };

declare type MarketplaceBaseProps = Id & {
  company: string;
  description: string;
  logo: ImageProps;
  slug: string;
  isIntegration: boolean;
};

type SummaryField = { fieldName: string; fieldContent: string };
declare type Summary = { contentfulfields: SummaryField[] };

declare type MarketplaceProps = MarketplaceBaseProps & {
  header: string;
  summary: Summary;
  content: Mdx;
  motivationText: string;
  pictures: ImageProps[];
  buttons: ButtonProps[];
};

declare type FeatureGridSectionProps = { icon: IconType; title: string; description: string };

declare type FeatureGridContentProps = Id & {
  __typename: 'ContentfulFeatureGrid';
  header: string;
  sections: FeatureGridSectionProps[];
};

declare type TestimonialCardProps = {
  logo: ImageProps;
  text: { text: string };
  signature: string;
  linkText?: string;
  linkUrl?: string;
};

declare type TestimonialProps = {
  name: string;
  description: Mdx;
  url: string;
  image: ImageProps;
  small: boolean;
};

declare type LargeTestimonialProps = Id & {
  __typename: 'ContentfulLargeTestimonial';
  name: string;
  quote: Mdx;
  company: string;
  image: ImageProps;
  showInfo: boolean;
};

declare type TestimonialCardsProps = Id & {
  __typename: 'ContentfulTestimonialCards';
  cards: TestimonialCardProps[];
};

declare type TestimonialsProps = Id & {
  __typename: 'ContentfulTestimonials';
  testimonial: TestimonialProps[];
};
declare type ButtonProps = Id & {
  __typename: 'ContentfulButton';
  text: string;
  url: string;
};

declare type BaseFeatureProps = Id & {
  title: string;
  description: string;
  graphic: ImageProps;
  motivationText: string;
  buttons?: ButtonProps[];
};

type RichText = { raw: string; references: DisableTypeScript[] };

declare type FeaturePageProps = BaseFeatureProps & {
  slug: string;
  header: string;
  entries: EntryProps[];
  indexable: boolean;
  headerWithMedia?: RichText;
};

declare type CustomLandingPageProps = {
  title: string;
  description: string;
  slug: string;
  entries: EntryProps[];
};

declare type TitleWithGraphicProps = BaseFeatureProps & {
  __typename: 'ContentfulTitleWithGraphic';
  headerWithMedia?: RichText;
};

declare type ContentWithChecklistProps = Id & {
  __typename: 'ContentfulContentWithChecklist';
  header: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  checklist: string[];
};

declare type CallToActionProps = Id & {
  __typename: 'ContentfulCallToAction2021';
  header: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  icon: IconType;
  secondaryHeader: string;
  secondaryDescription: string;
  secondaryLinkText: string;
  secondaryLinkUrl: string;
  linkText?: string;
  linkUrl?: string;
};

declare type LogoBannerProps = Id & {
  __typename: 'ContentfulLogoBanner';
  logos: ImageProps[];
  description?: string;
};

type SelectableCardWithScreenshotProps = {
  title: string;
  description: string;
  screenshot: ImageProps;
};

declare type SelectableCardsWithScreenshotsProps = Id & {
  __typename: 'ContentfulSelectableCardsWithScreenshots';
  header: string;
  content: SelectableCardWithScreenshotProps[];
};
declare type BannerType = 'normal' | 'demo' | 'no-button' | 'one-button' | 'extra-link';

declare type TopBannerProps = Id & {
  __typename: 'ContentfulTopBanner';
  mainHeader: string;
  description: string;
  firstButtonText: string;
  firstButtonUrl: string;
  secondButtonText: string;
  secondButtonUrl: string;
  image: ImageProps;
  type: BannerType;
};

declare type ChecklistWithScreenshotProps = Id & {
  __typename: 'ContentfulChecklistWithScreenshot';
  header: string;
  description?: string;
  longDescription?: Mdx;
  image: ImageProps;
  checklist?: string[];
  smallImage: boolean;
  inverted: boolean;
};

declare type LongTextComponentProps = Id & {
  __typename: 'ContentfulLongText';
  isWide: boolean;
  longTextContent: Mdx;
};

declare type StaticBlockProps = Id & {
  __typename: 'ContentfulStaticBlock';
  block: string;
};

declare type MainPageEntryProps = TopBannerProps | EntryProps;

declare type SiteMetaProps = {
  title: string;
  description: string;
  keywords: string[];
};

declare type PopupProps = {
  type: string;
  delay: number;
};

declare type PagePopupProps = {
  node: {
    url: string;
    popup: PopupProps;
  };
};

declare type TopUpdateBanner = {
  node: {
    text: string;
    linkTo: string;
    visible: boolean;
  };
};

declare type CompetitorTableRowProps = {
  text: string;
  ledgyStatus: boolean;
  competitorStatus: boolean;
  isComingSoonOnLedgy: boolean | null;
};

declare type CompetitorTableSectionProps = {
  title: string;
  rows: CompetitorTableRowProps[];
};

declare type CompetitorTableProps = Id & {
  __typename: 'ContentfulCompetitorTable';
  header: string;
  competitorName: string;
  tableSection: CompetitorTableSectionProps[];
};

declare type ExploreSectionProps = Id & {
  id: number;
  columnName: string;
  title: string;
  text: string;
  image: ImageProps;
<<<<<<< HEAD
  link: {
    url: string;
    text: string;
  };
=======
  link: Link;
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
};

declare type ExploreProps = Id & {
  __typename: 'ContentfulExplore';
  textRight: boolean;
<<<<<<< HEAD
  title: boolean;
  sections: ExploreSectionProps[];
};
=======
  title: string;
  sections: ExploreSectionProps[];
};

declare type TestimonialCarouselSectionProps = Id & {
  logo: ImageProps;
  quote: string;
  customerName: string;
  customerRole: string;
  primaryColor: string;
  secondaryColor: string;
  outcomeNumber: string;
  outcomeText: string;
  link: Link;
};

declare type TestimonialCarouselProps = Id & {
  __typename: 'ContentfulTestimonialCarousel';
  title: string;
  testimonials: TestimonialCarouselSectionProps[];
};
>>>>>>> 6a7421e28a411a5b386ee94fe0e9bba057745854
