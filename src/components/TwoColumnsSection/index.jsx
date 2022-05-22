/* eslint-disable prettier/prettier */
import React from "react";
import TwoColumnsRow from "./TwoColumnsRow";
import { twoColumnsLayoutData } from "./data";
export const TwoColumnsSection = () => {
  return (
    <div className="twocolumns__layout">
      <div className="container">
        {twoColumnsLayoutData.map((twoColumnData, index) => (
          <div className="row" key={index}>
            <TwoColumnsRow twoColumnData={twoColumnData} />
          </div>
        ))}
      </div>
    </div>
  );
};
