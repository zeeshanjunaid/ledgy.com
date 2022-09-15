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
  <div className="blog-filters-wrapper">
    <h2 className="blog-filters-title">Browse Ledgy’s posts!</h2>
    <div className="blog-filters-subtitle">
      Want to go deeper? Click on a category below to learn more about a specific subject.
    </div>
    <div className="blog-filters-row">
      <div className="blog-filters-tags">
        {buttonTexts.map((buttonText) => (
          <div
            key={buttonText}
            className={`blog-filters-tags-item ${tag === buttonText ? 'selected' : ''}`}
            onClick={() => onClick(buttonText)}
          >
            <div className="blog-filters-tags-item--link">{buttonText}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
