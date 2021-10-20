import React from 'react';

export const MarketplaceSummary = ({ summary }: { summary: Summary }) => (
  <div className="marketplace-text container p-2 p-sm-4 p-md-2 p-lg-5">
    {summary.contentfulfields.map((field) => (
      <div className="my-3" key={field.fieldName}>
        <div className="row mx-auto">
          <strong>{field.fieldName}</strong>
        </div>
        <div>{field.fieldContent}</div>
      </div>
    ))}
  </div>
);
