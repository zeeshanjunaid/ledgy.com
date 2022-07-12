import React from 'react';
export const PostFilters = ({
  buttonTexts,
  onClick,
  tag,
}: {
  buttonTexts: string[];
  onClick: (arg: string) => void;
  tag: string;
}) => (
  <div className="blogfilters__wrapper">
    <div className="blogfilters__title">Browse Ledgy’s posts!</div>
    <div className="blogfilters__subtitle">
      Want to go deeper? Click on a category below to lear more about a specific subject.
    </div>
    <div className="blogfilters__row">
      <div className="blogfilters__tags">
        {buttonTexts.map((buttonText) => (
          <div
            key={buttonText}
            className={`blogfilters__tags-item ${tag === buttonText ? 'selected' : ''}`}
            onClick={() => onClick(buttonText)}
          >
            <div className="blogfilters__tags-item--link">{buttonText}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
