import React from 'react';
import { dynamicI18n, DynamicTrans } from './DynamicTrans';
import { getUnderlineHtml } from './lib';
import { Section } from './Section';
import { Image } from './Image';

export const TitleWithGraphic = ({
  title,
  motivationText,
  graphic,
  description,
  light = false,
  mirrored = false,
}: TitleWithGraphicProps & { light?: boolean; mirrored?: boolean }) => {
  const sectionBackgroundStyle = light ? 'bg-lightest' : '';
  const backgroundStyle = light ? '' : 'bg-primary tilted-background';
  const motivationTextColor = light ? 'text-gray-dark' : 'text-secondary';
  const titleTextColor = light ? 'text-primary' : 'text-secondary';
  const descriptionTextColor = light ? 'text-primary' : 'text-white';
  const order = mirrored ? 'order-last' : '';

  return (
    <div className="overflow-hidden" style={{ margin: '-7rem 0', padding: '7rem 0' }}>
      <Section className={`position-relative my-7 ${sectionBackgroundStyle}`}>
        <div className={`${backgroundStyle} position-absolute z-index-background`}></div>
        <div className="row justify-content-center my-5 py-5 my-lg-7 py-lg-7">
          <div
            className={`${order} col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end`}
          >
            <Image image={graphic} />
          </div>
          <div className="col-lg-5 pt-2 pt-lg-0">
            <p className={motivationTextColor}>
              <DynamicTrans>{motivationText.toUpperCase()}</DynamicTrans>
            </p>
            <h1
              className={`custom-underline my-4 font-weight-bold ${titleTextColor}`}
              dangerouslySetInnerHTML={{ __html: getUnderlineHtml(dynamicI18n(title)) }}
            />
            <p className={descriptionTextColor}>
              <DynamicTrans>{description}</DynamicTrans>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};
