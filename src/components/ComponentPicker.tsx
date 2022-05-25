import React from 'react';

import { CallToAction } from './CallToAction';
import { ContentWithChecklist } from './ContentWithChecklist';
import { FeatureGrid } from './FeatureGrid';
import { TitleWithGraphic } from './TitleWithGraphic';
import { TestimonialCards } from './TestimonialCards';
import { LogoBanner } from './LogoBanner';
import { SelectableCardsWithScreenshots } from './cardsWithScreenshots';
import { TopBanner } from './TopBanner';
import { ChecklistWithScreenshot } from './ChecklistWithScreenshot';
import { LongTextComponent } from './LongTextComponent';
import { StaticBlockPicker } from './StaticBlockPicker';
import { Testimonials } from './Testimonials';
import { LargeTestimonial } from './LargeTestimonial';
import { CompetitorsTable } from './competitorsTable';
import { Explore } from './Explore';

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

    case 'ContentfulTestimonials':
      return <Testimonials {...baseProps} {...entry} />;

    case 'ContentfulLargeTestimonial':
      return <LargeTestimonial {...baseProps} {...entry} />;

    case 'ContentfulCompetitorTable':
      return <CompetitorsTable {...baseProps} {...entry} />;

    case 'ContentfulExplore':
      return <Explore {...baseProps} {...entry} />;

    default:
      throw new Error('content __typename not recognized');
  }
};
