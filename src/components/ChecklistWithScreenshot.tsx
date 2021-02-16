import React from 'react';
import Img from 'gatsby-image';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CustomFade, DynamicTrans, Section, SectionHeader } from './utils';

export const ChecklistWithScreenshot = ({
  header,
  description,
  checklist,
  image,
  mirrored = false,
}: ChecklistWithScreenshotProps & { mirrored?: boolean }) => {
  const { childImageSharp } = image.localFile || {};
  const order = mirrored ? 'order-last' : '';
  const isLongChecklist = checklist.length > 3;
  return (
    <Section>
      <SectionHeader header={header} />
      <div className="row">
        <div className={`${order} col-lg-4 pr-4 d-flex flex-column justify-content-center`}>
          <p className={`text-deep-blue ${isLongChecklist ? 'mb-2 mb-xl-3' : 'mb-4'}`}>
            <DynamicTrans>{description}</DynamicTrans>
          </p>
          <ul className="my-2 pl-0">
            {checklist.map((item) => {
              return (
                <li
                  key={item}
                  className={`media d-flex align-items-center ${isLongChecklist ? 'mb-2' : 'mb-3'}`}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`icon mr-3 text-light-energetic-blue`}
                    size="lg"
                  />
                  <p className="text-deep-blue mb-0">
                    <DynamicTrans>{item}</DynamicTrans>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-lg-8 pl-lg-0">
          <CustomFade translate="0, 100px">
            <div className="screenshot">{!!childImageSharp && <Img {...childImageSharp} />}</div>
          </CustomFade>
        </div>
      </div>
    </Section>
  );
};
