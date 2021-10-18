import React from 'react';

export const IntegrationSummary = ({ summary }: { summary: Summary }) => {
  const { contentfulfields } = summary;
  return (
    <div className="integrations rounded-md sticky-top container p-2 p-sm-4 p-md-2 p-lg-4">
      {contentfulfields.map((field) => (
        <div className="company-summary-contact mb-2" key={field.fieldName}>
          <div className="row mx-auto">
            <strong>{field.fieldName}</strong>
          </div>
          <div>{field.fieldContent}</div>
        </div>
      ))}
    </div>
  );
};
