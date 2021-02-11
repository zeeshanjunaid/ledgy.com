import React from 'react';
import Img from 'gatsby-image';
import { dynamicI18n, DynamicTrans } from './DynamicTrans';
import { getUnderlineHtml } from './lib';
import { Section } from './Section';

export const TitleWithGraphic = ({
  title,
  motivationText,
  graphic,
  description,
  inverted = false,
}: TitleWithGraphicProps & { inverted?: boolean }) => {
  const { childImageSharp } = graphic?.localFile || {};
  const sectionBackgroundStyle = inverted ? 'bg-lightest' : '';
  const backgroundStyle = inverted ? '' : 'bg-primary tilted-background';
  const motivationTextColor = inverted ? 'text-gray-dark' : 'text-secondary';
  const titleTextColor = inverted ? 'text-primary' : 'text-secondary';
  const descriptionTextColor = inverted ? 'text-primary' : 'text-white';

  return (
    <div className="overflow-hidden" style={{ margin: '-7rem 0', padding: '7rem 0' }}>
      <Section className={`position-relative my-7 ${sectionBackgroundStyle}`}>
        <div className={`${backgroundStyle} position-absolute z-index-background`}></div>
        <div className="row justify-content-center my-7 py-7">
          <div className="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end">
            {!!childImageSharp && <Img {...childImageSharp} />}
          </div>

          <div className="col-lg-5">
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
