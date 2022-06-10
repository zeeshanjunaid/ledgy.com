import { CallToAction } from './CallToAction';
import { ChecklistWithScreenshot } from './ChecklistWithScreenshot';
import { CompetitorsTable } from './competitorsTable';
import { ContentWithChecklist } from './ContentWithChecklist';
import { Explore } from './Explore';
import { FeatureGrid } from './FeatureGrid';
import { LargeTestimonial } from './LargeTestimonial';
import { LogoBanner } from './LogoBanner';
import { LongTextComponent } from './LongTextComponent';
import React from 'react';
import { SelectableCardsWithScreenshots } from './cardsWithScreenshots';
import { StaticBlockPicker } from './StaticBlockPicker';
import { TestimonialCards } from './TestimonialCards';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { TopBanner } from './TopBanner';
import { TitleWithGraphic } from './TitleWithGraphic';

export const ComponentPicker = ({
  entry,
  smallPadding = false,
  ...baseProps
}: Prefix & Region & { entry: MainPageEntryProps; smallPadding?: boolean }) => {
  if (!entry.id) return null;

  switch (entry.__typename) {
    case 'ContentfulTopBanner':
      return <TopBanner {...baseProps} {...entry} />;

    case 'ContentfulLogoBanner':
      return <LogoBanner {...baseProps} {...entry} smallPadding={smallPadding} />;

    case 'ContentfulSelectableCardsWithScreenshots':
      return <SelectableCardsWithScreenshots {...baseProps} {...entry} />;

    case 'ContentfulFeatureGrid':
      return <FeatureGrid {...baseProps} {...entry} />;

    case 'ContentfulTestimonialCards':
      return <TestimonialCards {...baseProps} {...entry} />;

    case 'ContentfulTitleWithGraphic':
      return <TitleWithGraphic {...baseProps} {...entry} />;

    case 'ContentfulContentWithChecklist':
      return <ContentWithChecklist {...baseProps} {...entry} />;

    case 'ContentfulChecklistWithScreenshot':
      return <ChecklistWithScreenshot {...baseProps} {...entry} />;

    case 'ContentfulCallToAction2021':
      return <CallToAction {...baseProps} {...entry} />;

    case 'ContentfulLongText':
      return <LongTextComponent {...baseProps} {...entry} />;

    case 'ContentfulStaticBlock':
      return <StaticBlockPicker {...baseProps} {...entry} />;

    case 'ContentfulLargeTestimonial':
      return <LargeTestimonial {...baseProps} {...entry} />;

    case 'ContentfulCompetitorTable':
      return <CompetitorsTable {...baseProps} {...entry} />;

    case 'ContentfulExplore':
      return <Explore {...baseProps} {...entry} />;

    case 'ContentfulTestimonialCarousel':
      return <TestimonialsCarousel {...baseProps} {...entry} />;

    default:
      throw new Error('content __typename not recognized');
  }
};
