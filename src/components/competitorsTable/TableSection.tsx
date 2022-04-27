import React from 'react';
import { TableRow } from './TableRow';

export const TableSection = ({ title, rows }: CompetitorTableSectionProps) => {
  return (
    <>
      <div className="bg-light competitor-table-row">
        <h3 className="m-0  py-2 px-1">{title}</h3>
      </div>
      {rows.map((val, indx) => {
        return <TableRow key={indx} row={val} />;
      })}
    </>
  );
};
