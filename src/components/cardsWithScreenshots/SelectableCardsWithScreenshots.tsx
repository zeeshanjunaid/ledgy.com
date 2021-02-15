import React, { useEffect, useRef, useState } from 'react';
import Img from 'gatsby-image';
import { throttle } from 'lodash';

import { isBrowser } from '../../helpers';
import { DynamicTrans } from '../DynamicTrans';
import { Section } from '../Section';

import { handleCardClick, handleScroll, getEntriesHeight } from './lib';
import { SelectableCard } from './SelectableCard';

export const SelectableCardsWithScreenshots = ({
  title,
  content,
}: SelectableCardsWithScreenshotsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const [componentHeight, setComponentHeight] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(isBrowser ? window.innerHeight : 1000);
  const wrapperRef = useRef(null);
  const anchorRef = useRef(null);

  const stickyStyle = { top: windowHeight / 2 - componentHeight / 2 - 90 };
  const spanStyle = { height: `${cardHeight}px`, transform: `translateY(${translateY}px)` };
  const scrollDistance = 2000;
  const interval = scrollDistance / content.length;

  const observer = isBrowser
    ? new ResizeObserver((entries) => {
        const activeEntry = entries[activeIndex];
        if (activeEntry) setCardHeight(activeEntry.target.clientHeight);
        const entriesToEvaluate = entries.slice(0, activeIndex);
        const pxToTranslate = getEntriesHeight(entriesToEvaluate);
        setTranslateY(pxToTranslate);
        const totalHeight = getEntriesHeight(entries);
        setComponentHeight(totalHeight);
      })
    : null;

  useEffect(() => {
    if (isBrowser) {
      const handleResize = () => setWindowHeight(window.innerHeight);
      window.onresize = () => {
        throttle(handleResize, 150);
      };
      window.onscroll = () => {
        handleScroll({ wrapperRef, interval, activeIndex, setActiveIndex });
      };
      return () => {
        window.onresize = () => null;
        window.onscroll = () => null;
      };
    }
  }, [isBrowser, activeIndex]);

  return (
    <Section>
      <div ref={anchorRef} />
      <div ref={wrapperRef} style={{ height: `${scrollDistance}px` }}>
        <div className="position-sticky" style={stickyStyle}>
          <h2 className="pb-2 pb-lg-4 text-center">
            <DynamicTrans>{title}</DynamicTrans>
          </h2>
          <div className="row">
            <div className="col-lg-8 pr-lg-0">
              {content.map((v, i) => {
                const { childImageSharp } = v.screenshot.localFile || {};
                const isActive = activeIndex === i;
                return (
                  <div
                    key={`img-${v.header}`}
                    className={`screenshot mx-md-4 mx-lg-0 ${isActive ? '' : 'd-none'}`}
                  >
                    {!!childImageSharp && <Img {...childImageSharp} />}
                  </div>
                );
              })}
            </div>
            <div className="col-lg-4 pl-lg-0">
              <div className="fluid-border-right h-100">
                <span style={spanStyle} />
                <div className="d-flex flex-column h-100 mt-4 mt-lg-0">
                  {content.map((v, i) => (
                    <SelectableCard
                      {...v}
                      key={v.header}
                      index={i}
                      activeIndex={activeIndex}
                      observer={observer}
                      onClick={handleCardClick(anchorRef, interval, setActiveIndex)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
