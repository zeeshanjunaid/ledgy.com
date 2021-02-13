import React, { useEffect, useRef, useState, MutableRefObject } from 'react';
import Img from 'gatsby-image';
import { throttle } from 'lodash';

import { DynamicTrans } from './DynamicTrans';
import { Section } from './Section';
import { isBrowser } from '../helpers';

const SelectableCard = ({
  header,
  description,
  index,
  activeIndex,
  observer,
  onClick,
}: {
  header: string;
  description: string;
  index: number;
  activeIndex: number;
  observer: ResizeObserver | null;
  onClick: (i: number) => void;
}) => {
  const ref = useRef(null);
  const isActive = activeIndex === index;
  const backgroundColor = isActive ? 'bg-lightest' : 'bg-transparent';

  useEffect(() => {
    const card = ref.current;
    if (card && observer) observer.observe(card);
  }, [activeIndex]);
  return (
    <div
      ref={ref}
      onClick={() => onClick(index)}
      className={`selectable-card flex-1 d-flex flex-column justify-content-center p-2 pl-4 pt-lg-3 pr-lg-3 pb-lg-3 ${backgroundColor}`}
    >
      <h5>
        <DynamicTrans>{header}</DynamicTrans>
      </h5>
      <p className="m-0">
        <DynamicTrans>{description}</DynamicTrans>
      </p>
    </div>
  );
};

const HEIGHT_CORRECTOR = 300;

const handleScroll = ({
  wrapperRef,
  interval,
  activeIndex,
  setActiveIndex,
}: {
  wrapperRef: MutableRefObject<null | HTMLElement>;
  interval: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) => {
  const { current } = wrapperRef || {};
  if (!current) return;
  const bounding = current.getBoundingClientRect();
  const { top } = bounding;
  const correctedTop = Math.round(top) - HEIGHT_CORRECTOR;
  if (correctedTop > 0) {
    setActiveIndex(0);
    return;
  }
  const roundedIndex = Math.round(Math.abs(correctedTop) / interval);
  const currentIndex = Math.min(roundedIndex, 2);
  if (activeIndex !== currentIndex) setActiveIndex(currentIndex);
};

const getEntriesHeight = (entries: ResizeObserverEntry[]) =>
  entries.reduce((res, val) => {
    return val.target.clientHeight + res;
  }, 0);

export const SelectableCardsWithScreenshots = ({
  title,
  content,
}: SelectableCardsWithScreenshotsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const [componentHeight, setComponentHeight] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(isBrowser ? window.innerHeight : 1000);

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

  const style = { height: `${cardHeight}px`, transform: `translateY(${translateY}px)` };

  const top = windowHeight / 2 - componentHeight / 2 - 90;
  const scrollDistance = 2000;
  const wrapperRef = useRef(null);
  const interval = scrollDistance / content.length;

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

  const handleCardClick = (i: number) => {
    window.onscroll = () => null;
    window.scrollTo({
      top: i * interval + window.innerHeight - HEIGHT_CORRECTOR,
      left: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      setActiveIndex(i);
    }, 300);
  };

  return (
    <Section>
      <div ref={wrapperRef} style={{ height: `${scrollDistance}px` }}>
        <div className="position-sticky" style={{ top }}>
          <h2 className="pb-5 text-center">
            <DynamicTrans>{title}</DynamicTrans>
          </h2>
          <div className="row">
            <div className="col-lg-8 pr-lg-0">
              {content.map((v, i) => {
                const { childImageSharp } = v.screenshot.localFile || {};
                const isActive = activeIndex === i;
                return (
                  <div key={`img-${v.header}`} className={`screenshot ${isActive ? '' : 'd-none'}`}>
                    {!!childImageSharp && <Img {...childImageSharp} />}
                  </div>
                );
              })}
            </div>
            <div className="col-lg-4 pl-lg-0">
              <div className="fluid-border-right h-100">
                <span style={style} />
                <div className="d-flex flex-column h-100 mt-4 mt-lg-0">
                  {content.map((v, i) => (
                    <SelectableCard
                      {...v}
                      key={v.header}
                      index={i}
                      activeIndex={activeIndex}
                      observer={observer}
                      onClick={handleCardClick}
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
