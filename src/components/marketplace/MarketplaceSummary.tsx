import React from 'react';

export const MarketplaceSummary = ({ summary }: { summary: Summary }) => {
  const { contentfulfields } = summary;

  return (
    <div className="marketplace-text container p-2 p-sm-4 p-md-2 p-lg-5">
      {contentfulfields.map((field) => (
        <div className="my-3" key={field.fieldName}>
          <div className="row mx-auto">
            <strong>{field.fieldName}</strong>
          </div>
          <div>{field.fieldContent}</div>
        </div>
      ))}
    </div>
  );
};
